import axios from "axios";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
const Register = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  /* Handle Register form  */
  const handleRegisterForm = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    /* Validations */
    if (!name) {
      return toast.error("Name field is required.");
    } else if (!email) {
      return toast.error("Email field is required");
    } else if (!password) {
      return toast.error("Password field is required.");
    } else if (password.length < 6) {
      return toast.error("Provide strong password more than 6 characters.");
    }

    /* Actions here */
    const registerData = {
      name,
      email,
      password,
    };

    await axios
      .post(
        "https://power-hack-storage.herokuapp.com/users/register",
        registerData
      )
      .then((res) => {
        const result = res.data;
        if (result.success) {
          toast.success(result.message);
          toast.success("Now You can login here With You account.");
          navigate("/login");
          event.target.reset();
        } else {
          toast.error(result.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section
      id="register"
      className="grid place-items-center sm:h-[85vh] h-screen font-poppins"
    >
      <form
        onSubmit={handleRegisterForm}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 rounded"
      >
        <div className="card-body">
          <h3 className="text-lg font-poppins font-semibold">
            Register Into Account
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Create An Account</button>
          </div>
          <label className="label-text-alt  ">
            Already have an Account{" "}
            <Link
              to="/login"
              className="label-text-alt link link-hover text-primary"
            >
              Login
            </Link>
          </label>
        </div>
      </form>
    </section>
  );
};

export default Register;
