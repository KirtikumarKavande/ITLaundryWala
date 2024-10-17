import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { MonthNames } from "../utilities/constant";

function Invoice() {
  const [invoiceData, setInvoiceData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const actualReceiptRef = useRef(null);

  useEffect(() => {
    const storedData = localStorage.getItem('invoiceData');
    if (storedData) {
      const { clothDetails, customerInfo } = JSON.parse(storedData);
      setInvoiceData(clothDetails);
      setUserDetails(customerInfo);
    }
  }, []);

  const downloadImage = () => {
    const capture = actualReceiptRef.current;

    if (!capture) {
      console.error("Element not found!");
      return;
    }

    setLoader(true);
    capture.style.transform = "none";
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      setLoader(false);

      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = "receipt.png";
      downloadLink.click();
    });
  };

  // Early return if data is not loaded
  if (!invoiceData || !userDetails) {
    return <div>Loading...</div>;
  }

  const splittePickupdDate = invoiceData?.pickupDate?.split("-");
  const splitteDeliverydDate = invoiceData?.deliveryDate?.split("-");

  return (
    <div className="wrapper">
      <div
        className="receipt-box tracking-widest w-[900px]"
        ref={actualReceiptRef}
      >
        <div className="actual-receipt mx-auto w-[700px]">
          <div className="h-14 w-full"></div>
          <div className="container">
            <header className="flex justify-between items-center">
              <h1 className="font-extrabold text-4xl">INVOICE</h1>
              <img src="/logo.jpg" className="h-36" alt="LaundryWala Logo" />
            </header>

            <main className="mt-20">
              <div className="flex justify-between mt-5">
                <div>
                  <div className="flex pb-6">
                    <p className="font-bold">D.O.O:</p>
                    <p>
                      &nbsp;<span>{splittePickupdDate[0]}</span>{" "}
                      <span>{MonthNames[+splittePickupdDate[1] - 1]},</span>{" "}
                      <span>{splittePickupdDate[2]}</span>{" "}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold">Billed to:</h3>
                  <p className="mt-2">
                    Cus ID: <span>{userDetails?.customerId}</span>
                  </p>
                  <p className="mt-2">
                    Name : <span>{userDetails?.name}</span>
                  </p>
                  <p className="mt-2">
                    Mo No: <span>{userDetails?.mobileNumber}</span>
                  </p>
                </div>
                <div>
                  <div className="flex pb-5">
                    <p className="font-bold">D.O.D:</p>
                    <p>
                      &nbsp;<span>{splitteDeliverydDate[0]}</span>{" "}
                      <span>{MonthNames[+splitteDeliverydDate[1] - 1]},</span>{" "}
                      <span>{splitteDeliverydDate[2]}</span>
                    </p>
                  </div>
                  <h3 className="text-lg font-bold">From:</h3>
                  <p className="mt-2">IT Laundrywala</p>
                  <p className="mt-2">
                    <p>Mukai Nagar, Near Matoshree</p>{" "}
                    <p>Food Court, Hinjewadi</p>{" "}
                  </p>
                  <p className="mt-2">Mo No. 7756951888</p>
                </div>
              </div>

              <div className="mt-5">
                <table className="w-full">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#E6E6E8",
                      }}
                      className="pb-16"
                    >
                      <th className="pb-4">Cloth Type</th>
                      <th className="pb-4">Wash Type</th>
                      <th className="pb-4">Qty</th>
                      <th className="pb-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData?.clothType.map((item, index) => (
                      <tr className="text-center" key={index}>
                        <td className="px-2 py-1">{item?.cloth}</td>
                        <td className="px-2 py-1">
                          {invoiceData?.washType?.key}
                        </td>
                        <td className="px-2 py-1">{item?.quantity}</td>
                        <td className="px-2 py-1">{item?.amount || "-"}</td>
                      </tr>
                    ))}

                    {invoiceData.isExpressDelivery &&
                      invoiceData.washType.type === "perKg" && (
                        <tr className="text-center">
                          <td className="px-2 pt-6">Amount</td>
                          <td className="px-2 pt-6">-</td>
                          <td className="px-2 pt-6">-</td>
                          <td className="px-2 pt-6">
                            {invoiceData?.amountForPerPeice > 0
                              ? invoiceData?.amountForPerPeice / 1.5
                              : invoiceData?.amountForPerKg / 1.5}
                          </td>
                        </tr>
                      )}

                    {invoiceData.isExpressDelivery && (
                      <tr className="text-center">
                        <td
                          className={`px-2 ${
                            invoiceData.isExpressDelivery &&
                            invoiceData.washType.type === "perKg"
                              ? "pt-2"
                              : "pt-6"
                          }`}
                        >
                          Express Charges
                        </td>
                        <td
                          className={`px-2 ${
                            invoiceData.isExpressDelivery &&
                            invoiceData.washType.type === "perKg"
                              ? "pt-2"
                              : "pt-6"
                          }`}
                        >
                          -
                        </td>
                        <td
                          className={`px-2 ${
                            invoiceData.isExpressDelivery &&
                            invoiceData.washType.type === "perKg"
                              ? "pt-2"
                              : "pt-6"
                          }`}
                        >
                          -
                        </td>
                        <td
                          className={`px-2 ${
                            invoiceData.isExpressDelivery &&
                            invoiceData.washType.type === "perKg"
                              ? "pt-2"
                              : "pt-6"
                          }`}
                        >
                          {invoiceData?.amountForPerPeice > 0
                            ? invoiceData?.amountForPerPeice / 3
                            : invoiceData?.amountForPerKg / 3}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="flex mt-4 bg-[#E6E6E8] pr-3 justify-end items-center space-x-16 pb-1">
                <div className="flex items-center pr-8 pb-3">
                  <h3 className="text-lg font-bold">Weight:</h3>
                  <p>
                    {invoiceData?.weight || "-"}
                    {invoiceData?.weight ? " kg" : ""}
                  </p>
                </div>
                <div className="flex items-center pr-10 pb-3">
                  <h3 className="text-lg font-bold pr-1">Total:&nbsp;</h3>
                  <p>
                    {invoiceData?.amountForPerPeice > 0
                      ? invoiceData?.amountForPerPeice
                      : invoiceData?.amountForPerKg}
                  </p>
                </div>
              </div>

              <p className="mt-5">
                <span className="font-bold">Note:</span>{" "}
                <span>Thank you for choosing us!</span>
              </p>
            </main>
          </div>
        </div>
        <div className="w-full">
          <svg
            id="wave"
            className="transform rotate-0 transition duration-300"
            //   style="transform:rotate(0deg); transition: 0.3s"
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(207, 208, 210, 1)" offset="0%"></stop>
                <stop stop-color="rgba(207, 208, 210, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              className="transform translate-x-0 translate-y-0 opacity-100"
              // style="transform:translate(0, 0px); opacity:1"
              fill="url(#sw-gradient-0)"
              d="M0,441L60,424.7C120,408,240,376,360,334.8C480,294,600,245,720,228.7C840,212,960,229,1080,220.5C1200,212,1320,180,1440,147C1560,114,1680,82,1800,57.2C1920,33,2040,16,2160,32.7C2280,49,2400,98,2520,106.2C2640,114,2760,82,2880,65.3C3000,49,3120,49,3240,89.8C3360,131,3480,212,3600,212.3C3720,212,3840,131,3960,138.8C4080,147,4200,245,4320,285.8C4440,327,4560,310,4680,326.7C4800,343,4920,392,5040,408.3C5160,425,5280,408,5400,383.8C5520,359,5640,327,5760,334.8C5880,343,6000,392,6120,351.2C6240,310,6360,180,6480,114.3C6600,49,6720,49,6840,65.3C6960,82,7080,114,7200,138.8C7320,163,7440,180,7560,228.7C7680,278,7800,359,7920,334.8C8040,310,8160,180,8280,114.3C8400,49,8520,49,8580,49L8640,49L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
            ></path>
            <defs>
              <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(69, 70, 70, 1)" offset="0%"></stop>
                <stop stop-color="rgba(69, 70, 70, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              // style="transform:translate(0, 50px); opacity:0.9"
              className="transform translate-y-12 opacity-90"
              fill="url(#sw-gradient-1)"
              d="M0,196L60,196C120,196,240,196,360,220.5C480,245,600,294,720,334.8C840,376,960,408,1080,392C1200,376,1320,310,1440,302.2C1560,294,1680,343,1800,318.5C1920,294,2040,196,2160,138.8C2280,82,2400,65,2520,81.7C2640,98,2760,147,2880,171.5C3000,196,3120,196,3240,187.8C3360,180,3480,163,3600,130.7C3720,98,3840,49,3960,73.5C4080,98,4200,196,4320,245C4440,294,4560,294,4680,261.3C4800,229,4920,163,5040,122.5C5160,82,5280,65,5400,49C5520,33,5640,16,5760,40.8C5880,65,6000,131,6120,204.2C6240,278,6360,359,6480,326.7C6600,294,6720,147,6840,130.7C6960,114,7080,229,7200,261.3C7320,294,7440,245,7560,220.5C7680,196,7800,196,7920,228.7C8040,261,8160,327,8280,302.2C8400,278,8520,163,8580,106.2L8640,49L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
            ></path>
          </svg>
        </div>
      </div>
      <button onClick={downloadImage}>Download Image</button>
    </div>
  );
}

export default Invoice;