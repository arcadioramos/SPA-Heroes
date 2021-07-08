import { heroes } from "../data/heroes";

export const getHeroesByName = (name ='') => {

    const heroe = name.toLowerCase();

    if(heroe === ''){
        return [];
    }
   

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(heroe));
}