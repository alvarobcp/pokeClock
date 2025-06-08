import { useState, useEffect } from 'react'
import './App.css'
import ClockComponent from './ClockComponent'
import LocationData from './LocationData';
import Date from './DateComponent';
import Footer from './Footer';


function App() {

  const [ip, setIp] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        setIp(data.ip);
      })
      .catch((err) => {
        console.error("Error al obtener IP:", err);
        setLoading(false);
      });
  }, []);


  useEffect(() => {
    if (!ip) return;

    fetch(`https://ipwho.is/${ip}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener ubicación:", err);
        setLoading(false);
      });
  }, [ip]);

  return (
    <>
      <Date />
      <ClockComponent />
      {!loading && location && ( <LocationData lat={location.latitude} lon={location.longitude} /> )}
      <Footer></Footer>
    </>
  );
}

export default App;