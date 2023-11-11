import React, {FunctionComponent} from 'react';

import logo from './logo.svg';
import './App.css';
import BaseList from "./components/containers/BaseList";
import GTable from "./components/containers/BaseList";
import {List, ListGroupItem} from "reactstrap";
import {render} from "@testing-library/react";

function App() {
  let all_rows = [
    <ListGroupItem>bjhfawbfjhbfabskjf</ListGroupItem>,
    <ListGroupItem>daw awd sda</ListGroupItem>,
    <ListGroupItem>daw awd sda</ListGroupItem>,
    <ListGroupItem>daw awd sda</ListGroupItem>
  ]

  let rows_numbers = [
      0, 1, 2, 3
  ]

  function renderer<T extends {val: React.FunctionComponent<any>}>(raw: T){
    {
      return raw.val
    }
  }

  let all_headers = [
      ""
  ]

  return (

    <>
    <GTable rows={rows_numbers} headers={all_headers} rows_jsx_components={all_rows}/>
    </>
  );
}

export default App;
