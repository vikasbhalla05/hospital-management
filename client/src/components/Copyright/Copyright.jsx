import React from 'react'
import { Link,Typography } from '@material-ui/core';

function Copyright (){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {' '}
            <Link color="inherit" href="/" target="blank">
                H2Archives
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright
