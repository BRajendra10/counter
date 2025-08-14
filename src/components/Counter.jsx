import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="p-10 bg-white shadow-md px-10 rounded-2xl">
      <p className="font-medium mb-5 text-2xl">Counter</p>
      <div className="flex items-center justify-center gap-5">
        <button className="py-2 px-3 rounded-md text-white cursor-pointer hover:bg-blue-800 bg-blue-500" onClick={() => setCount(count+1)}>+1</button>
        <span>{count}</span>
        <button className="py-2 px-3 rounded-md text-white cursor-pointer hover:bg-blue-800 bg-blue-500" onClick={() => setCount(count-1)}>-1</button>
      </div>

      <div className="flex items-center justify-center mt-5">
        <button className="py-2 px-3 rounded-md text-white cursor-pointer hover:bg-red-800 bg-red-500" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
