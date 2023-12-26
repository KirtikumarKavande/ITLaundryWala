const User = require("../models/newUser");
const fs = require("fs");
const net = require("net");

function generatePRNContent(data) {
  let prnContent = "";

  // PRN content generation
  prnContent += `<xpml><page quantity='0' pitch='50.0 mm'></xpml>SIZE 25 mm, 38 mm\n`;
  prnContent += `GAP 3 mm, 0 mm\nSET RIBBON ON\nDIRECTION 0,0\nREFERENCE 0,0\n`;
  prnContent += `OFFSET 0 mm\nSET PEEL OFF\nSET CUTTER OFF\nSET PARTIAL_CUTTER OFF\n`;
  prnContent += `<xpml></page></xpml><xpml><page quantity='1' pitch='50.0 mm'></xpml>SET TEAR ON\n`;
  prnContent += `CLS\nCODEPAGE 1252\n`;

  data.forEach((item) => {
    prnContent += `TEXT 162,540,"0",180,10,10,"Qty: ${item.Qty}"\n`;
    prnContent += `TEXT 263,410,"0",180,13,12,"Cus ID: ${item.Cus_ID}"\n`;
    prnContent += `TEXT 263,312,"0",180,9,12,"W_TYPE : ${item.W_Type}"\n`;
    if (item.Amount) {
      prnContent += `TEXT 265,203,"0",180,9,12,"Amount : ${item.Amount}"\n`;
    }
    prnContent += `PRINT 1,1\n`;
  });

  prnContent += `<xpml></page></xpml><xpml><end/></xpml>`;
  return prnContent;
}

const printBarCode = async (req, res) => {
  //   console.log(req.body);

  //   try {
  //     // const prnContent = generatePRNContent(req.body); // Replace with your function

  // // Replace with your printer's IP and port
  // const printerAddress = "127.0.0.1";
  // const printerPort = 3000;

  // const commands = `
  // <xpml>
  //   <page quantity='1' pitch='50.0 mm'></page>
  //   CLS
  // </xpml>
  // `;

  // const client = new net.Socket();

  // client.connect(printerPort, printerAddress, () => {
  //   console.log('Connected to printer');

  //   // Sending commands to the printer
  //   client.write(commands);
  // });

  // // Handling incoming data from the printer
  // client.on('data', (data) => {
  //   console.log('Received:', data.toString());
  //   // Parse and handle the received data here
  // });

  
  // client.on('close', () => {
  //   console.log('Connection closed');
  // });
  //     console.log(prnContent);
  //   } catch (error) {
  //     console.log(error)
  //     return res.status(500).json({ success: false, error: error.message });
  //   }


  const filePath = 'C:\\path_to_your_file.prn'; // Example path
  const printerName = '\\\\your_printer_name'; // Example printer name
  
  const command = `copy /b "${filePath}" ${printerName}`;
  
  const printerProcess = exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  
  printerProcess.on('exit', (code) => {
    if (code === 0) {
      console.log('File sent to the printer successfully.');
    } else {
      console.error(`Command execution error, code: ${code}`);
    }
  });
};

module.exports = { printBarCode };
