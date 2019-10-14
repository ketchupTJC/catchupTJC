import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const Login = ({ loggedIn, setLoggedIn }) => {
    const classes = useStyles();
    console.log('state', loggedIn, setLoggedIn);
    return (
        <Button
            variant="outlined"
            className={classes.button}
            onClick={() => setLoggedIn(true)}
        >
            Log In
        </Button>
    );
};

export default Login;
