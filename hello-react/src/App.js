import React, { useState } from "react";
import { Hello } from "./Hello";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Select } from "./Select";
import { Alert } from "./Alert";

function App() {
  /*
  {
    show: true,
  }
  function toggleShow(show) {
    return !show;
  }
  */
  const [show, setShow] = useState(true);
  const [selectedPrenom, setSelectedPrenom] = useState("Romain");
  const prenoms = ["Jean", "Eric", "Romain"];
  const hellos = prenoms.map(prenom => <Hello key={prenom} name={prenom} />);

  // let clock;

  // if (show) {
  //   clock = <Clock />
  // } else {
  //   clock = 'Pas d horloge';
  // }

  // 'Jean' -> transformationFct = <Hello name="Jean" />
  // 'Eric' -> transformationFct = <Hello name="Eric" />
  // 'Romain' -> transformationFct = <Hello name="Romain" />

  // return React.createElement('div', {className: 'App'},
  //   []
  //   React.createElement('h2', {},
  //     'Bienvenue'
  //   )
  // );
  return (
    <div className="App">
      <Alert>Contenu</Alert>
      {hellos}
      <button onClick={() => setShow(!show)}>{show ? "Off" : "On"}</button>
      {show && <Clock />}
      <Counter />
      <Counter />
      <Select
        selected={selectedPrenom}
        items={["Jean", "Eric", "Romain"]}
        onItemSelected={prenom => setSelectedPrenom(prenom)}
      />
      <Select
        selected={selectedPrenom}
        items={["Jean", "Eric", "Romain"]}
        onItemSelected={prenom => setSelectedPrenom(prenom)}
      />
      <Hello name={selectedPrenom} />
      <Hello name="Romain" />
    </div>
  );
}

export default App;
