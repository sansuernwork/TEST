import { useEffect, useState } from "react";

export default function EXAM2() {
  const [output, setOutput] = useState<string[]>(["0"]);
  const [InputValue, setInputValue] = useState<string>("");

  const generateAllPermutations = (number: String) => {
    const removeEmpty = number.replace(" ", "");
    const digits = removeEmpty.toString().split("");
    const permutations: string[] = [];

    function swap(arr: string[], i: number, j: number) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    function permute(arr: string[], start: number) {
      if (start === arr.length - 1) {
        permutations.push(arr.join("").toString());
        return;
      }
      for (let i = start; i < arr.length; i++) {
        swap(arr, start, i);
        permute(arr.slice(), start + 1);
        swap(arr, start, i);
      }
    }

    permute(digits, 0);
    const result = Array.from(new Set(permutations));
    setOutput(result);
    return;
  };

  useEffect(() => {
    generateAllPermutations(InputValue);
    return () => {
      setOutput([]);
    };
  }, [InputValue]);

  return (
    <div>
      <span>INPUT: {InputValue.toString()}</span> <br />
      <span>OUTPUT: <b data-testid="result">{output.toString()}</b></span> <br />
      <br />
      <input
        onChange={(e: { target: HTMLInputElement }) =>
          setInputValue(e.target.value)
        }
        value={InputValue}
      />
    </div>
  );
}
