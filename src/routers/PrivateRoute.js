import React from 'react'
import {
    Route, redirect, Redirect
} from "react-router-dom";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)

            )}
        />
        
    )
}