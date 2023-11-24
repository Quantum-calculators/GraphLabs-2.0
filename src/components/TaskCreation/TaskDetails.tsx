import "./TaskDetails.css"
import React, { useState } from "react";


interface Props {
    //list: {id: number, value: string}[];
    //onHandle: (list: {id: number, value: string}[]) => void;
    //onHandle: (list: number[]) => void;
    nextStage: (list: {time: number, start_date: string, end_date: string}) => void;
    prevStage: () => void;

}


function TaskDetails (props: Props) {

    const [is_date_active, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!is_date_active)
        console.log(is_date_active)
    };

    const get_class_input = () => {
        if (is_date_active) {
            return "date"
        }
        else {
            return "date-disabled"
        }
    }

    const next_stage = () => {
        props.nextStage({time: 0, start_date: "string", end_date: "string"})
    };

    const prev_stage = () => {
        //const newList: number[] = []
        props.prevStage()
    };


    return (
        <div>
            <div className={"area"}>
                <div className={"element"}>
                    <span>Время выполнения задания (минут): </span>
                    <input type={"number"}/>
                </div>
                <div className={"element"}>
                    <div className={"first"}>Сроки выполнения задания</div>
                    <div className={"second"}>
                        <span>с:</span>
                        <input type={"date"} className={get_class_input()} readOnly={!is_date_active} />
                        <span>до:</span>
                        <input type={"date"} className={get_class_input()} readOnly={!is_date_active}/>
                    </div>
                    <div className={"third"}>
                        <span>бессрочный:</span>
                        <input type={"checkbox"} className={"checkboxes"} onChange={handleChange}/>
                    </div>

                </div>
            </div>

            <div className={"button-area"}>
                <button className={"prev"} onClick={prev_stage}>
                    Предыдущий этап
                </button>
                <button className={"next"} onClick={next_stage}>
                    Следующий этап
                </button>
            </div>

        </div>

    );
}

export default TaskDetails;