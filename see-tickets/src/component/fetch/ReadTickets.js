import axios from 'axios';

function ReadTicketListPDf(){
    
    const transactionId = '152';
    const token = "458c46f9cc7c2e1685264b547596e52f7c02b2f6"

    const url = (`https://front.apirecette.digitick-ppe.com/v1.1/order/transactions/carts/${transactionId}/createOrderFromCart/createOrderFromCart`)

    const getEvents = () => {
      axios
        .get(url, {
          headers: {
            'Accept': 'application/hal+json',
            'Authorization': `Bearer ${token}`
          }


}
)}
console.log(getEvents)
}


  export default ReadTicketListPDf