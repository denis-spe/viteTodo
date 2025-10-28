// Love the LORD your GOD with all thine heart and with all soul and with all thine mind
// And love your neighbor as your self

import { createContext, useReducer, useContext } from "react";
import { contextDefaultData, initialActivates } from "./data";
import type {
  ActivateArrayType,
  ActivateType,
  TodoProviderPropType,
} from "./types";

// Create the todo context
export const TodoContext = createContext(contextDefaultData);

function reducer(
  state: ActivateArrayType,
  action: ActivateType
): ActivateArrayType {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          title: action.title,
          done: action.done,
          type: "add",
        },
      ] satisfies ActivateArrayType;
    case "remove":
        return state.filter((value: ActivateType) => value.id !=  action.id)
    default:
      throw new TypeError();
  }
}

/**
 * Todo provider function represent data to components for use and
 * modification.
 * @param children: react nodes.
 * @returns A context provider.
 */
export default function TodoProvider({ children }: TodoProviderPropType) {
  const [state, dispatch] = useReducer(reducer, initialActivates);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

/**
 * Use todo context
 */
export const useTodoContext = () => useContext(TodoContext);
