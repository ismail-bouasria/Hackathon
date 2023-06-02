import React from "react";
import ButtonPaiement from "../components/ButtonPaiement";

function DisplayPaiement() {
    return (
        <div className=" lg:flex lg:justify-center">
            <div className="lg:w-10/12 w-full">
                <div className="bg-[#e9e9e8] w-full pb-2">
                    <ButtonPaiement />
                </div>
            </div>
        </div>
    );
}

export default DisplayPaiement;
