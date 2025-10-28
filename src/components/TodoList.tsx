// Hear oh Israel, The LORD our GOD, The LORD is One, Love the LORD your GOD with all your mind and 
// with all soul and with all might and love your neighbour as your self
import { Component, type ReactNode } from "react";
import { useTodoContext } from "./TodoProvider";
import type { ActivateType } from "./types";

class DeleteTodoBtn extends Component{

  props: Readonly<{
    onClick: () => void
  }> = {
    onClick: () => {}
  };
  render(): ReactNode {
      return (
        <button onClick={this.props.onClick}></button>
      )
  }
}

const TodoList = () => {
  const { state } = useTodoContext();

  return (
    <div>
      <ul>
        {state.map((item: ActivateType) => {
          return (
            <li>
              <span>{item.title} {item.id}</span>

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
