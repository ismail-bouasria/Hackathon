import React, { useState, useEffect } from "react";
import axios from "axios";

function DetailEvent({eventId}) {
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return `${hours}:${minutes}`;
    }

    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        async function getDetail(eventId) {
            try {
                const response = await axios.get(
                    `https://front.apirecette.digitick-ppe.com/v1.1/catalog/events/${eventId}?lang=fr`,
                    {
                        headers: {
                            accept: "application/hal+json",
                            Authorization: "Bearer fb4f623ca46aa960d7cf3ab3f6c0bedbba4b757f",
                            "Content-Type": "application/json",
                        },
                    }
                );
                setEventData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getDetail(eventId);
    }, []);

    return (
        <div className={"mt-2"}>
            {eventData && (
                <div className={"flex flex-col gap-3"}>
                    <div className={"p-4 bg-[#ffffff] rounded"}>
                        <h2 className={"font-bold text-xl"}>{eventData.shortName}</h2>
                        <div className={"flex flex-row justify-between text-slate-500"}>
                            <p>{eventData.presentation1}</p>
                        </div>
                        <p>{eventData.presentation2}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailEvent;
