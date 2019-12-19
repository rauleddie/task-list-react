import { jsonTasks } from './data.json';
import React from 'react';
import TaskList from './List';

class Tasks extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tasks: jsonTasks,
            currentTasks: [],
            start: 0,
            end: 5
        };
        this.onChecked = this.onChecked.bind(this);
        this.resetTasks = this.resetTasks.bind(this);
        this.showMoreTasks = this.showMoreTasks.bind(this);
        this.resetTasks = this.resetTasks.bind(this);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        const {tasks, start, end} = this.state;
        if(prevState.start !== start && prevState.end !== end) {
            this.setState({
                ...prevState,
                start, 
                end,
                currentTasks: tasks.slice(start, end)
            });
        }
    }
    
    componentDidMount() {
        this.setState((prevState: any) => {
            const {tasks, start, end} = prevState;
            return {
                ...prevState,
                currentTasks: tasks.slice(start, end)
            };
        });
    }

    onChecked(id: string, completedStatus: boolean) {
        let updatedTasks = this.state.tasks.map((task: any) => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        this.setState((prevState: any) => {
            return {
                ...prevState,
                tasks: [...updatedTasks]
            };
        });
    }

    resetTasks() {
        this.setState((prevState: any) => {
            return {
                ...prevState,
                start: 0,
                end: 5
            }
        });
    }

    showMoreTasks() {
        const {start , end} = this.state;
        let step = 5;
        this.setState((prevState: any) => {
            return {
                ...prevState,
                start: (start + step),
                end: (end + step < jsonTasks.length ? (end + step) : jsonTasks.length)
            }
        });
    }

    render() {
        console.log(this.state);
        const {tasks, currentTasks, end} = this.state;
        return(
            <div>
                <h2 style={{ color: 'blue' }}>TASKS: </h2>
                <TaskList tasks={currentTasks} onChecked={this.onChecked}/>

                 
                {
                    end < tasks.length ? 
                    <button onClick={this.showMoreTasks}>Show More</button>
                    :   
                    <button onClick={this.resetTasks}>Reset</button>
                }   
            </div>
        );
    }
}

export default Tasks;