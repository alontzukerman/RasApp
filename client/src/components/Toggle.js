import React, { useEffect, useState } from "react";
import { ToggleContainer, ToggleButton } from "../styledComponents/navbar";
function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") setDarkMode(true);
    else setDarkMode(false);
  }, []);
const handleToggleClick = () => {
    localStorage.setItem("darkMode",!darkMode);
    setDarkMode(!darkMode);
}
  return (
    <ToggleContainer>
      <ToggleButton onClick={()=>handleToggleClick()} darkMode={darkMode}/>
    </ToggleContainer>
  );
}

export default Toggle;
