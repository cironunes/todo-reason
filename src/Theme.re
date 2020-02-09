open Css;

// Spacing
let spacing100 = px(3);
let spacing200 = px(12);
let spacing300 = px(24);

// Colors
let neutral100 = hex("CACFCF");
let neutral200 = hex("F3F3F3");
let neutral300 = hex("444");
let primaryBackgroundColor = hex("DD4B39");
let primaryTextColor = white;

// Typography
let defaultFontFamily = "Fira Sans, sans-serif";
let defaultFontSize = px(16);
let defaultButtonLineHeight = px(18);
let defaultInputLineHeight = `abs(1.0);

// Border
let defaultBorder = fn => fn(px(1), solid, neutral100);

// Animations
let defaultAnimationDuration = 300;
let fadeIn =
  keyframes([
    (0, [opacity(0.), transform(translateX(px(-6)))]),
    (
      100,
      [opacity(1.), visibility(visible), transform(translateX(zero))],
    ),
  ]);
let fadeOut =
  keyframes([
    (0, [opacity(1.), transform(translateX(zero))]),
    (
      100,
      [opacity(0.), visibility(visible), transform(translateX(px(-6)))],
    ),
  ]);