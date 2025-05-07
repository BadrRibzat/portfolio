'use client';

import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SkillsChart() {
  const data = {
    labels: ['JavaScript/TypeScript', 'Python', 'React/Next.js', 'Node.js/Flask', 'Databases', 'AI/ML', 'DevOps', 'Linux'],
    datasets: [
      {
        label: 'Technical Skills',
        data: [90, 85, 88, 82, 80, 75, 70, 85],
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(79, 70, 229, 1)',
        pointBorderColor: '#fff',
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: 'rgba(0, 0, 0, 0.5)',
        },
        pointLabels: {
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          },
          color: 'rgba(0, 0, 0, 0.8)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Proficiency</h3>
      <div className="h-80">
        <Radar data={data} options={options} />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>My skills span across full-stack development with specialized expertise in AI integration.</p>
      </div>
    </div>
  );
}
