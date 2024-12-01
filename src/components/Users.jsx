import { useEffect, useState } from "react";
import { deleteAlert, } from "./SuccessAlert";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(res =>res.json())
        .then(data =>setUsers(data) )
        .catch(error => console.log("ERROR", error))
    },[]);

    const deleteHandler =(id)=>{
        fetch(`http://localhost:3000/users`,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({"id" :id})
        })
        .then(res => {
            console.log(res);
            const remain = users.filter(user =>user._id !== id );
            setUsers(remain);
            deleteAlert("User delete success")
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-10/12 mx-auto">
    {/* head */}
    <thead className="bg-base-300">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user , i)=> 
            <tr key={user._id} className="">
            <th>{ i+ 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.userAt}</td>
            <td className="flex justify-center items-center gap-2">
                <button className="btn btn-sm">Edit</button>
                <button onClick={()=>deleteHandler(user._id)} className="btn btn-sm btn-error">X</button>
                </td>
          </tr>
        )
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;