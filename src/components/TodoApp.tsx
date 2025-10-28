// Love the LORD your GOD with all thine heart and with all thine soul and with all thine mind
// And love your neighbor as your self

import { Component } from "react";
import TodoProvider from "./TodoProvider"
import TodoList from "./TodoList";
import TodoAddition from "./TodoAddition";

export default class TodoApp extends Component {
    render(){
        return (
            <TodoProvider>
                <TodoAddition />
                <TodoList />
            </TodoProvider>
        )
    }
}