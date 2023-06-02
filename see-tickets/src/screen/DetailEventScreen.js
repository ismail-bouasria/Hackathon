import React from "react";
import ButtonInfoEvent from "../components/ButtonInfoEvent";

function DisplayDetailEvent() {
    const eventId = "293220";
    return (
        <div className=" lg:flex lg:justify-center">
            <div className="lg:w-10/12 w-full">
                <div className="bg-[#e9e9e8] w-full pb-2">
                    <ButtonInfoEvent eventId={eventId}/>
                </div>
            </div>
        </div>
    );
}

export default DisplayDetailEvent;