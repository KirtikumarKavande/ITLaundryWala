import toast from "react-hot-toast";
import { BASE_URL } from "../utilities/constant";
const useGetsDataFromDB = () => {
  // const token = useSelector((store) => store.user.token);


  const getDataFromDB = async (url) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "GET",
        credentials: 'include',
        headers: { "content-type": "application/json" },
        // headers: { "content-type": "application/json","authorization":localStorage.getItem("jwtToken") },
      });
      if (!res.ok) {
        toast.error("session expired please login again")
        localStorage.clear()
        window.location.href = "/login"
        setTimeout(() => {
          window.location.reload()

        }, 1000)
      }

      const data = await res.json();

      return data;
    } catch (err) {
      localStorage.clear()
      window.location.href = "/login"
      setTimeout(() => {
        window.location.reload()

      }, 1000)
      return { statusCode: 400, message: "something went wrong" };
    }
  };
  return getDataFromDB;
};

export default useGetsDataFromDB;
