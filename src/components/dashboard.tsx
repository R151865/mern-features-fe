import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface DashboardFeature {
  id: string;
  icon: string;
  title: string;
  tag: string;
  badge: string;
  description: string;
  stats: string;
  path: string;
}

const features: DashboardFeature[] = [
  {
    id: 'auth',
    icon: '🔑',
    title: 'Enterprise Authentication',
    tag: 'Security & Auth',
    badge: 'OAuth 2.0 + JWT',
    description: 'Secure Google OAuth 2.0 + traditional JWT-based login with robust session handling.',
    stats: '99.99% Uptime',
    path: '/auth',
  },
  {
    id: 'websockets',
    icon: '⚡',
    title: 'Real-time Infrastructure',
    tag: 'Networking',
    badge: 'WebSockets',
    description: 'Scaling bi-directional communication using WebSockets for sub-millisecond updates.',
    stats: '< 15ms Latency',
    path: '/websockets',
  },
  {
    id: 'cloud-storage',
    icon: '☁️',
    title: 'Cloud Storage Pipelines',
    tag: 'Infrastructure',
    badge: 'Custom Node.js Engine',
    description: 'Real-time file uploads utilizing our custom Node.js server engine.',
    stats: '10GB/s Throughput',
    path: '/cloud-storage',
  },
  {
    id: 'media-streaming',
    icon: '🎥',
    title: 'Media Streaming',
    tag: 'Media & Data',
    badge: 'HLS / Chunking',
    description: 'Efficiently handling data streams and live media chunks.',
    stats: '4K Ultra-Low Latency',
    path: '/media-streaming',
  },
  {
    id: 'ai-agents',
    icon: '🤖',
    title: 'AI-Driven Agents',
    tag: 'Artificial Intelligence',
    badge: 'OpenAI API',
    description: 'Deep OpenAI API integration to build autonomous agents.',
    stats: 'Multi-Agent Mesh',
    path: '/ai-agents',
  },
  {
    id: 'performance',
    icon: '🏎️',
    title: 'Advanced Performance Tuning',
    tag: 'Optimization',
    badge: 'Redis + Worker Threads',
    description: 'Multi-layer Caching, Memory Leak Auditing, and Async Event Loops.',
    stats: '100/100 Lighthouse',
    path: '/performance',
  },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl shadow-blue-500/10">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white">
            System Overview & Suite
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Enterprise Feature Modules
          </h1>
          <p className="text-sm text-blue-100 leading-relaxed">
            Explore and control the core infrastructure powering your application.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            onClick={() => navigate(feature.path)}
            className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 bg-slate-100/80 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  {feature.icon}
                </span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {feature.badge}
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                {feature.tag}
              </span>
              <h2 className="text-lg font-bold text-slate-800 mt-0.5 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {feature.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                {feature.stats}
              </span>
              <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center">
                Launch Page &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;