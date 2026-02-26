"use client";

import { CounterProvider } from "./counter/context";
import CounterContextComponent from "./counter";
import { TodosProvider } from "./todos/todosContext";
import ReactContextTodoList from "./todos/ReactContextTodoList";

export default function ReactContextExamples() {
  return (
    <div id="wd-react-context-examples">
      <h1>React Context Examples</h1>
      <CounterProvider>
        <CounterContextComponent />
      </CounterProvider>
      <hr />
      <TodosProvider>
        <ReactContextTodoList />
      </TodosProvider>
    </div>
  );
}
