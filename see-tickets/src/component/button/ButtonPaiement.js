import React, { useState } from "react";
import FormPaiement from "../form/FormPaiement";

function ToggleButtonPaiement(type) {
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
                       id="number_2">3</p>
                </div>
                <button
                    className="flex items-center justify-between toggle-button p-2 w-full font-bold"
                    onClick={handleToggle}
                    id={"buttonPaiement"}
                >
                    {isFormVisible ? "Paiement" : "Paiement"}
                    <div id="svg_chevron_down">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 9l6 6l6 -6"/>
                        </svg>
                    </div>
                </button>
            </div>
            {isFormVisible && <FormPaiement />}
        </div>
    );
}

export default ToggleButtonPaiement;
