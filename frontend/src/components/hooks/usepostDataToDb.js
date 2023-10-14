import { BASE_URL } from "../utilities/constant";
import { useSelector } from "react-redux";

const usePostDataToDb = () => {
  const token = useSelector((store) => store.user.token);
  const postDatatoDb = async (url, obj) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "content-type": "application/json", Authorization: token },
      });
      const data = await res.json();

      return data;
    } catch (err) {
      return { statusCode: 400, message: "something went wrong" };
    }
  };
  return postDatatoDb;
};

export default usePostDataToDb;
