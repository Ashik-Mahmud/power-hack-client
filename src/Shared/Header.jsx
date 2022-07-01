import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Header = () => {
  const navigate = useNavigate();
  const { auth, user, refetch } = useContext(AuthContext);

  /* Handle Log Out  */
  const handleLogOut = async () => {
    axios
      .patch(`http://localhost:5000/users/register?email=${user?.email}`, {
        isLogin: false,
      })
      .then((res) => {
        const { success } = res.data;
        if (success) {
          toast.success("Log Out Successfully done");
          localStorage.removeItem("accessToken");
          refetch();
        }
      });
  };
  return (
    <header className="navbar bg-base-100 shadow">
      <div className="container mx-auto justify-center">
        <div className="flex items-center gap-3 flex-col sm:navbar bg-base-100 ">
          <div className="sm:flex-1">
            <a
              href="/"
              className="btn btn-ghost font-raleway font-bold normal-case text-xl"
            >
              POWER HACK
            </a>
            {auth && (
              <div className="total-paid bg-primary text-white px-2 py-1 rounded-md">
                Total Paid{" "}
                <span className="font-raleway font-bold normal-case text-xl">
                  100
                </span>
              </div>
            )}
          </div>
          <div className="sm:flex-none gap-2">
            {auth ? (
              <div className="users-info flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="avatar w-10 h-10 rounded-full font-bold  grid place-items-center border">
                    {user?.name.slice(0, 1)}
                  </div>
                  <span className="font-normal font-poppins">{user?.name}</span>
                </div>
                <button
                  className="btn btn-error btn-sm rounded"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
