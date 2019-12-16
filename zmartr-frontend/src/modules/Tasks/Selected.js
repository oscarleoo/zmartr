import React from 'react'
import { connect } from 'react-redux'
import { IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/FlagOutlined'
import StopIcon from '@material-ui/icons/HighlightOffRounded'
import DeleteIcon from '@material-ui/icons/DeleteOutline'

import { stopTask, finishTask, archiveTask } from '../../redux/actions/tasks'

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%',
        background: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
    },
    taskContainer: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '50px'
    },
    task: {
        fontSize: '70px',
        lineHeight: '90px',
        padding: '8% 5%',
        border: '4px dashed #17252a',
        maxWidth: '70%',
    },
    actionBar: {
        flex: '0 0 100px',
        margin: '0 5% 0 5%',
        borderTop: '2px solid #17252a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
}));

const Selected = ({ task, stopTask, finishTask, archiveTask }) => {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.taskContainer}>
                <Typography variant='h1' align='center' className={classes.task}>{task.title}</Typography>
            </div>
            <div className={classes.actionBar}>
                <div>
                    <Tooltip title='Paus Task' enterDelay={200}>
                        <IconButton onClick={stopTask(task._id)}>
                            <StopIcon style={{ fontSize: 50, color: '#17252a' }}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Archive Task' enterDelay={200}>
                        <IconButton onClick={archiveTask(task._id)}>
                            <DeleteIcon style={{ fontSize: 50, color: '#17252a' }}/>
                        </IconButton>
                    </Tooltip>
                </div>
                <Tooltip title='Finish Task' enterDelay={200}>
                    <IconButton onClick={finishTask(task._id)}>
                        <CheckBoxIcon style={{ fontSize: 50, color: '#def2f1' }}/>
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        stopTask: (taskId) => () => dispatch(stopTask(taskId)),
        archiveTask: (taskId) => () =>  dispatch(archiveTask(taskId)),
        finishTask: (taskId) => () =>  dispatch(finishTask(taskId))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Selected)
