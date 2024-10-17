import toast from "react-hot-toast";
import { BASE_URL } from "../utilities/constant";
// import { useSelector } from "react-redux";

const usePostsDataToDb = () => {
  // const token = useSelector((store) => store.user.token);


  const postDatatoDb = async (url, obj) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(obj),
        // headers: { "content-type": "application/json", "authorization": token },
        headers: { "content-type": "application/json" },
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
  return postDatatoDb;
};

export default usePostsDataToDb;
