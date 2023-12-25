import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react';
import './App.css';
import "./components/TaskCreation/TaskCreation";
import TaskCreation from "./components/TaskCreation/TaskCreation";
import Header from "./components/header/Header";
import TaskCatalog from './components/TaskCatalog/TaskCatalog';
import { BrowserRouter as Router, Routes, Route }from "react-router-dom";
import Main from './components/Main/Main';


const IS_DEBUG = true;


function App() {

    const [modules, setModules] = useState([]);

    useEffect(() => {
        fetch("api/modules/")
            .then(response => response.json())
            .then(res => setModules(res))
    }, [])

    const [modules_inf, setModules_inf] = useState([]);

    useEffect(() => {
        fetch("api/modules_inf/")
            .then(response => response.json())
            .then(res => setModules_inf(res))
    }, [])

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch("api/groups/")
            .then(response => response.json())
            .then(res => setGroups(res))
    }, [])

    return (
    <div>
        <Router>
            <Routes>
                <Route path="/catalog"
                    element={
                        <>
                        <Header IS_DEBUG={IS_DEBUG}/>
                        <TaskCatalog list={modules} />
                        </>
                    } 
                />
                <Route path="/task_creation"
                    element={
                        <>
                        <Header IS_DEBUG={IS_DEBUG}/>
                        <TaskCreation all_list={modules} groups={groups}/>
                        </>
                    } 
                />
                <Route path="/"
                    element={
                        <>
                        <Header IS_DEBUG={IS_DEBUG}/>
                        <Main/>
                        </>
                    } 
                />

            </Routes>
        </Router>
        </div>
    );
}
// <TaskCreation all_list={modules}/>
// <TaskCatalog list={modules}/>
export default App;
