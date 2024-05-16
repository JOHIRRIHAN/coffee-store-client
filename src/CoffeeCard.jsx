/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, coffeeName, supplier, category, chef, tasty, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-200 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name: <span className="text-lg font-light">{coffeeName}</span>
        </h2>
        <p className="card-title">
          Chef: <span className="text-lg font-light">{chef}</span>
        </p>
        <p className="card-title">
          Category: <span className="text-lg font-light">{category}</span>
        </p>
      </div>
      <div className="pr-5 pt-5 text-3xl ">
        <h3 className="mt-5 bg-[#D2B48C] p-2 rounded-md text-white">
          <FaEye />
        </h3>
        <h3 className="my-5 bg-[#3C393B] p-2 rounded-md text-white">
        <Link to={`/updateCoffee/${_id}`} >
          <FaEdit />
        </Link>
        </h3>
        <h3
          className="bg-[#EA4744] p-2 rounded-md text-white"
          onClick={() => handleDelete(_id)}
        >
          <MdDelete />
        </h3>
      </div>
    </div>
  );
};

export default CoffeeCard;
