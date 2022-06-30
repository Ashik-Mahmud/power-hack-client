import { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users/register`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setAuth(true);
          setLoading(true);
          setUser(data.user);
        }
      });
  }, []);
  return { auth, loading, user };
};

export default useAuth;
