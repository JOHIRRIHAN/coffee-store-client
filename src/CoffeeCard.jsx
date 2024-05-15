/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({coffee}) => {
    const {coffeeName,supplier,category,chef,tasty,details,photo,} = coffee;
  return (
    <div className="card card-side bg-base-200 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: <span className="text-lg font-light">{coffeeName}</span></h2>
    <p className="card-title">Chef: <span className="text-lg font-light">{chef}</span></p>
    <p className="card-title">Category: <span className="text-lg font-light">{category}</span></p>
  </div>
  <div className="pr-5 pt-5 text-3xl ">
    <h3 className="mt-5 bg-[#D2B48C] p-2 rounded-md text-white"><FaEye /></h3>
    <h3 className="my-5 bg-[#3C393B] p-2 rounded-md text-white"><FaEdit /></h3>
    <h3 className="bg-[#EA4744] p-2 rounded-md text-white"><MdDelete /></h3>
  </div>
</div>
  )
}

export default CoffeeCard