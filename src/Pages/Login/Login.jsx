import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvides";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(from, {replace: true})

        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
                </div>
            </form>
            <p className="p-">Didnt have any account <Link to='/signup'>Sign Up</Link></p>
            <SocialLogin/>
            </div>
        </div>
        </div>
    );
};

export default Login;