import React, { Component } from "react";
import { string, arrayOf } from "prop-types";
import css from "./Select.module.css";

export class Select extends Component {
  state = {
    show: false
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false,
  //     selected: props.selected
  //   };
  // }
  componentDidMount() {
    document.addEventListener("click", this.hideItems);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.hideItems);
  }
  hideItems = () => {
    this.setState({
      show: false
    });
  };
  showItems = event => {
    event.nativeEvent.stopImmediatePropagation();
    this.setState({
      show: !this.state.show
    });
  };
  selectItem = item => {
    this.props.onItemSelected(item);

    this.setState({
      show: false
      // selected: item
    });
  };
  render() {
    let { items = [], selected } = this.props;

    if (!selected) {
      selected = items[0];
    }

    return (
      <div className="Select">
        <div className={css.Selected} onClick={this.showItems}>
          {selected}
        </div>
        {this.state.show && (
          <div className="Items">
            {items.map(item => (
              <div
                className="Item"
                key={item}
                onClick={() => this.selectItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
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

Select.propTypes = {
  items: arrayOf(string).isRequired,
  selected: string
};
