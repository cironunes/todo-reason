open Todo;

module Styles = {
  open Css;

  let list =
    style([
      padding(zero),
      margin(zero),
      listStyleType(`none),
      lineHeight(`abs(2.0)),
      selector(
        "li.removed",
        [animationName(Theme.fadeOut), animationDuration(Theme.defaultAnimationDuration)],
      ),
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

      // animation
      animationName(Theme.fadeIn),
      animationDuration(Theme.defaultAnimationDuration),

      selector(":last-child", [borderBottomWidth(zero)]),
      hover([backgroundColor(Theme.neutral200)]),
    ]);

  let label =
    style([
      selector(
        ":before",
        [
          cursor(`pointer),
          position(absolute),
          width(pct(100.)),
          height(pct(100.)),
          contentRule(""),
          left(zero),
          top(zero),
        ],
      ),
    ]);

  let checkbox =
    style([
      margin4(~top=zero, ~left=zero, ~right=Theme.spacing200, ~bottom=zero),
    ]);

  let remove = style([position(relative)]);
};

[@react.component]
let make =
    (
      ~todos: todos,
      ~onTodoRemoved: todo => unit,
      ~onCompletedTodo: todo => unit,
    ) => {
  let (removedIndex, setRemovedIndex) = React.useState(() => None);
  <ol className=Styles.list>
    {todos
     ->Array.of_list
     ->Belt.Array.mapWithIndex((index, todo) =>
         <li
           key={index->string_of_int}
           className={Cn.make([
             Styles.listItem,
             Cn.mapSome(
               removedIndex,
               fun
               | i =>
                 if (todo.id == i) {
                   "removed";
                 } else {
                   "";
                 },
             ),
           ])}>
           <label className=Styles.label>
             <input
               className=Styles.checkbox
               type_="checkbox"
               checked={todo.completed}
               onClick={_ => onCompletedTodo(todo)}
             />
             <span> todo.text->ReasonReact.string </span>
           </label>
           <button
             className=Styles.remove
             onClick={_ => {
               setRemovedIndex(_ => Some(todo.id));
               Js.Global.setTimeout(() => {onTodoRemoved(todo)}, 200)
               |> ignore;
               ();
             }}>
             "x"->ReasonReact.string
           </button>
         </li>
       )
     ->React.array}
  </ol>;
};