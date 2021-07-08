import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const dcScreen = () => {
    return (
        <div>
            <h1>DC SCREEN</h1>
            <hr/>
            <HeroesList publisher="DC Comics"/>
        </div>
    )
}
