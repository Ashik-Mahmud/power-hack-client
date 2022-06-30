import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section
      id="register"
      className="grid place-items-center h-[86vh] font-poppins"
    >
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
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
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
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
      </div>
    </section>
  );
};

export default Register;
