import React, { useState } from "react";
import axios from "axios";

function FormRegister() {
  const [post, setPost] = useState(null);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

    function validateEmailConfirm(email, emailConfirm) {
    return email === emailConfirm;

}

    function handleFormSubmit(event) {
    event.preventDefault();
    const formRegister = document.getElementById("formRegister");
    const email = event.target.elements.email.value;
    const emailConfirm = event.target.elements.email_confirm.value;
    let errorEmail = document.getElementById("errorEmail");
    let errorEmailConfirm = document.getElementById("errorEmailConfirm");

    if (!validateEmail(email)) {
        errorEmail.innerHTML = "Veuillez entrer une adresse e-mail valide.";
        return false;
    } else {
        errorEmail.innerHTML = "";
    }

    if (!validateEmailConfirm(email, emailConfirm)) {
        errorEmailConfirm.innerHTML =
            "Veuillez entrer une adresse e-mail identique.";
        return false;
    } else {
        errorEmailConfirm.innerHTML = "";
        console.log('Votre compte a été créé');
        const button = document.getElementById("buttonRegisterForm");
        button.innerHTML = "Compte créé";
    }
}

return (
    <div className="rounded-lg bg-[#FDFDFD] p-4">
      <div className="mb-3">
        <p>
          <span>Ajouter votre adresse e-mail pour recevoir ton billet.</span>
        </p>
      </div>
      <form id="formRegister" onSubmit={handleFormSubmit}>
        <div id="warpperForm" className="flex flex-col gap-2">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            className="rounded-lg p-2 bg-[#eeeeee] border border-[#cfcfcf]"
          />
          <small id="errorEmail" className="h-4"></small>
          <input
            type="text"
            name="email_confirm"
            placeholder="Confirmer votre E-mail"
            className="rounded-lg p-2 bg-[#eeeeee] border border-[#cfcfcf]"
          />
          <small id="errorEmailConfirm" className="h-4"></small>
        </div>
        <div className="flex justify-center">
          <button
            type="submit" id="buttonRegisterForm"
            className="bg-[#ff008c] hover:bg-[#c9026f] text-white font-bold w-full py-3 rounded-full">
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormRegister;
