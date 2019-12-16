import React from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    Tooltip
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import RootRef from "@material-ui/core/RootRef";
import TimerIcon from '@material-ui/icons/Timer'
import { startTask, orderTasks } from '../../redux/actions/tasks'

const useStyles = makeStyles({
    list: {
        flex: '1',
        width: '50%',
        height: '100%',
        minWidth: '900px'
    },
    listItem: {
        height: '70px',
    },
});


const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    ...(isDragging && {
      background: '#def2f1'
    })
})

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    orderTasks(result.map(task => task._id))
    return result;
}

const TaskDragAndDrop = ({ tasks, startTask }) => {

    const classes = useStyles()

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        tasks = reorder(
          tasks,
          result.source.index,
          result.destination.index
        );
    
    }

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <RootRef rootRef={provided.innerRef}>
                    <List className={classes.list}>
                        {tasks.map((task, index) => (
                        <Draggable key={task._id} draggableId={task._id} index={index}>
                            {(provided, snapshot) => (
                            <ListItem
                                className={classes.listItem}
                                ContainerComponent="li"
                                ContainerProps={{ ref: provided.innerRef }}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                                )}
                            >
                                <ListItemText
                                primary={task.title}
                                />
                                <ListItemSecondaryAction>
                                <Tooltip title='Focus Mode' enterDelay={200}>
                                    <IconButton onClick={startTask(task._id)} style={{ color: '#17252a'}}>
                                        <TimerIcon />
                                    </IconButton>
                                </Tooltip>
                                </ListItemSecondaryAction>
                            </ListItem>
                            )}
                        </Draggable>
                        ))}
                        {provided.placeholder}
                    </List>
                    </RootRef>
                )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        startTask: (taskId) => () => dispatch(startTask(taskId)),
        orderTasks: (taskIds) => dispatch(orderTasks(taskIds))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TaskDragAndDrop)
