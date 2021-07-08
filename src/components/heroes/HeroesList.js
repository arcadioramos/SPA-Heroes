import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {


    /*Obtiene los datos de los heroes mediante el método getHeroesByPublisher*/
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])


    return (
        <div className="card-columns animate__animated animate__bounce">
            {heroes.map(hero => (

                <HeroCard key={hero.id}
                    {
                    /*se utiliza el operador spread para mandarle los datos al componente herocard sin necesidad de enviarlo uno por uno*/
                    ...hero}
                />



            ))}
        </div>
    )
}
