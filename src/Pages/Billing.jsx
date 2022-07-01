import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../App";
import BillingRow from "../Components/BillingRow";
import Modal from "./../Components/Modal";
const BillingList = () => {
  const navigate = useNavigate();
  const { user, setPaidTotal } = useContext(AuthContext);
  const [billings, setBillings] = useState([]);
  const [searchedBillings, setSearchedBillings] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [navigate]);

  /*   Handle Delete Billings  */
  const deleteBilling = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `http://localhost:5000/delete-billing?id=${id}&&email=${user.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          )
          .then((res) => {
            const result = res.data;
            if (result.success) {
              Swal.fire("Deleted!", result.message, "success");
              refetch();
            }
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  /* Getting the list of billing items based on Users */
  const { data, isLoading, refetch } = useQuery(
    ["billingsData", user],
    async () =>
      await fetch(`http://localhost:5000/billing-list?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  useEffect(() => {
    setBillings(data?.data);
    setSearchedBillings(data?.data);
    /* Paid Total */
    const paidTotal = data?.data.reduce(
      (acc, item) => acc + item.paid_amount,
      0
    );
    setPaidTotal(paidTotal);
  }, [data, setPaidTotal]);

  /* SEARCH BILLING USING FULL NAME, EMAIL, PHONE NUMBER */
  const handleSearch = async (event) => {
    console.log(event.target.value);
    const searchValue = event.target.value.toLowerCase();
    const filteredBilling = billings.filter(
      (item) =>
        item.name.toLowerCase().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue) ||
        item.phone.toLowerCase().includes(searchValue)
    );
    setSearchedBillings(filteredBilling);
  };

  return (
    <section id="billing" className="p-10 ">
      <div className="container mx-auto font-poppins shadow p-5 rounded">
        <div className="title text-center mb-5">
          <h3 className="text-3xl font-poppins font-semibold">Billing Lists</h3>
          <span>Here you will get all the billing list.</span>
        </div>
        {/* Billing Header  */}
        <div className="header bg-slate-100 rounded-md">
          <div className="flex-wrap gap-4 navbar">
            <div className="sm:flex-1 flex-col sm:flex-row w-full">
              <a href="/" className="btn btn-ghost normal-case text-xl mr-3">
                Billing List
              </a>
              <div className="form-control ">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered "
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="flex-none gap-2 justify-center items-center w-full sm:justify-start sm:items-start sm:w-auto">
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
          {searchedBillings?.length > 0 ? (
            !isLoading ? (
              <>
                {" "}
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
                    {searchedBillings?.map((item, index) => (
                      <BillingRow
                        key={item._id}
                        {...item}
                        deleteBilling={deleteBilling}
                      />
                    ))}
                  </tbody>
                </table>
                <div
                  className={`pagination mt-5  justify-end items-center gap-1 pt-4  ${
                    searchedBillings?.length > 10 ? "flex" : "hidden"
                  }`}
                >
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
              </>
            ) : (
              <div className="text-center py-5">
                <h3 className="text-xl font-bold">Loading...</h3>
              </div>
            )
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl">No Billings Found yet.</h3>
              <label
                htmlFor="my-modal-3"
                className="btn btn-primary rounded-md mt-7"
              >
                Add New Billing +
              </label>
            </div>
          )}
        </div>
      </div>
      <Modal refetch={refetch} />
    </section>
  );
};

export default BillingList;
