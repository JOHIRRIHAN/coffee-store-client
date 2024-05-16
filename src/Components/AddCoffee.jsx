// import React from 'react'

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const tasty = form.tasty.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      coffeeName,
      supplier,
      category,
      chef,
      tasty,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Added by Database successfully✅!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="p-5">
      <h5>
        <Link to={"/"} className=" border-black  font-semibold px-4">
          Go to Home
        </Link>
      </h5>

      <form onSubmit={handleAddCoffee} className="bg-base-200 py-10">
        <h3 className="text-4xl text-center pt-10">Add new Coffee</h3>
        <p className="text-center px-36 py-10">
          It is a long established fact that a reader will be districted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <div className="flex items-center justify-center">
          <div className=" px-20 pt-20">
            <div className="w-96 py-4">
              <label>Name</label>
              <input
                className="w-full p-2"
                type="text"
                name="coffeeName"
                id=""
                placeholder="Enter Coffee name"
              />
            </div>
            <div className="w-96 py-4">
              <label>supplier</label>
              <input
                className="w-full p-2"
                type="text"
                name="supplier"
                id=""
                placeholder="Enter supplier name"
              />
            </div>
            <div className="w-96 py-4">
              <label>category</label>
              <input
                className="w-full p-2"
                type="text"
                name="category"
                id=""
                placeholder="Enter category name"
              />
            </div>
          </div>

          <div className=" px-20 pt-20">
            <div className="w-96 py-4">
              <label>chef</label>
              <input
                className="w-full p-2"
                type="text"
                name="chef"
                id=""
                placeholder="Enter chef name"
              />
            </div>
            <div className="w-96 py-4">
              <label>tasty</label>
              <input
                className="w-full p-2"
                type="text"
                name="tasty"
                id=""
                placeholder="Enter tasty name"
              />
            </div>
            <div className="w-96 py-4">
              <label>details</label>
              <input
                className="w-full p-2"
                type="text"
                name="details"
                id=""
                placeholder="Enter details name"
              />
            </div>
          </div>
        </div>
        <div className="px-36">
          <label>Photo</label>
          <br />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full p-2"
          />
          <br />
          <br />
          <input
            className="w-full p-2 bg-[#D2B48C]"
            type="submit"
            value="Add Coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
