import axios from "axios";
import { useContext, useEffect } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import { successAlert } from "./SuccessAlert";

const SignUp = () => {
  const { createUser, logInViaGoogle, setTitle } = useContext(AuthContext);
  const navigate = useNavigate();
  const userApi = axios.create({ baseURL: "http://localhost:3000" });
  useEffect(() => {
    setTitle("Sign up");
  }, []);

  const signUpHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    // create user
    createUser(email, password)
      .then((res) => {
        const userAt = res?.user?.metadata?.creationTime;
        const data = { email, name, userAt };

        userApi.post("/users", { data }).then((res) => {
          e.target.reset();
          navigate("/");
          successAlert("up");
        });

        // fetch("http://localhost:3000/users", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {
        //     }
        //   })
        //   .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const googleBtnHandler = () => {
    logInViaGoogle()
      .then((res) => {
        const name = res?.user?.displayName;
        const email = res?.user?.email;
        const userAt = res?.user?.metadata?.creationTime;
        const data = { name, email, userAt };
        userApi.post("/users", { data }).then((res) => {
          if (res.data) {
            console.log(res.data);
            successAlert("in");
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="card bg-[#ECEAE3]  w-full max-w-sm shrink-0 hover:shadow-2xl">
        <h1 className="text-center text-3xl mt-5">Sign Up Now</h1>
        <form onSubmit={signUpHandler} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-lg">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text  text-lg">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn col-span-2 bg-[#E3B577] hover:bg-[#c18f4e] text-lg mt-4">
              Sign up
            </button>
          </div>
        </form>
        <div className="divider px-8">OR</div>
        <div className="flex justify-center gap-5 mb-4">
          <button onClick={googleBtnHandler} className="btn rounded-full">
            <FcGoogle size={20} />
          </button>
          <button className="btn rounded-full">
            <FaFacebook size={20} />
          </button>
          <button className="btn rounded-full">
            <FaGithub size={20} />
          </button>
        </div>
        <p className="p-10 pt-0">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
