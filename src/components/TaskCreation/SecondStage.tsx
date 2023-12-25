import React, { useState, useEffect } from "react";
import "./SecondStage.css"
import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

interface Props {
    list: {id: number, value: string}[];
    //onHandle: (list: {id: number, value: string}[]) => void;
    nextStage: (list: {id: number, value: string, score: number}[]) => void;
    prevStage: () => void;
}


function SecondStage (props: Props) {

    const [invalid_score, set_invalid_score] = useState<boolean>();
    const [dataId, setDataId] = useState<Array<any>>([]);

    const chooseCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.value);
        if (dataId.includes(id)) {
            const idCollection = dataId.filter((id) => id !== id);
            setDataId(idCollection);
        } else {
            const idCollection = [...dataId];
            idCollection.push(id);
            setDataId(idCollection);
        }
    };

    const next_stage = () => {
        let list_scores: {id:number, value: string, score: number}[] = [];

        let has_invalid_score: boolean = false;

        for (let i: number = 0; i < props.list.length; i++){
            let id_i = document.getElementById("input-score-" + props.list[i].id) as HTMLInputElement | null;
            if (id_i != null) {
                let i_module = {
                    id: props.list[i].id,
                    value: props.list[i].value,
                    score: id_i.valueAsNumber,
                }
                if (id_i.valueAsNumber < 1 || isNaN(id_i.valueAsNumber)){
                    has_invalid_score = true;
                }

                list_scores.push(i_module);
            }
        }

        if (has_invalid_score){
            set_invalid_score(true);
        }
        else {
            props.nextStage(list_scores)
        }
    };

    const prev_stage = () => {
        const newList: number[] = []
        props.prevStage()
    };

    return (
        <div>
            <h2>Создание задания: 2 этап</h2>
            <h4>Присвойте баллы модулям</h4>
            <div className={"area"}>

                <p className={"alert-warning-invalid-score"} hidden={!invalid_score}>Оценка за модуль должна быть больше 0!</p>
                {props.list.length > 0 &&
                props.list.map((item: any, index) => (
                    <div className={"checkboxes"} key={item.id}>
                        <span className={"id"}>{item.id}. {item.value}</span>
                        <span>
                            <input type="number" id={"input-score-" + item.id.toString()} onChange={() => ({})}/>
                        </span>
                    </div>
                ))}
            </div>
            <div className={"button-area"}>
                <button className={"prev"} onClick={prev_stage}>
                    Перейти к 1 этапу
                </button>
                <button className={"next"} onClick={next_stage}>
                    Перейти к 3 этапу
                </button>
            </div>
        </div>
            );
}

export default SecondStage;