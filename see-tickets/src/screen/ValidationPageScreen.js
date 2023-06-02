import validate from "../asset/validate.png";
import BtnTelecharger from "../component/button/BtnTelecharger";
import BtnNewOrder from "../component/button/BtnNewOrder";
import ReadTicketListPDf from "../component/fetch/ReadTickets";
import BtnLanguage from "../component/button/BtnLanguage"

function Text() {
  return (

<div className="flex flex-col justify-center w-100 items-center mx-5 mt-14 rounded-md">
  <img className="h-20 w-20 mt-4 mb-4" src={validate} alt="logo" />
  <div className="flex flex-col items-center mb-4">
    <h1 className=" text-center text-5xl mb-2">Merci pour votre commande</h1>
    <p className="mb-2">votre@adressMail.com</p>
     <ReadTicketListPDf /> 
    <p className="text-center mb-4 font-light">
      Retrouvez vos billets par mail ou sur cette page en les téléchargeant
    </p>
  </div>
  <div className="flex flex-col justify-center items-center space-y-4">
    <BtnTelecharger />
    <BtnNewOrder />
  </div>
  <p className="mt-4 ml-auto md:mx-auto md:w-3/4">
    Powered by: See Tickets
  </p>
</div>
  );
}

export default Text;
