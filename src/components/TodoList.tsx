import { useTodoContext } from "./TodoProvider";
import type { ActivateType } from "./types";

const TodoList = () => {
  const { state } = useTodoContext();
  return (
    <div>
      <ul>
        {state.map((item: ActivateType) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
