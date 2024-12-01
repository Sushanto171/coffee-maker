import { useContext, useEffect, useState } from "react";
import { deleteAlert, } from "./SuccessAlert";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router";

const Users = () => {
    const {userDelete} = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://espresso-emporium-sever.vercel.app/users")
        .then(res =>res.json())
        .then(data =>setUsers(data) )
        .catch(error => console.log("ERROR", error))
    },[]);

    const deleteHandler =(id)=>{
        fetch(`https://espresso-emporium-sever.vercel.app/users`,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({"id" :id})
        })
        .then(res => {
          if(res.status){
            userDelete()
            .then(()=>{
              const remain = users.filter(user =>user._id !== id );
              setUsers(remain);
              deleteAlert("User delete success");
            })
          }
        }).catch(error => {
            console.log(error)
        })
    };

    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-10/12 mx-auto">
    {/* head */}
    <thead className="bg-base-300">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation time</th>
        <th>Last log in time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user , i)=> 
            <tr key={user._id} className={ (i % 2 !== 0) ? " bg-base-200":""}>
            <th>{ i+ 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.userAt}</td>
            <td>{user.lastSignInTime}</td>
            <td className="flex justify-center items-center gap-2">
              <Link to={`/users/${user._id}`} >
                <button className="btn btn-sm">Edit</button>
              </Link>
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