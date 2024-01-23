import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom';

const hotels = [
  { id: 1, name: "هتل پردیسان" },
  { id: 2, name: "هتل پارس" },
  { id: 3, name: "هتل دهانساک" },
];


const Services = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />

      <div>
      </div>
    </div>
  )
}

export default Services