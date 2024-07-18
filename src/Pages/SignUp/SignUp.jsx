import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvides";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
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
                <input type="submit" className="btn btn-primary" value="Sign Up" />
                </div>
            </form>
            <p className="p-5">Already have an account <Link to='/login'>Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default SignUp;