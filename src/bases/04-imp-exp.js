import heroes, { owners } from "./data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(heroes);
console.log(owners);

console.log(getHeroeById(4));
console.log(getHeroeByOwner(owners[0]));