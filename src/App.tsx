import { useRef } from "react";
import "./App.css";

function App() {
  const textPrompt = useRef("");

  return (
    <>
      <textarea
        rows={6}
        style={{ display: "block" }}
        onChange={(e) => (textPrompt.current = e.target.value)}
      ></textarea>
      <button >Submit Response!</button>
      <br />
      <textarea rows={6}>{}</textarea>
    </>
  );
}

export default App;
