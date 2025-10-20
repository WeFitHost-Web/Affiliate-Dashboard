"use client"
import React, { useState, useMemo } from 'react';


const fullChartData = [
    { name: 'Nov', earnings: 450 },
    { name: 'Dec', earnings: 490 },
    { name: 'Jan', earnings: 380 },
    { name: 'Feb', earnings: 320 },
    { name: 'Mar', earnings: 400 },
    { name: 'Apr', earnings: 470 },
    { name: 'May', earnings: 420 },
    { name: 'Jun', earnings: 340 },
    { name: 'Jul', earnings: 370 },
    { name: 'Aug', earnings: 315 },
    { name: 'Sep', earnings: 285 },
    { name: 'Oct', earnings: 500 },
];

const MAX_EARNINGS = 500;
const Y_AXIS_LABELS = [500, 450, 400, 350, 300, 250, 200, 150, 100, 50, 0];

const EarningsChart = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('6M'); // Default to 6 months

    const chartData = useMemo(() => {
        let count;
        switch (selectedPeriod) {
            case '3M':
                count = 3;
                break;
            case '12M':
                count = 12;
                break;
            case '6M':
            default:
                count = 6;
        }
        return fullChartData.slice(-count);
    }, [selectedPeriod]);

    
    const handlePeriodChange = (event) => {
        setSelectedPeriod(event.target.value);
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            {/* Header and Dropdown */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                    Earnings History
                </h2>
                <select 
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 focus:ring-teal-500 focus:border-teal-500"
                >
                    <option value="3M">Last 3 Months</option>
                    <option value="6M">Last 6 Months</option>
                    <option value="12M">Last Year</option>
                </select>
            </div>

            {/* Legend */}
            <div className="flex justify-center mb-6">
                <span className="flex items-center text-sm font-medium text-gray-700">
                    <span className="w-3 h-3 bg-teal-400 rounded-sm mr-2"></span>
                    Earnings
                </span>
            </div>

       
            <div className="flex relative w-full h-80">
                
               
                <div className="flex flex-col justify-between h-full w-12 pr-2 text-right text-xs text-gray-500 border-r border-gray-200">
                    {Y_AXIS_LABELS.map((label, index) => (
                        <span key={index} className="relative">
                            {label}
                            
                            {index < Y_AXIS_LABELS.length - 1 && (
                                <hr className="absolute top-1/2 right-0 w-full border-t border-dashed border-gray-200" />
                            )}
                        </span>
                    ))}
                </div>

                <div className="flex items-end h-full flex-grow pl-4 pb-0 justify-around">
                    {chartData.map((data, index) => {
                        const heightPercent = (data.earnings / MAX_EARNINGS) * 100;
                        
                        return (
                            <div 
                                key={index} 
                                className={`flex flex-col items-center w-[${100 / chartData.length}%] h-full justify-end group transition-all duration-300`}
                                style={{ width: `${100 / chartData.length}%` }} // Set exact width dynamically
                            >
                                <div 
                                    style={{ height: `${heightPercent}%` }} 
                                    className="w-4/5 bg-teal-400 rounded-t-md transition-all duration-300 hover:bg-teal-500 cursor-pointer shadow-md"
                                >
                                </div>
                                <div className="mt-2 text-xs font-medium text-gray-600">
                                    {data.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default EarningsChart;
