import React from 'react';

class TaskList extends React.Component<any, any> {
    render() {
        const { tasks, onChecked } = this.props;
        const list = tasks.length > 0 ?
            tasks.map((task: any, key: any) => {
                return (
                    <li key={key}>
                        <input type="checkbox"
                            onChange={() => onChecked(task.id, task.completed)}
                            checked={task.completed}
                        />
                        {task.details}
                    </li>
                );
            })
            :
            "No Tasks"
        return (
            <ul>{list}</ul>
        );
    }
}

export default TaskList;