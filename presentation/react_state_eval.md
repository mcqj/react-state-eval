---
marp: true
theme: gaia
backgroundColor: "#e7f5fe"
color: "#44677d"
---
<!-- _class: lead -->
# Some React State Alternatives
---
## Zustand 🐻
- Flux Like
- Immutable State Model

---
## Store is a Hook
```javascript
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```
<!-- Note increasePopulation does not merge the state -->
---
## Component Binding
```javascript
function BearCounter() {
  const bears = useStore((state) => state.bears)

  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)

  return <button onClick={increasePopulation}>one up</button>
}
```
---
## Signals
- Originally Developed for Preact
- There is a React version
  - **Risk** - Uses an internal API
  <!-- __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED -->
---
## Signals Track Their Value

```javascript
import { signal } from "@preact/signals";

// Create a signal that can be subscribed to:
const count = signal(0);

function Counter() {
  // Accessing .value in a component automatically re-renders when it changes:
  const value = count.value;

  const increment = () => {
    // A signal is updated by assigning to the `.value` property:
    count.value++;
  }

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={increment}>click me</button>
    </div>
  );
}
```
---
<!-- _class: lead -->
# Some Other Options
---
## use-context-selector
- makes React context more performant
---
## Jotai
- A simpler implementation of Recoil principles
- Jotai was born to solve extra re-render issues in React.
---
## Jotai Example
```javascript
import { Provider, atom, useAtom } from 'jotai'
const atom1 = atom(0)
const atom2 = atom(0)
// Optional: you can use Provider's just like useContext,
// ...but if you only need one,
// ...you can just omit it and Jotai will use a default one (called Provider-less mode).
const Parent = ({ children }) => {
  return <Provider>{children}</Provider>
}
const Component1 = () => {
  const [state, setState] = useAtom(atom1)
}
const Component2 = () => {
  const [state, setState] = useAtom(atom2)
}
```
---
## Links
[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
[Signals - React](https://www.npmjs.com/package/@preact/signals-react)
[Signals - Main Docs](https://preactjs.com/guide/v10/signals#managing-global-app-state)
[Jotai](https://jotai.org/)
[use-context-selector](https://github.com/dai-shi/use-context-selector)
