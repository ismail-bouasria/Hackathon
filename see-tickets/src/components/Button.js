import React, { useState } from "react";
import FormRegister from "./FormRegister";

function ToggleButton() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleToggle = () => {
    setFormVisible(!isFormVisible);
    const number_2 = document.getElementById("number_2");
    if (number_2.classList.contains('bg-[#8A898A]')) {
        number_2.classList.remove('bg-[#8A898A]');
        number_2.classList.add('bg-[#439497]');
    } else {
        number_2.classList.remove('bg-[#439497]');
        number_2.classList.add('bg-[#8A898A]');
    }
  };

return (
    <div className="p-2">
      <div className="flex flex-row items-center">
        <div id="coordonnéesNumber">
          <p className="text-[#E9E9E9] px-[0.6em] rounded-full bg-[#8A898A] text-lg font-bold"
            id="number_2"
          >2</p>
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
