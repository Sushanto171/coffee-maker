import { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const LogIn = () => {
    const {signIn, logInViaGoogle} = useContext(AuthContext);
    const logInFormHandler = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = {email, password}
        console.log(data)

        signIn(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log("ERROR" ,error)
        })
    }

    const googleBtnHandler = ()=>{
        logInViaGoogle()
        .then(res => {
            console.log(res.user)
        })
        .catch(error => {
            console.log("ERROR" , error)
        })
    }
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="card bg-[#ECEAE3]  w-full max-w-sm shrink-0 hover:shadow-2xl">
            <h1 className="text-center text-3xl mt-5">Log in form</h1>
                <form onSubmit={logInFormHandler} className="card-body ">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-lg">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="text-sm link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control">
                    <button className="btn col-span-2 bg-[#E3B577] hover:bg-[#c18f4e] text-lg mt-4">Log in</button>
                    </div>
                </form>
                <div className="divider px-8">OR</div>
                <div className="flex justify-center gap-5 mb-4">
                    <button onClick={googleBtnHandler} className="btn rounded-full"><FcGoogle size={20} /></button>
                    <button className="btn rounded-full"><FaFacebook size={20} /></button>
                    <button className="btn rounded-full"><FaGithub size={20} /></button>
                </div>
                <p className="p-10 pt-0">Don't have an account? <Link to="/signUp" className="underline">Sign up</Link></p>
            </div>
        </div>
    );
};

export default LogIn;