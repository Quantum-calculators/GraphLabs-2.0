import React, { useState, useEffect } from "react";
import "./ListCheckBox.css"

interface Props {
    list: {id: number, value: string}[];
    //onHandle: (list: {id: number, value: string}[]) => void;
    nextStage: (list: {id: number, value: string}[]) => void;
    prevStage: () => void;
}


function ListCheckBox (props: Props) {

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
        const newList: {id: number, value: string}[] = []
        for (let i = 0; i < props.list.length; i++){
            if (dataId.includes(props.list[i].id)) {
                newList.push(props.list[i])
            }
        }
        props.nextStage(newList)
    };

    const prev_stage = () => {

    }

    return (
        <div>
            <div className={"area"}>
                {props.list.length === 0 && <h4>Модули не выбраны!</h4>}
                {props.list.length > 0 &&
                    props.list.map((item: any) => (
                        <div className={"checkboxes"} key={item.id}>
                            <span className={"id"}>{item.id}. {item.value}</span>
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
                Следующий этап
            </button>
        </div>
        </div>
    );
}

export default ListCheckBox;