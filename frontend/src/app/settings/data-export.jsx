import { FaDownload, FaFileArchive } from 'react-icons/fa';
const DataExport = () => {
	return (
		<div className="flex gap-5 max-dmd:flex-col ">
			<div className="w-[50%] max-dmd:w-full p-4 flex  flex-col gap-5 bg-white custom-shadow rounded-lg">
				<div className="flex items-center gap-2 flex-wrap border-b border-b-gray-200 pb-2">
					<FaDownload className="text-primary text-xl" />
					<h2 className="poppins font-semibold text-lg">Data export</h2>
				</div>
				<h3 className="text-sm text-gray-500 font-semibold">
					Export your affiliate data for external analysis
				</h3>
				<div className="flex gap-3 max-2xl:flex-col ">
					<div className="flex flex-col gap-2 w-1/2 max-2xl:w-full p-3 bg-[#f8f9fa] rounded-md  ">
						<h4 className="text-base poppins font-semibold leading-none">
							Performance Data
						</h4>
						<span className="text-sm font-medium text-gray-600 ">
							Clicks, conversions, and earnings data
						</span>
						<button className="bg-primary text-base text-white h-10 rounded-md flex items-center gap-2 justify-center font-semibold">
							<FaDownload />
							<span>Export CSV</span>
						</button>
					</div>
					<div className="flex flex-col gap-2 w-1/2 max-2xl:w-full p-3 bg-[#f8f9fa] rounded-md  ">
						<h4 className="text-base poppins font-semibold leading-none">
							Referral History
						</h4>
						<span className="text-sm font-medium text-gray-600 ">
							Complete history of your referrals
						</span>
						<button className="bg-primary text-base text-white h-10 rounded-md flex items-center gap-2 justify-center font-semibold">
							<FaDownload />
							<span>Export CSV</span>
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full p-3 bg-[#f8f9fa] rounded-md  ">
					<h4 className="text-base poppins font-semibold leading-none">
						Full Data Archive
					</h4>
					<span className="text-sm font-medium text-gray-600 ">
						Complete archive of all your affiliate data
					</span>
					<button className="bg-secondary text-base text-white h-12 rounded-md flex items-center gap-2 justify-center font-semibold">
						<FaFileArchive />
						<span>Request Data Archive</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default DataExport;

