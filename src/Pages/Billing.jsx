import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BillingRow from "../Components/BillingRow";
import Modal from "./../Components/Modal";
const BillingList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <section id="billing" className="p-10 ">
      <div className="container mx-auto font-poppins shadow p-5 rounded">
        <div className="title text-center mb-5">
          <h3 className="text-3xl font-poppins font-semibold">Billing Lists</h3>
          <span>Here you will get all the billing list.</span>
        </div>
        {/* Billing Header  */}
        <div className="header bg-slate-100 rounded-md">
          <div className="navbar">
            <div className="flex-1 ">
              <a href="/" className="btn btn-ghost normal-case text-xl mr-3">
                Billing List
              </a>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex-none gap-2">
              <label
                htmlFor="my-modal-3"
                className="btn btn-primary rounded-md"
              >
                Add New Billing +
              </label>
            </div>
          </div>
        </div>
        {/* Billing Header end */}
        <div className="overflow-x-auto my-6">
          <table className="table w-full table-compact">
            <thead>
              <tr>
                <th>Billing ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th width="150">Paid Amount</th>
                <th width="80">Edit</th>
                <th width="80">Delete</th>
              </tr>
            </thead>
            <tbody>
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
              <BillingRow />
            </tbody>
          </table>
          <div className="pagination mt-5 flex justify-end items-center gap-1 pt-4">
            <button className="btn btn-square btn-sm btn-primary hover:text-white">
              1
            </button>
            <button className="btn btn-square btn-sm btn-outline text-black hover:text-white">
              2
            </button>
            <button className="btn btn-square btn-sm btn-outline text-black hover:text-white">
              3
            </button>
            <button className="btn btn-square btn-sm btn-outline text-black hover:text-white">
              4
            </button>
            <button className="btn btn-square btn-sm btn-outline text-black hover:text-white">
              5
            </button>
            <select
              name=""
              className="btn btn-sm btn-outline hover:bg-white hover:text-black active:outline-none focus:outline-none"
              id=""
            >
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">30</option>
            </select>
          </div>
        </div>
      </div>
      <Modal />
    </section>
  );
};

export default BillingList;
