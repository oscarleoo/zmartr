import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import Page from '../../components/Page'
import Selected from './Selected'
import List from './List'

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%'
    }
});

const Tasks = ({ selectedTask }) => {

    const classes = useStyles()

    const renderView = () => {
        if (selectedTask) {
            return <Selected task={selectedTask}/>
        } else {
            return <List />
        }
    }

    return (
        <Page>
            {renderView()}
        </Page>
    )
}

const mapStateToProps = state => {
    return {
        selectedTask: state.tasks.selected,
    }
}

export default connect(
    mapStateToProps,
    null
)(Tasks)