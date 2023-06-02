import React, { useEffect, useState, Link}  from "react";
import axios from "axios";
import { AiFillInfoCircle } from "react-icons/ai";

const [data, setData] = useState([]);

function EventRatesScreen() {
  const token = "74b858535bb07405da0bda9e0a21ba2f8c32456e";
  const url = "https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/9528639/prices?limit=10&offset=0&lang=fr";
  useEffect (() => {
    axios.get(url, {
      headers: {
        'Accept': 'application/hal+json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then (resp => {
      console.log(resp.data);
    })
    .catch(error => {
      console.log(error);
    })

    {data.length > 0 ? (
      data.map((item, index) => (
        <div className='m-4 flex content-center my-10' key={index}>
          <div className='bg-white rounded-xl'>
            <Link to={`/shows/${item.eventId}`}>
              <img src="https://media.istockphoto.com/id/501387734/fr/photo/danse-des-amis.jpg?s=612x612&w=0&k=20&c=uS-chxCnjK2DWqlUbT2qEp9yLzCp_3Q1PZq8XCbc99E=" alt="alt" className='w-screen rounded-t-xl'></img>
            </Link>
            <p className='text-black text-2xl'>{item.eventName}</p>
            <p className='text-black'>{item.dateStart}</p>
          </div>
        </div>
      ))
    ) : (
      <p>noresults</p>
    )}

  })
  return (
    <div className=" bg-gray-300 w-screen h-screen flex justify-center">
      <div className="flex flex-col h-screen w-screen m-5">
        <div className="flex justify-end">
          <button className="bg-black text-white rounded-md text-center font-bold h-9 w-28">
            {" "}
            Français ▾{" "}
          </button>
        </div>
        <div className="flex items-center mt-5">
          <section className="relative text-white">
            <img
              className="rounded-lg"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            />
            <div className="absolute font inset-0 flex justify-end m-1">
              <AiFillInfoCircle size={24} />
            </div>
            <p className="absolute inset-0 flex items-center justify-center">
              {" "}
              <strong>Andrew Alfred</strong>{" "}
            </p>
            <p className="absolute inset-0 flex items-center justify-center mt-11">
              Technical advisor
            </p>
          </section>
        </div>
        <div className="flex justify-end mt-2">
          <button className="text-white rounded-full text-center text-xs w-16 h-5 bg-teal-600">
            {" "}
            + d'infos{" "}
          </button>
        </div>
        <div className="flex justify-start">
          <p className="rounded-full bg-teal-600 w-5 text-sm text-center text-white w-">
            {" "}
            1{" "}
          </p>{" "}
          <strong> Places</strong>
        </div>
        <div className="rounded bg-slate-100 drop-shadow-lg mt-4 flex flex-col">
          <div className="m-2 flex justify-between text-zinc-500 font-bold">
            <p> Ven. 16 juin 2023 </p> <span cl> 20h-4h</span>{" "}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default EventRatesScreen;
