
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, } from 'recharts';

const PerformanceGraph = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
       
        className='bg-white text-black p-2 rounded border border-gray-300'
      >
        <p className='text-sm font-semibold'>{label}</p>
        {payload.map((item, i) => (
          <p key={i} className='mt-[2px] text-sm'  style={{color: item.color }}>
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }

  return null; // nothing when not hovered
};
    return ( <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
      >
              <Legend verticalAlign='top' />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} fontWeight={600} />
          <YAxis fontSize={12} fontWeight={600} />
            <Tooltip content={<CustomTooltip/>}/>
            
          <Area type="monotone" dataKey="earnings" stroke="#3a56d4" strokeWidth={2} fill="#EBEFFD" />
        </AreaChart>
      </ResponsiveContainer> );
}
 
export default PerformanceGraph;