open Todo;

module Styles = {
  open Css;
  let list =
    style([
      padding(zero),
      margin(zero),
      listStyleType(`none),
      lineHeight(`abs(2.0)),
    ]);
  let listItem =
    style([
      position(relative),
      display(`flex),
      alignItems(center),
      justifyContent(spaceBetween),
      Theme.defaultBorder(borderBottom),
      borderWidth(px(1)),
      padding(Theme.spacing200),
      selector(":last-child", [borderBottomWidth(zero)]),
      hover([backgroundColor(Theme.neutral100)]),
    ]);

  let label =
    style([
      selector(
        ":before",
        [
          position(absolute),
          width(pct(100.)),
          height(pct(100.)),
          contentRule(""),
          left(zero),
          top(zero),
        ],
      ),
    ]);

  let labelText = style([]);

  let checkbox =
    style([
      margin4(~top=zero, ~left=zero, ~right=Theme.spacing200, ~bottom=zero),
    ]);
};

[@react.component]
let make = (~todos: todos, ~onTodoRemoved: todo => unit) => {
  <ol className=Styles.list>
    {todos
     ->Array.of_list
     ->Belt.Array.mapWithIndex((index, todo) =>
         <li key={index->string_of_int} className=Styles.listItem>
           <label className=Styles.label>
             <input
               className=Styles.checkbox
               type_="checkbox"
               defaultChecked={todo.completed}
             />
             <span className=Styles.labelText>
               todo.text->ReasonReact.string
             </span>
           </label>
           <button onClick={_ => {onTodoRemoved(todo)}}>
             "x"->ReasonReact.string
           </button>
         </li>
       )
     ->React.array}
  </ol>;
};