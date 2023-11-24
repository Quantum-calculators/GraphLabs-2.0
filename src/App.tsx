import React, {FunctionComponent, useState} from 'react';
import './App.css';
import BaseList from "./components/containers/BaseList";
import {List, ListGroupItem} from "reactstrap";
import {render} from "@testing-library/react";
import ReactDOM from "react-dom/client";
import BaseListRow from "./components/containers/BaseListRow";
import BaseRow from "./components/containers/BaseListRow";
import "./components/TaskCreation/TaskCreation";
import TaskCreation from "./components/TaskCreation/TaskCreation";
import Header from "./components/header/Header";

function App() {

    const [checkedList, setCheckedList] = useState([]);
    let all_rows = [
      {id: 1, value: "Первый модуль"},
      {id: 2, value: "Второй модуль"},
      {id: 3, value: "Третий модуль"},
    ]


    return (
    <div>
    <Header/>
    <TaskCreation all_list={all_rows}/>
    </div>
    );
}

export default App;

/*
<TaskCreationTemplate>
      {"assad"}
      <div style={{"padding": "10px", }}>

        <BaseList headers={all_headers} rows_jsx_components={all_rows}/>
      </div>
    </TaskCreationTemplate>
    let all_rows = [
    <BaseRow text1={"aaa"} text2={"vvv"}/>,
    <BaseRow text1={"bbb"} text2={"vvv"}/>,
    <BaseRow text1={"ccc"} text2={"vvv"}/>,
    <BaseRow text1={"ddd"} text2={"vvv"}/>,
    <BaseRow text1={"eee"} text2={"vvv"}/>,
  ]
 */