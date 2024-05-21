import { useLoaderData } from "react-router-dom";
import Headers from "./Headers";
import { useState } from "react";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id =>{
    fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            console.log('deleted data')
            setUsers(users.filter(user => user._id !== id));

        }
    })
  }
    // Add logic to remove the user from the users array
  

  return (
    <div>
      <Headers />

      <div className="overflow-x-auto px-40">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-500 text-white">
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>ID</th>
              
              <th>lastLoggedAt</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-base-200 border border-black">
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user._id}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button className="btn" onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
