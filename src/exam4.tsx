import { useEffect, useState } from "react";

class NotSmileFace {
  input: string[];
  constructor(input: string) {
    this.input = input.split("");
  }

  eyes(eye: string) {
    return String(eye === ":" || eye === ";");
  }

  nose(nose: string) {
    return String(nose === "-" || nose === "~");
  }

  mouse(mouse: string) {
    return String(mouse === ")" || mouse === "D");
  }
  execute() {
    if (this.input.length == 2) {
      return (this.eyes(this.input[0]) + this.mouse(this.input[1])).includes(
        "false"
      );
    } else {
      return (
        this.eyes(this.input[0]) +
        this.nose(this.input[1]) +
        this.mouse(this.input[2])
      ).includes("false");
    }
  }
}

export default function EXAM4() {
  const [data, setData] = useState<string[]>([]);
  const [InputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const countSmileys = () => {
    return data.filter((item) => !new NotSmileFace(item).execute()).length;
  }
  return (
    <div>
      <span>INPUT: {data.toString()}</span> <br />
      <span>OUTPUT: {countSmileys()}</span> <br />
      <input
        onChange={(e: { target: HTMLInputElement }) =>
          setInputValue(e.target.value)
        }
        value={InputValue}
      />
      <button onClick={() => {
        if (InputValue) {
          setData((prev) => [...prev, ...InputValue.split(" ")])
        }
      }}>
        ADD
      </button>
    </div>
  );
}
