import React, { Component } from 'react';

class Select extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div className="Select">
        <div className="Selected"></div>
        {this.state.show && <div className="Items"></div>}
      </div>
    );
  }
  /*
  1 - Créer 2 props : selected et items
  selected la valeur selectionnée à afficher dans <div className="Selected"></div>
  items (tableau de string) à afficher dans <div className="Items"></div>
  2 - Documenter avec prop-types 
  https://reactjs.org/docs/typechecking-with-proptypes.html
  items est obligatoire
  selected est optionnel (1er élément du tableau sinon)
  3 - Au clic de <div className="Select">, afficher ou non les items
  4 - Mettre à jour selected au clic de l'item
  */
}