import React, { useState, useEffect } from "react";
import "./FirstStage.css"

interface Props {
    list: {id: number, value: string}[];
    //onHandle: (list: {id: number, value: string}[]) => void;
    nextStage: (list: {id: number, value: string}[]) => void;
    prevStage: () => void;
}


function FirstStage (props: Props) {

    const [dataId, setDataId] = useState<Array<any>>([]);
    const [invalid_count, set_invalid_count] = useState<boolean>();

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
        const newList: {id: number, value: string}[] = []
        for (let i = 0; i < props.list.length; i++){
            if (dataId.includes(props.list[i].id)) {
                newList.push(props.list[i])
            }
        }
        if (newList.length !== 0) props.nextStage(newList)
        else set_invalid_count(true)
    };

    const prev_stage = () => {

    }

    return (
        <div>
            <h2>Создание задания: 1 этап</h2>
            <h4>Выберите модули</h4>
            <div className={"area"}>
                <p className={"alert-warning-invalid-score"} hidden={!invalid_count}>Выберите хотя бы 1 модуль!</p>
                {props.list.length === 0 && <h4>Модули не выбраны!</h4>}
                {props.list.length > 0 &&
                    props.list.map((item: any) => (
                        <div className={"checkboxes"} key={item.id}>
                            
                            
                            <div className="id"> {item.id}. {item.value}
                            <span className={"tooltiptext"}>{item.id}. {item.value}</span>
                            </div>
                            
                            <span>
                              <input
                                  type="checkbox"
                                  value={item.id}
                                  onChange={chooseCheckbox}
                                  checked={dataId.includes(item.id)}
                              />
                            </span>
                        </div>
                    ))}
            </div>
        <div className={"button-area"}>
            <button className={"prev"} onClick={prev_stage}>
                На главную
            </button>
            <button className={"next"} onClick={next_stage}>
                Перейти ко 2 этапу
            </button>
        </div>
        </div>
    );
}

export default FirstStage;