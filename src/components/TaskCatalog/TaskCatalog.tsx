import React, {Component, useState} from 'react';
import TaskList from './TaskList';

interface Props {
    list: {id: number, value: string, start: string, end: string}[];
}

class TaskCatalog extends Component<Props> {

     static defaulProps = {
         all_list: [],
         state: 0
    };
    final_list: {id: number, value: string}[] = []
    stage = 0
    modules_scores: {id: number, value: string, score: number}[] = []
    task_info: {execution_time: number, deadline_start: string, deadline_end: string, is_unlimited: boolean} = {
        execution_time: 0,
        deadline_start: "",
        deadline_end: "",
        is_unlimited: false
    };


    public render() {
        return (
            <div><TaskList list={this.props.list}/></div>
            );
    }
}



export default TaskCatalog;