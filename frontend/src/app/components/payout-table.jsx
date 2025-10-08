"use client";
import { useState, useMemo } from "react";

const base90DayData = [
  {
    date: "Oct 5, 2025",
    amount: 320.0,
    method: "PayPal",
    status: "Completed",
    reference: "PYPL-78945612",
  },
  {
    date: "Sep 5, 2025",
    amount: 285.5,
    method: "PayPal",
    status: "Completed",
    reference: "PYPL-65412397",
  },
  {
    date: "Aug 5, 2025",
    amount: 420.75,
    method: "Bank Transfer",
    status: "Completed",
    reference: "BT-32147895",
  },
  {
    date: "Jul 5, 2025",
    amount: 375.0,
    method: "PayPal",
    status: "Completed",
    reference: "PYPL-98765432",
  },
  {
    date: "Jun 5, 2025",
    amount: 340.25,
    method: "PayPal",
    status: "Completed",
    reference: "PYPL-12345678",
  },
];

const data180 = [
  {
    date: "May 5, 2025",
    amount: 310.0,
    method: "Bank Transfer",
    status: "Completed",
    reference: "BT-55544433",
  },
  {
    date: "Apr 5, 2025",
    amount: 295.5,
    method: "PayPal",
    status: "Completed",
    reference: "PYPL-44422211",
  },
  {
    date: "Mar 5, 2025",
    amount: 450.75,
    method: "Bank Transfer",
    status: "Completed",
    reference: "BT-99988877",
  },
  ...base90DayData, 
];

const dataAll = [
  {
    date: "Feb 5, 2025",
    amount: 500.0,
    method: "Wire",
    status: "Completed",
    reference: "WIRE-00012345",
  },
  {
    date: "Jan 5, 2025",
    amount: 620.0,
    method: "Bank Transfer",
    status: "Completed",
    reference: "BT-66677788",
  },
  ...data180, 
];


const payoutDataByPeriod = {
  90: base90DayData,
  180: data180,
  all: dataAll,
};

const TABLE_HEADERS = ["Date", "Amount", "Method", "Status", "Reference"];

const PayoutHistoryTable = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("90");

  const currentData = useMemo(() => {
    return payoutDataByPeriod[selectedPeriod] || [];
  }, [selectedPeriod]);

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const StatusBadge = ({ status }) => {
    const colorClass =
      status === "Completed"
        ? "bg-emerald-100 text-emerald-700"
        : "bg-yellow-100 text-yellow-700";

    return (
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white p-6 rounded-[1rem] shadow-xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Payout History</h2>

        <div className="relative">
          <select
            value={selectedPeriod}
            onChange={handlePeriodChange}
            className="appearance-none pr-8 py-2 pl-3 border border-gray-300 rounded-lg text-sm font-medium focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer transition"
          >
            <option value="90">Last 90 Days</option>
            <option value="180">Last 6 Months</option>
            <option value="all">All Time</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Table Structure */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Head */}
          <thead className="bg-white">
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">
            {currentData.map((payout, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-150"
              >
                {/* Date */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {payout.date}
                </td>

                {/* Amount */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold">
                  ${payout.amount.toFixed(2)}
                </td>

                {/* Method */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {payout.method}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={payout.status} />
                </td>

                {/* Reference */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-mono">
                  {payout.reference}
                </td>
              </tr>
            ))}

            {/* Display message if no data */}
            {currentData.length === 0 && (
              <tr>
                <td
                  colSpan={TABLE_HEADERS.length}
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No payout history available for the selected period.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayoutHistoryTable;
