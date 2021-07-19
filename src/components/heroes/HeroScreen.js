import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';
//const batman = '../../assets/heroes/dc-batman.jpg'
const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();


    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
    //console.log('Hero: '+hero+" heroeId: "+heroeId)

    if (!hero) {
        return <Redirect to="/"></Redirect>
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    const {

        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,

    } = hero;

    //console.log(heroImages(`./dc-superman.jpg`))

    return (
        <div className="row mt-5 ">
            <div className="col-4">
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`} desde public assets
                   // src={batman}  
                    src={ heroImages(`./${heroeId}.jpg`).default }
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />

            </div>
            <div className="col-8 ">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: {alter_ego}</b></li>
                    <li className="list-group-item"> <b>Publisher: {publisher}</b></li>
                    <li className="list-group-item"> <b>First appearance: {first_appearance}</b></li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info"
                    onClick={handleReturn}
                >Return</button>
            </div>
        </div>
    )
}
