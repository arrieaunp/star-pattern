import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [pattern, setPattern] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const number = parseInt(input, 10);
    if (isNaN(number) || number <= 0) {
      setPattern(["กรุณากรอกตัวเลขที่เป็นบวก."]);
      return;
    }

    const result = [];
    for (let i = 1; i <= number; i++) {
      result.push("*".repeat(i));
    }
    for (let i = number - 1; i > 0; i--) {
      result.push("*".repeat(i));
    }

    setPattern(result);
  };

  return (
    <div style={{ textAlign: "left", marginTop: "50px", marginLeft: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Input:&nbsp;
          <input
            type="number"
            value={input}
            onChange={handleChange}
            placeholder="กรอกตัวเลข"
          />
        </label>
        &nbsp;
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}
export default App;
