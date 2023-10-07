import { useEffect, useState } from "react";

export default function EXAM3() {
  const [data, setData] = useState<string[]>([]);
  const [InputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const Summary = () => {
    const arr: string[] = [];
    data.map((number) => {
      const repeat = arr.filter((res) => res === number.toString());
      if (repeat.length !== 0) {
        const Index = arr.indexOf(number.toString());
        arr[Index] += number.toString();
      } else {
        arr.push(number.toString());
      }
    });
    setResult(arr.filter((number) => number.length === 1));
  };

  useEffect(() => {
    Summary();
  }, [data]);

  return (
    <div>
      <span>INPUT: {data.toString()}</span> <br />
      <span>OUTPUT: {result.toString()}</span> <br />
      <input
        onChange={(e: { target: HTMLInputElement }) =>
          setInputValue(e.target.value)
        }
        value={InputValue}
      />
      <button onClick={() => setData((prev) => [...prev, InputValue])}>
        ADD
      </button>
    </div>
  );
}
