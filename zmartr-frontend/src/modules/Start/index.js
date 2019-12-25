import React from 'react'
import InformationPage from '../../components/Pages/InformationPage'
import { makeStyles, Typography } from '@material-ui/core'
import logo from '../../static/images/logo-bright.png'

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
        lineHeight: '90px',
        display: 'flex'
    },
    subHeading: {
        fontSize: '40px',
        lineHeight: '50px',
        maxWidth: '650px',
        marginTop: '20px'
    },
    note: {
        marginTop: '20px'
    },
    logo: {
        height: '90px',
        marginLeft: '20px'
    }
}))

const Start = () => {

    const classes = useStyles()

    return (
        <InformationPage>
            <div className={classes.startContainer}>
                <Typography variant='h1' align='center' className={classes.startHeading}>
                    Welcome to <img className={classes.logo} src={logo} />
                </Typography>
                <Typography variant='h2' align='center' className={classes.subHeading}>
                    The simplest task managers you will ever find
                </Typography>
                <Typography variant='h5' className={classes.note}>
                    Created for entrepreneurs by entrepreneurs
                </Typography>
            </div>
        </InformationPage>
    )
}

export default Start