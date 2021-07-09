import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin =()=>{
        //history.replace('/')
      
        dispatch({
            type: types.login,
            payload: {
                name: 'arcadio'
            },
        })

        history.replace('/')
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>

            <button 
            className="btn btn-primary"
            onClick={ handleLogin }
            >Login</button>
        </div>
    )
}
