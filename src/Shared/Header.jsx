import useAuth from "../Hooks/useAuth";

const Header = () => {
  const { auth, user } = useAuth();
  console.log(auth, user);
  return (
    <header className="navbar bg-base-100 shadow">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a
              href="/"
              className="btn btn-ghost font-raleway font-bold normal-case text-xl"
            >
              POWER HACK
            </a>
            <div className="total-paid bg-primary text-white px-2 py-1 rounded-md">
              Total Paid{" "}
              <span className="font-raleway font-bold normal-case text-xl">
                100
              </span>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="users-info flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="avatar w-10 h-10 rounded-full font-bold  grid place-items-center border">
                  A
                </div>
                <span className="font-normal font-poppins">Ashik Mahmud</span>
              </div>
              <button className="btn btn-error btn-sm rounded">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
