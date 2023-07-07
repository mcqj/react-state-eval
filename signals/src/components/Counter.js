import React from "react";
import { signal, computed, effect } from "@preact/signals-react";


function Counter() {
  const count = signal(0);
  const double = computed(() => count.value * 2);

  effect(() => console.log(`Count: ${count}`));

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => count.value += 1}>
        Click me
      </button>
      <p>Double: {double}</p>    
    </div>
  );
}

export default Counter;