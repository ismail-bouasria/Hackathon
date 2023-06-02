import React from "react";
import ButtonCoordinates from "../components/ButtonCoordinates";

function DisplayCoordinates() {
    return (
        <div className=" lg:flex lg:justify-center">
            <div className="lg:w-10/12 w-full">
                <div className="bg-[#e9e9e8] w-full pb-2">
                    <ButtonCoordinates />
                </div>
            </div>
        </div>
);
}

export default DisplayCoordinates;
