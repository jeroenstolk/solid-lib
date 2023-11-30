import { createSignal } from "solid-js";

const style = `div * {
          font-size: 100%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <style>{style}</style>
      <button onClick={() => setCount(count() - 1)}>-</button>
      <span>{count()}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
};
