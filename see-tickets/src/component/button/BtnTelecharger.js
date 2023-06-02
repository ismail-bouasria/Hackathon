import billetExemple from "../../asset/billetExemple.pdf"


function BtnTelecharger () {
  return (
    <a
        href={billetExemple}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button className="w-80 h-12 text-white text-2xl bg-pink-600 font-bold rounded-lg " >Télécharger</button>
  </a>
  );
}

  export default BtnTelecharger;