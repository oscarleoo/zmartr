import React from 'react'
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { addTask } from '../../redux/actions/tasks'
import TaskDragAndDrop from '../../components/TaskDragAndDrop';

// https://visme.co/blog/website-color-schemes/
// https://codesandbox.io/s/4qp6vjp319?from-embed
// https://colorhunt.co/palette/41089

const useStyles = makeStyles(theme => ({
    container: {
        height: '100%',
        width: '100%',
        background: '#3aafa9',
        display: 'flex',
        flexDirection: 'column',
    },
    listContainer: {
        flex: '1',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px',
        overflow: 'scroll'
    },
    actionBar: {
        flex: '0 0 100px',
        margin: '0 5% 0 5%',
        borderTop: '2px dashed #17252a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        flex: 1
    },
    button: {
        marginLeft: '30px',
        height: '50px',
        width: '120px',
        background: theme.palette.secondary.main,
        color: '#2b7a78'
    }
}));

const List = ({tasks, addTask}) => {

    const classes = useStyles()
    const state = {newTask: ''}

    const handleNewTaskCange = (event) => { state.newTask = event.target.value }
    const addNewTask = () => { addTask(state.newTask) }
    const addNewTaskEnter = (event) => {
        if (event.keyCode === 13) {
            addTask(state.newTask)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.listContainer}>
                <TaskDragAndDrop tasks={tasks}/>
            </div>
            <div className={classes.actionBar}>
                <TextField
                    className={classes.input}
                    label="New Task"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    autoComplete='off'
                    onChange={handleNewTaskCange}
                    onKeyDown={addNewTaskEnter}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={addNewTask}
                >
                    Add Task
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (newTask) => dispatch(addTask(newTask)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)