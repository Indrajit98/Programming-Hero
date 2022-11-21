import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useToken } from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [singUpError, setSignUpError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [createUserEmail, setCreateUserEmail] = useState('')
  const [token] = useToken(createUserEmail)

  if (token) {
    navigate('/')
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`http://localhost:5000/users`, {
      method: "POSt",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("saveUser", data);
        setCreateUserEmail(email)
      });
  };



  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
    .then((res) => {
      const user = res.user;
      toast.success("User Created Successfully");
      console.log(user);
    });
  };

  return (
    <div className="md:w-1/4 p-3 mx-auto">
      <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required *" })}
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required *" })}
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            {" "}
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is require *",
              minLength: {
                value: 6,
                message: "Password must be 6 character long",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message: "Password must be strong",
              },
            })}
            placeholder="Your Password"
            className="input input-bordered w-full"
          />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        {singUpError && <p className="text-error">{singUpError}</p>}
        <input
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4"
          type="submit"
        />
      </form>
      <p className="pt-4">
        Already have an account{" "}
        <Link to="/login" className="text-primary">
          Login
        </Link>{" "}
      </p>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
        Continue With Google
      </button>
    </div>
  );
};

export default SignUp;
