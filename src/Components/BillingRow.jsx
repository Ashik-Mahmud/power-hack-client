const BillingRow = ({
  _id,
  name,
  email,
  phone,
  paid_amount,
  deleteBilling,
}) => {
  return (
    <tr>
      <th>{_id || "Loading..."}</th>
      <td>{name || "Loading..."}</td>
      <td>{email || "Loading..."}</td>
      <td>{phone || "Loading..."}</td>
      <td>{paid_amount || "Loading..."}</td>
      <td>
        <button className="btn btn-sm btn-secondary">Edit</button>
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
