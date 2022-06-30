import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section
      id="login"
      className="grid place-items-center h-[86vh] font-poppins"
    >
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-lg">
        <div className="card-body">
          <h3 className="text-lg font-poppins font-semibold">
            Login Into Account
          </h3>
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
            <label className="label">
              <a href="/" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login Account</button>
          </div>
          <label className="label-text-alt  ">
            New In Power Pack?{" "}
            <Link
              to="/register"
              className="label-text-alt link link-hover text-primary"
            >
              Create An Account
            </Link>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Login;
