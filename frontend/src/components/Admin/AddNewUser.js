import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function AddNewUser() {
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Customer ID" />

            <Input size="lg" label="Name" />
            <Input size="lg" label="Mobile Number" />

            <Input size="lg" label="Address" />
          </div>

          <Button className="mt-6" fullWidth>
            Register
          </Button>
        </form>
      </Card>
    </>
  );
}
export default AddNewUser;
