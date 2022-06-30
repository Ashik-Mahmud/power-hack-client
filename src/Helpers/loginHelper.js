import axios from "axios";
import toast from "react-hot-toast";

const LoginHelper = (email, token, data) =>{
    
    axios
    .patch(`http://localhost:5000/users/register?email=${email}`, data)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        toast.success("Login Successfully done");
        localStorage.setItem("accessToken", token);
      }
    });
}

export default LoginHelper;