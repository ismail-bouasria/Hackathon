import validate from "../../assets/image/validate.png";
import BtnTelecharger from "../../component/button/BtnTelecharger";
import BtnNewOrder from "../../component/button/BtnNewOrder";

function ValidateScreen() {
  return (
    <div className="flex flex-col justify-center w-100 items-center">
      <img className="h-20 w-20 mt-4 mb-4" src={validate} alt="logo" />
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl mb-2">Merci pour votre commande</h1>
        <p className="mb-2">votre@adressMail.com</p>
        <p className="text-center mb-4 font-light">
          Retrouvez vos billets par mail ou sur cette page en les
          tÃ©lÃ©chargeant
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <BtnTelecharger />
        <BtnNewOrder />
      </div>
      <p className="ml-auto mt-4 md:ml-auto md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 md:text-center  ">
        Powered by: See Tickets
      </p>
    </div>
  );
}

export default ValidateScreen;
