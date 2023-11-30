import type { Component } from "solid-js";

import styles from "./App.module.css";

// import bifrost-solid-lib.umd.js to use as library
import { Counter } from "./lib/";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
