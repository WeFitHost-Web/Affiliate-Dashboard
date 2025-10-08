'use client'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const LinkPerformanceGraph = ({data}) => {
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
  return (
    <ResponsiveContainer width="100%" height="100%"  >
      <BarChart
        width={500}
        height={300}
        data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}


      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} fontWeight={600}  padding={{ left: 0, right: 0 }}/>
        <YAxis fontSize={12} fontWeight={600}/>
        <Tooltip cursor={ false} content={<CustomTooltip/>} />
        <Legend verticalAlign='top'/>
        <Bar dataKey="clicks" fill="#4361ee" activeBar={<Rectangle fill="#3a56d4" />} />
        <Bar dataKey="conversions" fill="#06d6a0" activeBar={<Rectangle fill="hsl(164.42 94.55% 30.14%)"  />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LinkPerformanceGraph;
