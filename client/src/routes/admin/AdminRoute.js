import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext' 

function AdminRoute({component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                // if user id === admin id
                return currentUser !== null && (currentUser.uid).includes('koczTnaWJYfySf22776iSu9ePOj2')
                ? <Component {...props}  /> 
                : <Redirect to="/patient" />
            }}
        >

        </Route>
    )
}

export default AdminRoute
