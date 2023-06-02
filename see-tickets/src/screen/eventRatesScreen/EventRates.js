import React, { useEffect, useState}  from "react";
import axios from "axios";
import { AiFillInfoCircle } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import BtnNewOrder from "../../component/button/BtnNewOrder";
import { Link } from 'react-router-dom';




function EventRatesScreen() {
  let { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const token = "9c9bbdffe0448911d54fea702e2903c7cf6ab578";
  const url = `https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/shows/${id}/prices?limit=10&offset=0&lang=fr`;
  useEffect (() => {
    axios.get(url, {
      headers: {
        'Accept': 'application/hal+json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then (resp => {
      setData(resp.data)
      console.log(resp.data)
    })
    .catch(error => {
      console.log(error);
    })

  }, [])

  console.log(data);
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
              <strong>{data?._embedded?.prices[0]?.name}</strong>{" "}
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
        <div className="rounded bg-slate-100 drop-shadow-lg mt-4 flex flex-col">
        <Link to={`/coord`}>
          <button div className="m-2 flex text-center text-zinc-500 font-bold">
           Achat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventRatesScreen;
