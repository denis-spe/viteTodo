// Love the LORD your GOD with all your mind and with all soul and with
// all your strength. And Love your neighbor as yourself

import {
  Component,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { useTodoContext } from "./TodoProvider";

export class TodoInput extends Component {
  props: Readonly<{
    value: string;
    onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  }> = {
      value: "",
      onchange: () => { },
    };

  render(): ReactNode {
    return (
      <>
        <input
          id="add-input-field"
          type="text"
          value={this.props.value}
          onChange={this.props.onchange}
        />
      </>
    );
  }
}

export class TodoAddBtn extends Component {
  props: Readonly<{
    text: string;
    onClick: () => void;
  }> = {
      text: "",
      onClick: () => { },
    };

  render(): ReactNode {
    return (
      <>

        <button id="todo-add-btn" onClick={this.props.onClick}>
          <span id="add-sign">+</span>
          {this.props.text}
          </button>
      </>
    );
  }
}

export default function TodoAddition() {
  const { state, dispatch } = useTodoContext();
  const [text, setText] = useState("");

  return (
    <>
      <TodoInput
        value={text}
        onchange={(env: ChangeEvent<HTMLInputElement>) => {
          setText(env.target.value);
          env.preventDefault();
        }}
      />
      <TodoAddBtn
        text="Add"
        onClick={() => {
          dispatch({
            id: state.length,
            title: text,
            done: false,
            type: "add",
          });
          setText("")
        }}
      />
    </>
  );
}
