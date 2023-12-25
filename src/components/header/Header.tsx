import React from 'react';
import "./Header.css"


interface Props {
    IS_DEBUG: boolean;
}

function Header (props: Props){
    if (props.IS_DEBUG) {
        return (
            <header>
                <a href={"/task_creation"} className={"head"}>
                    Создание задания
                </a>
                <a href={"/catalog"} className={"head"}>
                    Каталог
                </a>
                <a href={"/"} className={"head"}>
                    Личный кабинет
                </a>
        </header>
        )
    }
    return (
        <header>
            <a href={"/"} className={"head"}>
                Личный кабинет
            </a>
        </header>
    )
}

export default Header;