import React from 'react';
import { Link } from 'react-router-dom';

const FormulairePaiement = () => {
    return (
        <div className='space-y-4'>
            <form className="bg-[#fbfbfb] p-4 rounded-lg shadow-md ">

                <div className="mb-4">
                    <label className="text-black block mb-2">Ajoute les informations de la carte de crédit pour payer.</label>
                </div>
                <div className="mb-4">
                    <input
                        className="rounded-lg p-2 bg-[#eeeeee] border border-[#cfcfcf] w-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9101 1121"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="rounded-lg p-2 bg-[#eeeeee] border border-[#cfcfcf] w-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text"
                        id="expiryDate"
                        placeholder="02/25"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="rounded-lg p-2 bg-[#eeeeee] border border-[#cfcfcf] w-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text"
                        id="cvv"
                        placeholder="123"
                        required
                    />
                </div>

                <div className='bg-[#fffefe] rounded-lg  p-5 shadow-md space-y-4 border border-slate-200'>
                    <div className='flex justify-between font-bold text-[#525252]'>
                        <p>Total à payer :</p>
                        <span>£</span>
                    </div>
                    <div className='text-black font-bold '>
                        <h2>Hackathom party</h2>
                    </div>


                    <div className='flex flex-col space-y-2'>
                        <div className='bg-[#66c1c2] text-white rounded-md h-8 flex justify-between'>
                            <button className='m-3 mt-1'><b className={"font-bold"}>1x</b> place classique</button>
                            <span className='m-3 mt-1'>18£</span>
                        </div>
                        <div className='bg-[#66c1c2] text-white rounded-md h-8 flex justify-between'>
                            <button className='m-3 mt-1'><b className={"font-bold"}>2x</b> place membres</button>
                            <span className='m-3 mt-1'>15£</span>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex space-x-2'>
            <span className='rounded-full  flex h-4  w-4 items-center mt-1  px-[0.1em] bg-[#00974a] '><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 448 512">
                 <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
            </svg></span>
                            <h2 className='text-black font-bold '>Payement sécuriser</h2>
                        </div>

                        <div>
                            <p>Toutes les informations bancaires  pour traiter ce Paiement sont   totalement sécurisées. Grace au cryptage SSL de vos données, vous  êtes assurés de  la fiabilité de vos  transactions sur Seetickets.</p>
                        </div>
                    </div>
                </div>
                <Link to={`/validate`}>
                <button
                    type="submit"
                    className="bg-mediumvioletred bg-purple-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                >
                    Payer
                </button>
                </Link>
            </form>
        </div>
    );
};

export default FormulairePaiement;