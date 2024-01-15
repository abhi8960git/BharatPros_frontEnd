import React from "react";

const Invoice = () => {
  const invoiceData = [
    {
      service: "Marbler/Marble Mistri",
      duration: "12 months",
      registrationFees: 300,
    },
  ];

  const totalRegistrationFees = invoiceData.reduce((acc, item) => acc + item.registrationFees, 0);

  return (
    <div className="">
      <table className="table-auto w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left text-sm">
            <th className="py-2 px-4">Service</th>
            <th className="py-2 px-4">Duration</th>
            <th className="py-2 px-4">Registration Fees</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((item) => (
            <tr key={item.service} className="border-b border-gray-200 text-sm">
              <td className="py-2 px-4">{item.service}</td>
              <td className="py-2 px-4">{item.duration}</td>
              <td className="py-2 px-4 text-right">{item.registrationFees}</td>
            </tr>
          ))}
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="py-4 px-4 font-semibold text-sm">
              Total Registration Fees
            </td>
            <td className="py-4 px-4 text-right font-semibold text-sm">
              {totalRegistrationFees}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
