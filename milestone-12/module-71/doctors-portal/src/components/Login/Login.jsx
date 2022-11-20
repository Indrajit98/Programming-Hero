
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useToken } from "../../hooks/useToken";

const Login = () => {
  const {  register,formState: { errors },  handleSubmit,} = useForm();
  const [loginError, setLoginError] = useState("");
  const { signIn,googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [loginUserEmail,setLoginUserEmail] = useState('');
  const [ token] = useToken(loginUserEmail)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  // const [data, setData] = useState('')

  if(token){
    navigate(from,{replace:true})

  }

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setLoginUserEmail(data.email)
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  const handleGoogleSignIn = () =>{
    googleSignIn(googleProvider)
    .then((res) => {
        const user = res.user;
        console.log(user)
    })
  }

  return (
    <div className="md:w-1/4 p-3 mx-auto">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "Email Address is required" })}
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters or longer ",
              },
            })}
            placeholder="Your Password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-error">{errors.password?.message}</p>
          )}
          <div>{loginError && <p className="text-error">{loginError}</p>}</div>
        </div>
        <label className="label">
          {" "}
          <span className="label-text">Forget Password</span>
        </label>
        <input
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full"
          type="submit"
        />
      </form>
      <p className="pt-4">
        New to Doctors Portal?{" "}
        <Link to="/signUp" className="text-primary">
          Create new account
        </Link>{" "}
      </p>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">Continue With Google</button>
    </div>
  );
};

export default Login;
