import React from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, XAxis, YAxis,ResponsiveContainer,Tooltip, CartesianGrid, } from 'recharts';


const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
    const {
        x, y, width, height,payload
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={payload.color} />;
};


const renderCustomBarLabel = ({ x, y, width,  value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
}

const Graph = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="md:max-w-10/12 mx-auto my-10">
            <h2 className="text-center text-xl font-semibold mb-4">Book Pages Chart</h2>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="bookName" tick={{ fontSize: 12}} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalPages"  shape={<TriangleBar />} label ={renderCustomBarLabel} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph; 