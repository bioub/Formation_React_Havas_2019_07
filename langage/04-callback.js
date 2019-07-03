const prenoms = ['Romain', 'Eric'];

function TodoForm(array, props) {
  array.forEach(element => {
    console.log(element);
  });

  props.onTodoAdd();
}

function handleTodoAdd() {
  console.log('End of the loop');
}

TodoForm(prenoms, {onTodoAdd: handleTodoAdd});