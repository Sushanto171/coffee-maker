import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

const Users2 = () => {
  const {
    isPending,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = axios
        .get("http://localhost:3000/users")
        .then((res) => res.data);
      return res;
    },
  });

  // useEffect(() => {
  //     axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  //   }, []);

  if (isError) {
    return <p>Error: {error.status || error.message}</p>;
  }
  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  console.log(users);
  return (
    <div>
      <h1>Users: {users?.length}</h1>
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
            {users.map((user, i) => (
              <tr key={user._id} className={i % 2 !== 0 ? " bg-base-200" : ""}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.userAt}</td>
                <td>{user.lastSignInTime}</td>
                <td className="flex justify-center items-center gap-2">
                  <Link to={`/users/${user._id}`}>
                    <button className="btn btn-sm">Edit</button>
                  </Link>
                  {/* <button
                      onClick={() => deleteHandler(user._id, user.email)}
                      className="btn btn-sm btn-error"
                    >
                      X
                    </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
