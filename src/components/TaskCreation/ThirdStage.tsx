import "./ThirdStage.css"
import React, { useState } from "react";


interface Props {
    groups: {id: number, name: string}[];
    nextStage: (task_info: {execution_time: number, 
                            deadline_start: string | null, 
                            deadline_end: string | null, 
                            is_unlimited: boolean | null,
                            groups_ids: number[],
                            task_name: string}) => void;
    prevStage: () => void;


}


function ThirdStage (props: Props) {

    const [is_date_active, setChecked] = useState(true);
    const [invalid_time, set_invalid_time] = useState<boolean>();
    const [invalid_deadline, set_invalid_deadline] = useState<boolean>();
    const [invalid_name, set_invalid_name] = useState<boolean>();


    const handleChange = () => {
        setChecked(!is_date_active)
    };

    const get_class_input = () => {
        if (is_date_active) return "date"
        else return "date-disabled"
    }

    const next_stage = () => {
        let time = document.getElementById("input-time") as HTMLInputElement;
        let deadline_start = document.getElementById("input-deadline-start") as HTMLInputElement;
        let deadline_end = document.getElementById("input-deadline-end") as HTMLInputElement;
        let is_unlimited = document.getElementById("input-is-unlimited") as HTMLInputElement;
        let name = document.getElementById("input-name") as HTMLInputElement;
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')

        // номера групп
        let groups_id: number[] = [];
        for (let i = 0; i < checked.length; i++){            
            const found = props.groups.find(({name}) => name === checked[i].id)?.id
            if (found) {
                groups_id.push(found)
            }
        }
        
        // временной интервал
        if (time.valueAsNumber <= 0 || isNaN(time.valueAsNumber)) {
            set_invalid_time(true)
            return;
        }
        else set_invalid_time(false)

        // название задания
        
        if (name.value.length <= 0) {
            set_invalid_name(true)
            return;
        }
        else set_invalid_name(false)

        if (!is_unlimited.checked){

            const date1 = new Date(deadline_start.value);
            const date2 = new Date(deadline_end.value);
            if (date2.getDay() - date1.getDay() < 0 || isNaN(date1.getDay()) || isNaN(date2.getDay())) {
                set_invalid_deadline(true)
                return;
            }
            else set_invalid_deadline(false)

            if (deadline_start.value !== '' && deadline_end.value !== '' && !isNaN(time.valueAsNumber)){
                let res = {
                    execution_time: time.valueAsNumber,
                    deadline_start: deadline_start.value,
                    deadline_end: deadline_end.value,
                    is_unlimited: is_unlimited.checked,
                    groups_ids: groups_id,
                    task_name: name.value
                }
                props.nextStage(res);
            }
        }
        else {
            if (!isNaN(time.valueAsNumber)){
                let res = {
                    execution_time: time.valueAsNumber,
                    deadline_start: "",
                    deadline_end: "",
                    is_unlimited: true,
                    groups_ids: groups_id,
                    task_name: name.value
                }
                props.nextStage(res);
            }
        }


    };

    const prev_stage = () => {
        props.prevStage()
    };


    return (
        <div>
            <h2>Создание задания: 3 этап</h2>
            <h4>Введите информацию о задании</h4>
            <div className={"area"}>
                <p className={"alert-warning-invalid-time"} hidden={!invalid_time}>Время на выполнение должно быть больше 0!</p>
                <p className={"alert-warning-invalid-deadline"} hidden={!invalid_deadline}>Введите корректные даты начала и окончания!</p>
                <p className={"alert-warning-invalid-name"} hidden={!invalid_name}>Введите название задания!</p>
                
                <div className={"element"}>
                    <div>Название задания:</div>
                    <input type={"string"} id={"input-name"}/>
                </div>
                
                <div className={"element"}>
                    <div>Время выполнения задания (минут):</div>
                    <input type={"number"} id={"input-time"}/>
                </div>
                
                <div className={"element"}>
                    <div className={"first"}>Сроки выполнения задания</div>
                    <div className={"second"}>
                        <span>с:</span>
                        <input type={"date"} className={get_class_input()} readOnly={!is_date_active} id={"input-deadline-start"}/>
                        <span>до:</span>
                        <input type={"date"} className={get_class_input()} readOnly={!is_date_active} id={"input-deadline-end"}/>
                    </div>
                    <div className={"third"}>
                        <span>бессрочный:</span>
                        <input type={"checkbox"} className={"checkboxes"} onChange={handleChange} id={"input-is-unlimited"}/>
                    </div>
                </div>
                
                <div className={"element"}>
                <div>Выберите группы, которым будет назначена данная работа:</div>
                    <details className="group">
                        <summary>Группы</summary>
                        <div className="group">
                            <ul>
                                {props.groups.length > 0 &&
                                    props.groups.map((item: any) => (
                                        <li>
                                            <label><input id={item.name} type="checkbox" name="fc"/>{item.name}</label>
                                        </li>
                                        
                                ))}
                                
                            </ul>
                        </div>
                    </details>
                </div>
                
                

            </div>

            <div className={"button-area"}>
                <button className={"prev"} onClick={prev_stage}>
                    Перейти ко 2 этапу
                </button>
                <button className={"next"} onClick={next_stage}>
                    Создать задание
                </button>
            </div>

                


        </div>

    );
}

export default ThirdStage;