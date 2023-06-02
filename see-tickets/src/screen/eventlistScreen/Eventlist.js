import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Eventlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/2023-06-02?lang=fr';
    const token = 'edad0efd1f63dcc7e22086c004f20d3e07290b7c';

    const getEvents = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'Accept': 'application/hal+json',
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data._embedded.hours);
      } catch (error) {
        console.error(error);
      }
    };

    getEvents();
  }, []);

  return (
    <div>
      <h2 className="text-black my-10 text-4xl">Nos Événements</h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className="m-4 flex content-center my-10" key={index}>
            <div className="bg-white rounded-xl">
              <img src="https://media.istockphoto.com/id/501387734/fr/photo/danse-des-amis.jpg?s=612x612&w=0&k=20&c=uS-chxCnjK2DWqlUbT2qEp9yLzCp_3Q1PZq8XCbc99E=" className="w-screen rounded-t-xl" alt="alt" />
              {/* <img src={item._links.self.href} alt="alt" /> */}
              <p className="text-black text-2xl">{item.eventName}</p>
              <p className="text-black">{item.dateStart}</p>
            </div>
          </div>
        ))
      ) : (
        <p>no results</p>
      )}
    </div>
  );
}




// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function Eventlist(){
    
//     const [data, setData]= useState([])

//     const url = 'https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/2023-06-02?lang=fr';
//     const token = '57550469ac87416c55e8130db8d9d8d2e1cefe41';

//     const getEvents = () => {axios.get(url, {
//     headers: {
//     'Accept': 'application/hal+json',
//     'Authorization': `Bearer ${token}`
//   }
// })
//   .then(response => {
    
    
//     console.log(data)
//     setData(response.data._embedded.hours);
//   })
//   .catch(error => {
    
//     console.error(error);
//   });
// }
//   useEffect(()=>{
//     getEvents()
//   }, [])
//     return(
//         <div>
//             <h2 className="text-black my-10 text-4xl">Nos Evenements</h2>
//             {
//                 data.length>0?
//                 data.map((item, index)=>{
//                     return(
//                         <div className='m-4 flex content-center my-10'>
//                             <div className='bg-white rounded-xl'>
//                         <img src="https://media.istockphoto.com/id/501387734/fr/photo/danse-des-amis.jpg?s=612x612&w=0&k=20&c=uS-chxCnjK2DWqlUbT2qEp9yLzCp_3Q1PZq8XCbc99E=" className='w-screen rounded-t-xl'></img>
//                         {/* <img src={item._links.self.href}></img> */}
//                         <p className='text-black text-2xl'>{item.eventName}</p>
//                         <p className='text-black'>{item.dateStart}</p>
//                         </div>
//                         </div>
//                     )
//                 })
                
//                 : <p>noresults</p>
//             }
//         </div>

//     );
  