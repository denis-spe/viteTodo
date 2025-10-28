// Love the LORD your GOD with all your mind and with all soul and with
// all your strength. And Love your neighbor as yourself

import {
  Component,
  useState,
  type ChangeEvent,
  type Context,
  type ReactNode,
} from "react";
import { TodoContext, useTodoContext } from "./TodoProvider";
import type { ActivateType, TodoContextType } from "./types";

export class TodoInput extends Component {
  props: Readonly<{
    value: string;
    onchange: (event: ChangeEvent<HTMLInputElement>) => void;
  }> = {
    value: "",
    onchange: () => {},
  };

  render(): ReactNode {
    return (
      <>
        <input
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
    onClick: () => {},
  };

  render(): ReactNode {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

// export default class TodoAddition extends Component {
//   state: Readonly<{
//     text: string
//   }> = {
//     text: ""
//   };

//   static contextType: Context<TodoContextType> = TodoContext;
//   declare context: React.ContextType<typeof TodoContext>;

//   render(): ReactNode {
//     const { state, dispatch } = this.context

//     return (
//       <>
//         <TodoInput value={this.state.text} onchange={ (event: ChangeEvent<HTMLInputElement>) => {
//             this.setState({text: event.target.value})
//             event.preventDefault()
//         } }/>
//         <TodoAddBtn text="Add" onClick={() => {
//           const activate: ActivateType = {
//             type: "add",
//             id: state.length,
//             title: this.state.text,
//             done: false
//           }
//           dispatch(activate)
//         }}/>
//       </>
//     );
//   }
// }

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
        }}
      />
    </>
  );
}
