import { useState } from "react";

export default function App() {
  const [disableButton, setDisableButton] = useState(false);
  const toggleDisableButton = () => {
    setDisableButton(!disableButton);
  };
  return (
    <div className="App">
      <input
        type="checkbox"
        id="demo"
        name="demo"
        value="demo"
        onChange={toggleDisableButton}
      />
      <button disabled={disableButton}>button</button>
    </div>
  );
}
