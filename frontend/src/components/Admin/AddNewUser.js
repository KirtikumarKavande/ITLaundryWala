import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import usePostDataToDb from "../hooks/usePostDataToDb";
import { useEffect, useRef, useState } from "react";
import useData from "../hooks/useData";
import useGetDataFromDB from "../hooks/useGetDataFromDb";
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";

function AddNewUser() {
  const [getCustomerId, setGetCustomerId] = useState();
  const { userDetails, handleChange } = useData({});
  const navigate=useNavigate()
  console.log(userDetails);
  const postDataToDb = usePostDataToDb();

  const getDataFromDB = useGetDataFromDB();
  const dbConnection = async () => {
    const user = await getDataFromDB("userid");
    setGetCustomerId(+user?.message + 1);
    console.log("yyyyy", user);
  };
  useEffect(() => {
    dbConnection();
  }, []);

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    const res = await postDataToDb("addnewuser", {...userDetails,customerID:getCustomerId});
    try{
      if(res.success)
      {
        navigate('/existinguser')
        toast.success("User Added successfully")
      }
    }catch(e)
    {
toast.error("something went wrong")
    }
  };
  return (
    <>
      <Card color="transparent" shadow={false}>
        <Typography
          variant="h4"
          color="blue-gray "
          className="text-center mt-8"
        >
          New Customer
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
          onSubmit={handleAddNewUser}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Customer ID"
              name="customerID"
              onChange={handleChange}
              value={getCustomerId}
            />

            <Input size="lg" label="Name" name="name" onChange={handleChange} />
            <Input
              size="lg"
              label="Mobile Number"
              name="mobileNumber"
              onChange={handleChange}
            />

            <Input
              size="lg"
              label="Address"
              name="address"
              onChange={handleChange}
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
        </form>
      </Card>
    </>
  );
}
export default AddNewUser;
