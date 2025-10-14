// Love the LORD your GOD with all thine heart and with all soul and with all thine mind
// And love your neighbor as your self

import { createContext, useReducer, useContext } from "react";
import { contextDefaultData, initialActivates } from "./data";
import type { ActivateArrayType, ActivateType, TodoProviderPropType } from "./types";

// Create the todo context
const TodoContext = createContext(contextDefaultData)

function reducer(state: ActivateArrayType, action: ActivateType){
    switch (action.type){
        case "add":
            state.push(action)
    }
    return state
}

/**
 * Todo provider function represent data to components for use and
 * modification.
 * @param children: react nodes.
 * @returns A context provider.
 */
export default function TodoProvider({ children }: TodoProviderPropType){
    const [ state, dispatch ] = useReducer(reducer, initialActivates)

    return (
        <TodoContext.Provider value={{ state, dispatch}}>
            { children }
        </TodoContext.Provider>
    )
}

/**
 * Use todo context
 */
export const useTodoContext = () => useContext(TodoContext)