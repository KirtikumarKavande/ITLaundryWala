import React from "react";
import { BASE_URL } from "../utilities/constant";
const usegetDataFromDB = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`,
    {
      method:"GET",
      headers:{"content-type": "application/json"}

    });
    const data = await res.json();

    return data;
  } catch (err) {
    return { statusCode: 400, message: "something went wrong" };
  }
};

export default usegetDataFromDB;
