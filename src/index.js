import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList.js";

const element =<div><TodoList /></div> ;
ReactDOM.render(element, document.getElementById("container"));
