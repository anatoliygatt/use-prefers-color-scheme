<br>

<div align="center">
  <img src="https://i.imgur.com/71mYMjx.png" width="256" alt="use-prefers-color-scheme Logo">
</div>

<br>

<h1 align="center">use-prefers-color-scheme</h1>
<h3 align="center"><a href="https://reactjs.org">React</a> hook for subscribing to user's color scheme preference.</h3>

<br>

<p align="center">
  <a href="https://github.com/anatoliygatt/use-prefers-color-scheme/actions?query=workflow%3ACI">
    <img src="https://img.shields.io/github/actions/workflow/status/anatoliygatt/use-prefers-color-scheme/ci.yml?branch=master&style=for-the-badge&logo=github&label=CI&labelColor=000000" alt="Github CI Workflow Status">
  </a>
  <a href="https://www.npmjs.com/package/@anatoliygatt/use-prefers-color-scheme">
    <img src="https://img.shields.io/npm/v/@anatoliygatt/use-prefers-color-scheme.svg?style=for-the-badge&logo=npm&labelColor=000000" alt="NPM Version">
  </a>
  <a href="https://github.com/anatoliygatt/use-prefers-color-scheme/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/anatoliygatt/use-prefers-color-scheme.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=ffffff&labelColor=000000" alt="License">
  </a>
</p>

<br>

## 🚀 Getting Started

### 🐇 Jump Start

```shell
npm install @anatoliygatt/use-prefers-color-scheme
```

```jsx
import { usePrefersColorScheme } from '@anatoliygatt/use-prefers-color-scheme';

function Example() {
  const preferredColorScheme = usePrefersColorScheme();
  const isDarkColorSchemePreferred = preferredColorScheme === 'dark';
  return (
    <div>
      Preferred Color Scheme:{' '}
      {isDarkColorSchemePreferred ? '🌚 Dark' : '🌞 Light'}
    </div>
  );
}
```

### 💻 Live Demo

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-anatoliygatt-use-prefers-color-scheme-llkul)

## ⚙️ Usage with Server Side Rendering (SSR)

Frameworks like Next.js and Gatsby take advantage of server-side rendering, which means that the HTML is pre-rendered at some point before it's sent to the browser. When we first render our React component tree, we don't know whether the user prefers light or dark color scheme.

It may lead to the markup mismatches during hydration. In order to prevent this, we need to set the `ssr` option provided by the `usePrefersColorScheme()` hook to `true`, like so:

```javascript
usePrefersColorScheme({ ssr: true });
```

This will guarantee no markup mismatches between the original server render and the first client render, however, we will have to make a compromise: force a dark color scheme for **_all users_** in the very first render.

## 👨🏼‍⚖️ License

[MIT](https://github.com/anatoliygatt/use-prefers-color-scheme/blob/master/LICENSE)
