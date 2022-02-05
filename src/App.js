import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPalette from './SingleColorPalette';

import { generatePalette } from './colorHelpers';
import seedColors from "./seedColors"
import "./styles/Page.css"

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    }
    this.deletePalette = this.deletePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  deletePalette(id) {
    this.setState(
      st => ({palettes: st.palettes.filter(palette => palette.id !== id)}),
      this.syncLocalStorage
    )
  }
  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }
  savePalette(newPalette){
    this.setState(
      {palettes: [...this.state.palettes, newPalette]}, 
      this.syncLocalStorage
    )
  }
  syncLocalStorage(){
    // save palettes to local storage
    window.localStorage.setItem(
      "palettes", 
      JSON.stringify(this.state.palettes)
    );
  }
  render() {
    const { palettes } = this.state;
    return(
        <Route render={({location}) =>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={1000}>
              <Switch location={location}>
                <Route 
                  exact path="/" 
                  render={(routeProps) => 
                    <Page>
                      <PaletteList 
                        palettes={palettes} 
                        deletePalette={this.deletePalette} 
                        {...routeProps} 
                      />
                    </Page>
                  } 
                />
                <Route 
                  exact path="/palette/new" 
                  render={(routeParams) => 
                    <Page>
                      <NewPaletteForm 
                        savePalette={this.savePalette} 
                        palettes={this.state.palettes} 
                        {...routeParams} 
                      />
                    </Page>
                  }
                />
                <Route 
                  exact path="/palette/:id" 
                  render={(routeProps) => 
                    <Page>
                      <Palette 
                        palette={generatePalette(this.findPalette(routeProps.match.params.id))} 
                      />
                    </Page>
                  } 
                />
                <Route 
                  exact path="/palette/:paletteId/:colorId"
                  render={(routeProps) => 
                    <Page>
                      <SingleColorPalette 
                        palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} 
                        colorId={routeProps.match.params.colorId} 
                      />
                    </Page>
                  } 
                />
                <Route 
                  render={(routeProps) => 
                    <Page>
                      <PaletteList 
                        palettes={palettes} 
                        deletePalette={this.deletePalette} 
                        {...routeProps} 
                      />
                    </Page>
                  } 
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        } />
    )
  }
}

export default App;
