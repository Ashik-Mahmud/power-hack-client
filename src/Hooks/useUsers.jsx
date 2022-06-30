import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users/register`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.isHas);
      });
  }, []);
  return [users];
};

export default useUsers;
