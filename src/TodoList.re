open Todo;

[@react.component]
let make = (~todos: todos, ~onTodoRemoved: todo => unit) => {
  todos
  ->Array.of_list
  ->Belt.Array.mapWithIndex((index, todo) =>
      <div key={index->string_of_int}>
        todo.text->ReasonReact.string
        <button onClick={_ => {onTodoRemoved(todo)}}>
          "x"->ReasonReact.string
        </button>
      </div>
    )
  ->React.array;
};