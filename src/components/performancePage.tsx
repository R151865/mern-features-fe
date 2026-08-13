import React from 'react';

export interface PerformanceMetric {
  id: string;
  score: string;
  label: string;
  colorClass: string;
}

const metrics: PerformanceMetric[] = [
  {
    id: 'lighthouse',
    score: '100 / 100',
    label: 'Lighthouse Performance Score',
    colorClass: 'text-blue-600',
  },
  {
    id: 'redis',
    score: '0.02ms',
    label: 'Redis Cache Hit Response',
    colorClass: 'text-green-600',
  },
  {
    id: 'heap',
    score: '0%',
    label: 'Memory Leak Heap Growth',
    colorClass: 'text-indigo-600',
  },
];

const PerformancePage: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center space-x-3">
        <span className="text-4xl">🏎️</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Advanced Performance Tuning</h1>
          <p className="text-xs text-slate-500">Multi-layer Caching, Memory Leak Auditing, & Optimization Layer</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <div key={metric.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-2">
            <span className={`text-3xl font-extrabold ${metric.colorClass}`}>{metric.score}</span>
            <p className="text-xs font-semibold text-slate-700">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformancePage;