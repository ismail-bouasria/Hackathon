import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function Eventlist() {
  const [data, setData] = useState([]);

  const token = '41d9238748c87daacb05a3a83f8cc8aaedcdc0d4';

  useEffect(() => {
    const url = `https://front.apirecette.digitick-ppe.com/v1.1/distribution/salesChannels/13357/calendar/day/${moment().format('YYYY-MM-DD')}?lang=fr`;

    const getEvents = () => {
      axios
        .get(url, {
          headers: {
            'Accept': 'application/hal+json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data._embedded.hours);
          setData(response.data._embedded.hours);
        })
        .catch(error => {
          console.error(error);
        });
    }
    getEvents();
  }, []);

  return (
    <div>
      <h2 className="text-black my-10 text-4xl">Nos Evenements</h2>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className='m-4 flex content-center my-10' key={index}>
            <div className='bg-white rounded-xl'>
              <Link to={`/shows/${item.showId}`}>
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
    </div>
  );
}
