const prenoms = ['Romain', 'Jean'];


// const romain = prenoms[0];
// const jean = prenoms[1];

//    ['Romain', 'Jean']
const [romain  , jean] = prenoms;

const props = {name: 'Eric'};

//    { name: 'Eric'}
const { name: eric } = props;
console.log(eric);