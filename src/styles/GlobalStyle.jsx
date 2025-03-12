import { createGlobalStyle } from "styled-components";
import { responsiveValue } from "./mixins";

export const MOBILE_BREAKPOINT = "720px";
export const TABLET_BREAKPOINT = "1100px";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Pretendard Variable";
  src: url("/PretendardVariable.woff2") format("woff2");
}

/* ================================ reset ================================ */
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

/**
  * 1. Set default font family to sans-serif.
  * 2. Prevent iOS text size adjust after orientation change, without disabling
  *    user zoom.
  */

html {
  height: auto;
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
  line-height: 1;

  scrollbar-width: thin;
  scrollbar-color: var(--white1) var(--black3);

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--white1);
    border-radius: 10px;
  }
}

/**
  * Remove default margin.
  */

body {
  margin: 0;
}

/* HTML5 display definitions
  ========================================================================== */

/**
  * Correct 'block' display not defined for any HTML5 element in IE 8/9.
  * Correct 'block' display not defined for 'details' or 'summary' in IE 10/11
  * and Firefox.
  * Correct 'block' display not defined for 'main' in IE 11.
  */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
  box-sizing: border-box;
}

/**
  * 1. Correct 'inline-block' display not defined in IE 8/9.
  * 2. Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera.
  */

audio,
canvas,
progress,
video {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
  * Prevent modern browsers from displaying 'audio' without controls.
  * Remove excess height in iOS 5 devices.
  */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
  * Address '[hidden]' styling not present in IE 8/9/10.
  * Hide the 'template' element in IE 8/9/11, Safari, and Firefox < 22.
  */

[hidden],
template {
  display: none;
}

/* Links
  ========================================================================== */

/**
  * Remove the gray background color from active links in IE 10.
  */

a {
  background-color: transparent;
}

/**
  * Improve readability when focused and also mouse hovered in all browsers.
  */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
  ========================================================================== */

/**
  * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
  */

abbr[title] {
  border-bottom: 1px dotted;
}

/**
  * Address style set to 'bolder' in Firefox 4+, Safari, and Chrome.
  */

b,
strong {
  font-weight: bold;
}

/**
  * Address styling not present in Safari and Chrome.
  */

dfn {
  font-style: italic;
}

/**
  * Address variable 'h1' font-size and margin within 'section' and 'article'
  * contexts in Firefox 4+, Safari, and Chrome.
  */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
  * Address styling not present in IE 8/9.
  */

mark {
  background: #ff0;
  color: #000;
}

/**
  * Address inconsistent and variable font size in all browsers.
  */

small {
  font-size: 80%;
}

/**
  * Prevent 'sub' and 'sup' affecting 'line-height' in all browsers.
  */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
  ========================================================================== */

/**
  * Remove border when inside 'a' element in IE 8/9/10.
  */

img {
  border: 0;
}

/* Forms
  ========================================================================== */

/**
  * Known limitation: by default, Chrome and Safari on OS X allow very limited
  * styling of 'select', unless a 'border' property is set.
  */

/**
  * 1. Correct color not being inherited.
  *    Known issue: affects color of disabled elements.
  * 2. Correct font properties not being inherited.
  * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
  */

button {
  color: inherit; /* 1 */
  font: inherit; /* 2 */
  margin: 0; /* 3 */
}

/**
  * Address 'overflow' set to 'hidden' in IE 8/9/10/11.
  */

button {
  overflow: visible;
}

/**
  * Address inconsistent 'text-transform' inheritance for 'button' and 'select'.
  * All other form control elements do not inherit 'text-transform' values.
  * Correct 'button' style inheritance in Firefox, IE 8/9/10/11, and Opera.
  * Correct 'select' style inheritance in Firefox.
  */

button {
  text-transform: none;
}

/**
  * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
  *    and 'video' controls.
  * 2. Correct inability to style clickable 'input' types in iOS.
  * 3. Improve usability and consistency of cursor style between image-type
  *    'input' and others.
  */

button {
  -webkit-appearance: button; /* 2 */
}

/**
  * Remove inner padding and border in Firefox 4+.
  */

button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

html {
  overflow-x: auto;
  font-size: 62.5%; /* font-size 1rem = 10px ex 16px -> 1.6rem */
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  /* IE 10, IE 11 */
  :root,
  html {
    font-size: 10px;
  }
}

html body {
  font: inherit;
  width: 100%;
}

html,
body,
div,
p,
span,
strong,
b,
em,
h1,
h2,
h3,
h4,
h5,
h6,
img,
ul,
ol,
li,
a,
button {
  margin: 0;
  padding: 0;
  line-height: 1;
  font-family: "neue-haas-grotesk-text", "Pretendard Variable", sans-serif;
  font-weight: 300;
  letter-spacing: 0;
  color: var(--black);
  box-sizing: border-box;
}

div,
p,
span,
strong,
b,
em,
h1,
h2,
h3,
h4,
h5,
h6,
img,
ul,
ol,
li,
a,
button {
  font-size: 1.6rem;
}

ul,
ol,
li {
  list-style: none;
}

a {
  display: inline-block;
  color: inherit;
  line-height: inherit;
  font-size: inherit;
  text-decoration: none;
  font-weight: inherit;
}

a:hover,
a:focus,
a:active {
  text-decoration: none;
}

em,
address,
i,
span,
label {
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
}

address {
  font-style: normal;
}

b,
strong {
  font-weight: 700;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
}

video,img {
  display: block;
  max-width: 100%;
  line-height: 0;
  border: 0 none;
  font-size: 0;
}

button {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  line-height: inherit;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  outline: 0 none;
}

button {
  -webkit-appearance: button;
}

html {
  --background: #f2f2f2;
  --black: #0d0d0d;
  --gray: #bfbfbf;
  --main: #f25e5e; /* 강조 */
  ${responsiveValue("--large_text", 67.77, 40, 1920, 360)}
  ${responsiveValue("--medium_text", 41.89, 24, 1920, 360)}
  ${responsiveValue("--small_text", 25.89, 18, 1920, 360)}
  ${responsiveValue("--xsmall_text", 20, 16, 1920, 360)}
  --body_text: 1.8rem;
  ${responsiveValue("--section_gap", 200, 100, 1920, 360)}
  --space_horizontal: 3rem;
  --title_margin_bottom : 4rem;
  --footer_height: calc(20 * var(--vh));
  --max_width: 1920px;
  --min_width: 360px;
}

/* reset */

body {
  background-color: var(--background);
  cursor: none;
  height: 100%;
}

body * {
  cursor: none;
}

#root {
  position: relative;
  max-width: var(--max_width);
  min-width: var(--min_width);
  margin: 0 auto;
  height: 100%;
}

#root:hover .cursor_container {
  opacity: 1;
}

section {
  position: relative;
  z-index: 10;
  background-color: var(--background);
}

.italic {
  font-style: italic;
}

@media screen and (max-width: ${TABLET_BREAKPOINT}) {
  html {
    --space_horizontal: 2rem;
    word-break: keep-all;
  }
}

@media screen and (max-width: ${MOBILE_BREAKPOINT}) {
  html {
    --body_text: 1.6rem;
    --space_horizontal: 1.6rem;
    --footer_height: 22rem;
    --title_margin_bottom: 3.2rem;
  }
}

@media screen and (max-width: 440px) {
  html {
  }
}

`;

export default GlobalStyle;
