import { useAppStore } from '../store';

const Counter = ({}) => {
  const counterNumber = useAppStore(state => state.number);
  const increaseNumber = useAppStore(state => state.increaseCounterNumber)
  const decreaseNumber = useAppStore(state => state.decreaseCounterNumber)

  return (
    <div>
      <button onClick={increaseNumber}>+</button>
        {counterNumber}
      <button onClick={decreaseNumber}>-</button>
    </div>
  );
};

export default Counter;