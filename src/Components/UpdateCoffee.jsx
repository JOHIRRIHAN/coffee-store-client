// import React from 'react'

import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, coffeeName, supplier, category, chef, tasty, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const tasty = form.tasty.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {
          coffeeName,
          supplier,
          category,
          chef,
          tasty,
          details,
          photo,
        };
        console.log(updateCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Good job!",
                text: "Coffee Update successfully✅!",
                icon: "success",
              });
            }
          });
      };

  return (
    <form onSubmit={handleUpdateCoffee} className="bg-base-200 py-10">
        <Link to={'/'}>Got to Home</Link>
    <h3 className="text-4xl text-center pt-10">Update Coffee: {coffeeName}</h3>
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
            defaultValue={coffeeName}
            placeholder="Enter Coffee name"
          />
        </div>
        <div className="w-96 py-4">
          <label>supplier</label>
          <input
            className="w-full p-2"
            type="text"
            name="supplier"
            defaultValue={supplier}
            placeholder="Enter supplier name"
          />
        </div>
        <div className="w-96 py-4">
          <label>category</label>
          <input
            className="w-full p-2"
            type="text"
            name="category"
            defaultValue={category}
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
            defaultValue={chef}
            placeholder="Enter chef name"
          />
        </div>
        <div className="w-96 py-4">
          <label>tasty</label>
          <input
            className="w-full p-2"
            type="text"
            name="tasty"
            defaultValue={tasty}
            placeholder="Enter tasty name"
          />
        </div>
        <div className="w-96 py-4">
          <label>details</label>
          <input
            className="w-full p-2"
            type="text"
            name="details"
            defaultValue={details}
            placeholder="Enter details name"
          />
        </div>
      </div>
    </div>
    <div className="px-40">
      <label>Photo</label>
      <br />
      <input
        type="text"
        name="photo"
        defaultValue={photo}
        placeholder="Photo URL"
        className="w-full p-2"
      />
      <br />
      <br />
      <input
        className="w-full p-2 bg-[#D2B48C] cursor-pointer"
        type="submit"
        value="Update Coffee"
      />
    </div>
  </form>
  )
}

export default UpdateCoffee