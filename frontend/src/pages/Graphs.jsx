// Graphs.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line,
  AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter,
  ComposedChart,
  ResponsiveContainer,
  Treemap,
  RadialBarChart, RadialBar,
  FunnelChart, Funnel,
  Sankey
} from 'recharts';

const Graphs = () => {
  const { id } = useParams();
  const [satellite, setSatellite] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/satellite/posts/${id}`, { withCredentials: true });
        const sat = res.data.post;
        if (!sat) return;

        setSatellite(sat);

        let data;
        if (sat.status === 'success') {
          data = [{ name: 'Success', value: 100 }];
        } else if (sat.status === 'failed') {
          data = [{ name: 'Failed', value: 100 }];
        } else {
          const success = Math.floor(Math.random() * 60) + 10;
          const fail = Math.floor(Math.random() * (100 - success));
          const sched = 100 - success - fail;
          data = [
            { name: 'Success', value: success },
            { name: 'Scheduled', value: sched },
            { name: 'Failed', value: fail },
          ];
        }
        setChartData(data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    fetchData();
  }, [id]);

  if (!satellite) return <div className="text-white p-6">Loading graphs...</div>;

  const composedData = chartData.map(d => ({ ...d, area: d.value, line: d.value, scatter: d.value }));
  const radarData = [
    { subject: 'Success', A: chartData.find(d => d.name === 'Success')?.value || 0, fullMark: 100 },
    { subject: 'Scheduled', A: chartData.find(d => d.name === 'Scheduled')?.value || 0, fullMark: 100 },
    { subject: 'Failed', A: chartData.find(d => d.name === 'Failed')?.value || 0, fullMark: 100 },
  ];

  const getColor = (name) => {
    if (name === 'Success') return '#00C49F';
    if (name === 'Scheduled') return '#FFBB28';
    return '#FF4D4F';
  };

  return (
    <div className="min-h-screen bg-black text-white py-6">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-center">{satellite.name} – All Graphs</h1>

      <div className="space-y-16 px-4 max-w-5xl mx-auto">
        <Section title="Pie Chart">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={chartData} dataKey="value" outerRadius={80} label>
                {chartData.map((entry, i) => <Cell key={i} fill={getColor(entry.name)} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Bar Chart">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value">
                {chartData.map((entry, i) => <Cell key={i} fill={getColor(entry.name)} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Line Chart">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={composedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="line" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Area Chart">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={composedData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="area" stroke="#00C49F" fill="#00C49F" />
            </AreaChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Composed Chart">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={composedData}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area dataKey="area" fill="#FFBB28" stroke="#FFBB28" />
              <Bar dataKey="value" barSize={20} fill="#FF4D4F" />
              <Line dataKey="line" stroke="#00C49F" />
              <Scatter dataKey="scatter" fill="#8884d8" />
            </ComposedChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Radar Chart">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Treemap">
          <ResponsiveContainer width="100%" height={300}>
            <Treemap data={chartData} dataKey="value" stroke="#fff" fill="#8884d8" />
          </ResponsiveContainer>
        </Section>

        <Section title="Radial Bar Chart">
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart innerRadius="10%" outerRadius="80%" data={chartData} startAngle={180} endAngle={0}>
              <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="value" />
              <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Funnel Chart">
          <ResponsiveContainer width="100%" height={300}>
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="value" data={chartData} isAnimationActive>
                {chartData.map((entry, index) => (
                  <Cell key={`funnel-${index}`} fill={getColor(entry.name)} />
                ))}
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-2xl mb-2">{title}</h2>
    {children}
  </div>
);

export default Graphs;
