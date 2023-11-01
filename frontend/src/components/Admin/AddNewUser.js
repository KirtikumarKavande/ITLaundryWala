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
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUserdetails } from "../../store/newUserDetails";
import CardContainer from "../utilities/Card";

function AddNewUser() {
  const dispatch = useDispatch();
  const [getCustomerId, setGetCustomerId] = useState();
  const { userDetails, handleChange } = useData({});
  const navigate = useNavigate();
  const postDataToDb = usePostDataToDb();

  const getDataFromDB = useGetDataFromDB();
  const dbConnection = async () => {
    const user = await getDataFromDB("userid");
    setGetCustomerId(+user?.message + 1);
  };
  useEffect(() => {
    dbConnection();
  }, []);

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    const res = await postDataToDb("addnewuser", {
      ...userDetails,
      customerID: getCustomerId,
    });
    try {
      if (res.success) {
        dispatch(addUserdetails({ ...userDetails, customerId: getCustomerId }));
        navigate("/existinguser");
        toast.success("User Added successfully");
      } else {
        toast.error(res.message);
      }
    } catch (e) {
      toast.error("something went wrong");
    }
  };
  return (
    <CardContainer>
      <Card color="transparent" shadow={false} className="pb-11">
        <form
          className="mt-2 mb-2    mx-auto bg-white p-11 rounded-lg"
          onSubmit={handleAddNewUser}
        >
          <Typography variant="h4" className="text-center  mb-10 ">
            New Customer
          </Typography>
          <div className="mb-4 flex flex-col gap-6">
            <Input
              className="md:w-72"
              label="Customer ID"
              name="customerID"
              onChange={handleChange}
              value={getCustomerId}
            />

            <Input
              className="md:w-72"
              label="Name"
              name="name"
              onChange={handleChange}
            />
            <Input
              label="Mobile Number"
              name="mobileNumber"
              onChange={handleChange}
              maxLength={10}
              className="md:w-72"
            />

            <Input
              label="Address"
              name="address"
              onChange={handleChange}
              className="md:w-72"
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
        </form>
      </Card>
    </CardContainer>
  );
}
export default AddNewUser;
