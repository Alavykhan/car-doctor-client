import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvides";


const SocialLogin = () => {
   const {googleSignIn} = useContext(AuthContext);

   const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=> console.log(error))
   }

    return (
        <div>
              <div className="divider">OR</div>

              <div className="text-center mb-5">
              <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                G
                </button>
              </div>

        </div>
    );
};

export default SocialLogin;