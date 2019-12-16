import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import ApplicationRoutes from '../../routes/ApplicationRoutes'
import InformationRoutes from '../../routes/InformationRoutes'

const useStyles = () => makeStyles({
    application: {
        height: '100vh',
        width: '100%'
    }
})

const Application = ({ token }) => {

    const classes = useStyles()

    const renderApplication = () => {
        if (token) {
            return <ApplicationRoutes/>
        } else {
            return <InformationRoutes/>
        }
    }

    return (
        <div className={classes.application}>{renderApplication()}</div>
    )

}

const mapStateToProps = state => {
    return {
        token: state.authentication.token
    }
}

export default connect(
    mapStateToProps,
    null
)(Application)