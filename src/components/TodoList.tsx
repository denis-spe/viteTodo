// Hear oh Israel, The LORD our GOD, The LORD is One, Love the LORD your GOD with all your mind and
// with all soul and with all might and love your neighbour as your self
import { Component, useRef, useState, type ReactNode, type RefObject } from "react";
import { useTodoContext } from "./TodoProvider";
import type { ActivateArrayType, ActivateType, InputEventType, ItemPropType } from "./types";

class TodoBtn extends Component {
  props: Readonly<{
    text: String;
    className: string,
    onClick: () => void;
  }> = {
      text: "",
      className: "",
      onClick: () => { },
    };
  render(): ReactNode {
    return <button className={this.props.className} onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

function ModificationTextField(
  props: {
    value: string,
    placeholder: string,
    inputRef: RefObject<HTMLInputElement | null>,
    onChange: (event: InputEventType) => void
  }) {

  return <input
    className="modification-text-field"
    ref={props.inputRef}
    type="text"
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
}

function TodoItem(props: ItemPropType) {
  const { item, dispatch } = props
  const [isModified, setModification] = useState(false)
  const [modifiedText, setModifedText] = useState("")
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (isModified) {
    return (
      <li>
        <ModificationTextField
          placeholder={item.title}
          value={modifiedText}
          inputRef={inputRef}
          onChange={(event: InputEventType) => {
            setModifedText(event.target.value)
            event.preventDefault()
          }}
        />

        <TodoBtn
          text="✓"
          className="modify-btn"
          onClick={() => {
            dispatch({
              ...item,
              type: "modify",
              title: modifiedText
            })
            setModification(false)
          }} />

        <TodoBtn
          text="×"
          className="cancel-btn"
          onClick={() => {
            setModification(false)
          }} />
      </li>
    )
  }
  return (
    <li key={item.id}>
      <span onClick={
        () => {
          setModification(true)
          focusInput()
        }

      }>
        {item.title}
      </span>
      <TodoBtn
        text="×"
        className="delete-btn"
        onClick={() => {
          dispatch({
            ...item,
            type: "remove"
          })
        }} />
    </li>
  );
}

const TodoList = () => {
  const { state, dispatch } = useTodoContext();

  return (
    <div className="todo-list-container">
      <ul>
        {
          state.map(value => {
            return <TodoItem item={value} dispatch={dispatch} />
          })
        }
      </ul>
    </div >
  );
};

export default TodoList;
