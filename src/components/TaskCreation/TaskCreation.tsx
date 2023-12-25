import React, {Component, useState} from 'react';
import "./TaskCreation.css"
import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";


interface Props {
    all_list: {id: number, value: string}[];
    final_list?: {id: number, value: string}[];
    groups: {id: number, name: string}[]
}

class TaskCreation extends Component<Props> {

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




    // first stage handlers
    public firstStagePrev = () => {
        this.stage = 0
    }

    public firstStageNext = (list: {id: number, value: string}[]) => {
        this.final_list = list
        this.stage = 1
        this.forceUpdate()
    }

    // second stage handlers
    public secondStagePrev = () => {
        this.stage = 0
        this.forceUpdate()
    }

    public secondStageNext = (list: {id: number, value: string, score: number}[]) => {
        this.modules_scores = list
        this.stage = 2
        this.forceUpdate()
        console.log(this.modules_scores)
    }

    // third stage handlers
    public thirdStagePrev = () => {
        this.stage = 1
        this.forceUpdate()
    }

    public thirdStageNext = (task_info: {execution_time: number, 
                                        deadline_start: string | null, 
                                        deadline_end: string | null, 
                                        is_unlimited: boolean | null,
                                        groups_ids: number[],
                                        task_name: string}) => {
        console.log(task_info)
        this.stage = 3
        this.forceUpdate()
    }

    public render() {
        if (this.stage === 0) {
            return (
                    <FirstStage list={this.props.all_list}
                                nextStage={this.firstStageNext}
                                prevStage={this.firstStagePrev}/>
            );
        }
        if (this.stage === 1) {
            return (
                    <SecondStage list={this.final_list}
                                 nextStage={this.secondStageNext}
                                 prevStage={this.secondStagePrev}/>
            );
        }
        if (this.stage === 2) {
            return (
                    <ThirdStage nextStage={this.thirdStageNext}
                                prevStage={this.thirdStagePrev}
                                groups={this.props.groups}/>
            );
        }
        if (this.stage === 3) {
            return (
                <>
                    <h2>Задание успешно создано!</h2>
                </>
            );
        }
    }
}



export default TaskCreation;