import React from "react";

const usepostDataToDb = async () => {
  const res = await fetch();
  const data =await res.json();

  return data
};

export default usepostDataToDb;
