import billetExemple from "../../assets/image/billetExemple.pdf"


function BtnTelecharger () {
  return (
    

    <a
        href={billetExemple}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <button className="w-80 bg-pink-600 rounded-md " >Télécharger</button>
  </a>
  );
}

  export default BtnTelecharger;