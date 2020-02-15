open Todo;

module Styles = {
  open Css;

  global(
    "body",
    [
      fontFamily(Theme.defaultFontFamily),
      padding(Theme.spacing300),
      margin(Theme.spacing300),
    ],
  );

  let card =
    style([
      padding(Theme.spacing300),
      Theme.defaultBorder(border),
      borderRadius(Theme.spacing100),
    ]);

  let title =
    style([
      margin4(~bottom=Theme.spacing300, ~left=zero, ~right=zero, ~top=zero),
      padding(zero),
    ]);
};

type action =
  | Remove(todo)
  | Complete(todo)
  | Add(todo);

type state = {
  todos,
};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Add(todo) => {
            todos: state.todos->List.append([todo]),
          }
        | Complete(todo) => {
            todos:
              state.todos
              |> List.map(item =>
                   if (item.id == todo.id) {
                     {...item, completed: !item.completed};
                   } else {
                     item;
                   }
                 ),
          }
        | Remove(todo) => {
            todos: state.todos |> List.find_all(item => item.id != todo.id),
          }
        },
      {
        todos: [
          {id: "1", text: "Learn Reason", completed: true},
          {id: "2", text: "Present at SydCSS", completed: false},
        ],
      },
    );

  <div className=Styles.card>
    <h1 className=Styles.title> "To-do"->ReasonReact.string </h1>

    <TodoForm onSubmit={item => { Add(item)->dispatch }} />

    <TodoList
      todos={state.todos}
      onTodoRemoved={todo => Remove(todo)->dispatch}
      onCompletedTodo={todo => Complete(todo)->dispatch}
    />
  </div>;
};