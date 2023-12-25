import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Server } from "miragejs";

new Server({
    routes() {
        this.namespace = "api";

        this.get("/modules", () =>{
            return [
                { id: 1, value: "Граф по матрице смежности"},
                { id: 2, value: "Граф по матрице инцидентности"},
                { id: 3, value: "Матрица смежжности по графу"},
            ]
        })

        this.get("/modules_inf", () =>{
          return [
              { id: 1, value: "Лабораторная 1", start: "21.12.2023", end: "24.12.2023"},
              { id: 2, value: "Лабораторная 2", start: "22.12.2023", end: "25.12.2023"},
              { id: 3, value: "Лабораторная 3", start: "23.12.2023", end: "26.12.2023"},
          ]
      })

      this.get("/groups", () =>{
        return [
            { id: 1, name: "Б20-504"},
            { id: 2, name: "Б20-514"},
            { id: 3, name: "Б20-524"},
        ]
    })
    }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
       <App/>
  </React.StrictMode>
);

