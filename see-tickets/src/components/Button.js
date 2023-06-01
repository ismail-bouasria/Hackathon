import React, { useState } from "react";
import FormRegister from "./FormRegister";

function ToggleButton() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleToggle = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="p-2">
      <div className="flex flex-row items-center">
        <div id="coordonnéesNumber">
          <p
            className="text-black px-2.5 rounded-full bg-[#8A898A] text-lg font-bold"
            id="number_2"
          >
            2
          </p>
        </div>
        <button
          className="toggle-button p-2 max-w-[300px] font-bold"
          onClick={handleToggle}
        >
          {isFormVisible ? "Coordonnées" : "Coordonnées"}
        </button>
      </div>
      {isFormVisible && <FormRegister />}
    </div>
  );
}

export default ToggleButton;
