import UserContext from "../UserContext";
import {DataGrid} from '@material-ui/data-grid';
import React from "react";
import TaskForm from "./TaskForm";


const TaskList = () => {
    const userContext = React.useContext(UserContext);
    const username = userContext.user.username;
    const tasks = userContext.tasks;

    const columns = [
        {field: 'id', headerName: 'ID', width: 200},
        {field: 'task', headerName: 'Task', width: 200},
        {field: 'taskDescription', headerName: 'Task Description', width: 300},
    ];
    const rows = [];
    tasks[0].forEach((tasks) => {
        if (tasks.username.valueOf() === username.valueOf()) {

            rows.push(
                {id: tasks.id, task: tasks.taskTitle, taskDescription: tasks.taskDescription}
            )
        }
    })

    return (

        <div style={{height: '100%', width: '100%'}}>
            <TaskForm username={username} lastIndex={rows[rows.length-1].id}/>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    )
}

export default TaskList
