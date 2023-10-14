import React from "react";
import { BASE_URL } from "../utilities/constant";
import { useSelector } from "react-redux";
const useGetDataFromDB = () => {
  const token = useSelector((store) => store.user.token);

  const getDataFromDB = async (url) => {
    try {
      const res = await fetch(`${BASE_URL}/${url}`, {
        method: "GET",
        headers: { "content-type": "application/json",Authorization: token },
      });
      const data = await res.json();

      return data;
    } catch (err) {
      return { statusCode: 400, message: "something went wrong" };
    }
  };
  return getDataFromDB;
};

export default useGetDataFromDB;
