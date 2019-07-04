# Exercice Redux

## Installer les dépendances

`npm install` pour réinstaller le contenu de `package-lock.json`

## Installer redux

`npm install redux react-redux`

## Le state 

Le state devra avoir cette forme là

```
{
  newTodo: 'Achet',
  todos: [{
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  }, {
    id: 2,
    title: 'Aller au sport',
    completed: true,
  }, {
    id: 3,
    title: 'Utiliser Redux',
    completed: false,
  }],
}
```

## Créer store

Reprendre le code de hello-redux dans index.js

Utiliser combineReducers pour pouvoir utiliser 2 reducers :

* le premier qui s'occupe de la string newTodo
* le premier qui s'occupe du tableau todos

Prévoir des valeurs initiales (comme avec count)

## Ecrire les reducers se basant sur les actions TODO_ADD, TODO_CHANGE

Créer les constantes TODO_ADD, TODO_CHANGE

Dans le newTodoReducer, traiter TODO_CHANGE. L'action TODO_CHANGE ressemblera à :

```
{
  type: 'TODO_CHANGE',
  payload: 'Ache'
}
```

Dans le todosReducer, traiter TODO_ADD. L'action TODO_ADD ressemblera à :

```
{
  type: 'TODO_ADD',
  payload: {
    id: 123,
    text: 'Acheter du pain',
    completed: false,
  }
}
```

Attention dans le todosReducer on manipule un tableau, il faut
créer un nouveau tableau (changement immuable)

Avec l'extension Redux Devtools, tester via le bouton dispatch que les reducers
fonctionnent

## Ecrire les versions connectées des composants TodoForm et TodoList

Ecrire la fonction mapStateToProps (les clés retournées sont les props des composant TodoForm : newTodo, TodoList: todos)

Si possible rechercher dans le state avec un selecteur (selectors.js)

Pour TodoForm il y aura un mapDispatchToProps avec 2 clés :
- onTodoChange
- onTodoAdd

Qui doit dispatcher les actions correspondant (celle testées via l'extension)

Si possible créer les actions via des actions creators (actions.js)

## Optionnel (TODO_DELETE)

