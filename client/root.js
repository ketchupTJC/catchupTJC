import React, { useState, useContext } from 'react';
import App from './components/app/app';
import Login, { isLoggedIn } from './components/authentication/login';
import { initialState, reducer } from './components/authentication/authReducer';

const AuthContext = React.createContext();

const Root = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    // const [loggedIn, setLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {state.isAuthenticated ? (
                <App />
            ) : (
                <Login value={(loggedIn, setLoggedIn)} />
            )}
        </AuthContext.Provider>
    );
};

export default Root;
