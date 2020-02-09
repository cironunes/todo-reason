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

  let container = style([display(`flex), marginBottom(Theme.spacing300)]);

  let input =
    style([
      minWidth(px(190)),
      padding(Theme.spacing200),
      fontSize(Theme.defaultFontSize),
      lineHeight(Theme.defaultInputLineHeight),
      Theme.defaultBorder(border),
      focus([outlineWidth(zero)]),
    ]);

  let button =
    style([
      marginLeft(px(-1)),
      backgroundColor(Theme.primaryBackgroundColor),
      color(Theme.primaryTextColor),
      padding(Theme.spacing200),
      fontWeight(bold),
      fontSize(Theme.defaultFontSize),
      lineHeight(Theme.defaultButtonLineHeight),
      border(px(1), solid, Theme.primaryBackgroundColor),
      focus([outlineWidth(zero)]),
      cursor(`pointer),
      disabled([
        background(Theme.neutral200),
        borderColor(Theme.neutral100),
        color(Theme.neutral300),
        cursor(`notAllowed),
      ]),
    ]);
};

let text = ReasonReact.string;

type action =
  | ChangeTodoText(string)
  | Remove(todo)
  | Complete(todo)
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
        | Complete(todo) => {
            ...state,
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
            ...state,
            todos: state.todos |> List.find_all(item => item.id != todo.id),
          }
        },
      {
        todos: [
          {id: "1", text: "Learn Reason", completed: true},
          {id: "2", text: "Present at SydCSS", completed: false},
        ],
        newTodo: "",
      },
    );

  <div className=Styles.card>
    <h1 className=Styles.title> "To-do"->text </h1>
    <form
      className=Styles.container
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
        className=Styles.input
        type_="text"
        value={state.newTodo}
        placeholder="What's next?"
        onChange={e => {
          ChangeTodoText(ReactEvent.Form.target(e)##value)->dispatch
        }}
      />
      <button disabled={state.newTodo == ""} className=Styles.button>
        "Add"->text
      </button>
    </form>

    <TodoList
      todos={state.todos}
      onTodoRemoved={todo => Remove(todo)->dispatch}
      onCompletedTodo={todo => Complete(todo)->dispatch}
    />
  </div>;
};