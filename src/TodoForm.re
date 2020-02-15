open Todo;

module Styles = {
  open Css;
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

[@react.component]
let make = (~onSubmit) => {
  let (newTodo, setNewTodo) = React.useState(_ => "");
  <form
    className=Styles.container
    onSubmit={e => {
      ReactEvent.Form.preventDefault(e);
      onSubmit({
        id: Js.Date.make() |> Js.Date.toISOString,
        text: newTodo,
        completed: false,
      });
      setNewTodo(_ => "");
    }}>
    <input
      className=Styles.input
      type_="text"
      value={newTodo}
      placeholder="What's next?"
      onChange={e => {setNewTodo(ReactEvent.Form.target(e)##value)}}
    />
    <button disabled={newTodo == ""} className=Styles.button>
      "Add"->ReasonReact.string
    </button>
  </form>;
};