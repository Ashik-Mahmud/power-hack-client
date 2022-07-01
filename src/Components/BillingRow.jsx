const BillingRow = ({
  _id,
  name,
  email,
  phone,
  paid_amount,
  deleteBilling,
  editingBilling,
}) => {
  return (
    <tr>
      <th>{_id || "Loading..."}</th>
      <td>{name || "Loading..."}</td>
      <td>{email || "Loading..."}</td>
      <td>{phone || "Loading..."}</td>
      <td>{paid_amount || "Loading..."}</td>
      <td>
        {" "}
        <label
          onClick={() => editingBilling(_id, name, email, phone, paid_amount)}
          htmlFor="my-modal-3"
          className="btn btn-sm btn-secondary"
        >
          Edit
        </label>
      </td>
      <td>
        <button
          onClick={() => deleteBilling(_id)}
          className="btn btn-sm btn-error"
        >
          &times;
        </button>
      </td>
    </tr>
  );
};

export default BillingRow;
