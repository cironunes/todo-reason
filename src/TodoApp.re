open Todo;

let text = ReasonReact.string;

type action =
  | ChangeTodoText(string)
  | Remove(todo)
  | Add(todo);

type state = {
  todos,
  newTodo: string,
};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Add(todo) => {
            newTodo: "",
            todos: state.todos->List.append([todo]),
          }
        | ChangeTodoText(newText) => {...state, newTodo: newText}
        | Remove(todo) => {
            ...state,
            todos: state.todos |> List.find_all(item => item.id != todo.id),
          }
        },
      {todos: [], newTodo: ""},
    );

  <div>
    <form
      onSubmit={e => {
        ReactEvent.Form.preventDefault(e);
        Add({
          id: Js.Date.make() |> Js.Date.toISOString,
          text: state.newTodo,
          completed: false,
        })
        ->dispatch;
      }}>
      <input
        type_="text"
        value={state.newTodo}
        placeholder="What do you have to do next?"
        onChange={e => {
          ChangeTodoText(ReactEvent.Form.target(e)##value)->dispatch
        }}
      />
      <button> "Add"->text </button>
    </form>
    <TodoList
      todos={state.todos}
      onTodoRemoved={todo => Remove(todo)->dispatch}
    />
  </div>;
};