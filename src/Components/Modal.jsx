const modal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal font-poppins">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Billing Information</h3>
          <p className="py-4">
            Fill out all the fields attentively to add new billing information.
          </p>
          <form action="">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Name here"
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email here"
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone No here"
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Paid Amount</span>
              </label>
              <input
                type="number"
                placeholder="Paid Amount"
                className="input input-bordered "
              />
            </div>
            <div className="my-5">
              <button className="btn btn-primary">Save Billing</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default modal;
