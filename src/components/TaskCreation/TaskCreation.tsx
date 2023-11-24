import React, {Component} from 'react';
import "./TaskCreation.css"
import ListCheckBox from "./ListCheckBox";
import ListScoreBox from "./ListScoreBox";
import TaskDetails from "./TaskDetails";


interface Props {
    all_list: {id: number, value: string}[];
    final_list?: {id: number, value: string}[];
}

class TaskCreation extends Component<Props> {

     static defaulProps = {
         all_list: [],
         state: 0
    };

     final_list: {id: number, value: string}[] = []
    stage = 0
    modules_max_scores: number[] = []
    maxTime = 0;
    dateStart = "";
    dateEnd = "";


    // first stage handlers
    public firstStagePrev = () => {
        this.stage = 0
    }

    public firstStageNext = (list: {id: number, value: string}[]) => {
        this.final_list = list
        this.stage = 1
        console.log(this.stage)
        this.forceUpdate()
    }

    // second stage handlers
    public secondStagePrev = () => {
        this.stage = 0
        this.forceUpdate()
    }

    public secondStageNext = (list: number[]) => {
        this.modules_max_scores = list
        this.stage = 2
        console.log(this.stage)
        this.forceUpdate()
    }

    // third stage handlers
    public thirdStagePrev = () => {
        this.stage = 1
        this.forceUpdate()
    }

    public thirdStageNext = () => {
        this.stage = 3
        this.forceUpdate()
    }


    public render() {
        if (this.stage === 0) {
            return (
                <>
                    <h2>Создание задания</h2>
                    <h4>Выберите модули</h4>
                    <ListCheckBox list={this.props.all_list}
                                  nextStage={this.firstStageNext}
                                  prevStage={this.firstStagePrev}/>
                </>
            );
        }
        if (this.stage === 1) {
            return (
                <>
                    <h2>Создание задания</h2>
                    <h4>Присвойте баллы модулям</h4>
                    <ListScoreBox list={this.final_list}
                                  nextStage={this.secondStageNext}
                                  prevStage={this.secondStagePrev}/>
                </>
            );
        }
        if (this.stage === 2) {
            return (
                <>
                    <h2>Создание задания</h2>
                    <h4>Введите время и сроки выполнения задания</h4>
                    <TaskDetails
                        nextStage={this.thirdStageNext}
                        prevStage={this.thirdStagePrev}/>
                </>
            );
        }
    }
}



export default TaskCreation;