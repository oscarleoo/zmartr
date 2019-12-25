import React from 'react'
import InformationPage from '../../components/Pages/InformationPage'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    startContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    startHeading: {
        fontSize: '80px',
        lineHeight: '90px'
    },
    subHeading: {
        fontSize: '40px',
        lineHeight: '50px',
        maxWidth: '650px',
        marginTop: '20px'
    }
}))

const Start = () => {

    const classes = useStyles()

    return (
        <InformationPage>
            <div className={classes.startContainer}>
                <Typography variant='h1' align='center' className={classes.startHeading}>
                    Welcome to Zmartr
                </Typography>
                <Typography variant='h2' align='center' className={classes.subHeading}>
                    One of the simplest task managers you will ever find
                </Typography>
                <Typography variant='h5'>
                    Created for entrepreneurs by an entrepreneur
                </Typography>
            </div>
        </InformationPage>
    )
}

export default Start