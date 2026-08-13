import React, { useState } from 'react';

export interface StorageMetric {
  label: string;
  value: string;
}

export interface StreamBufferState {
  progress: number;
  isUploading: boolean;
}

const storageMetrics: StorageMetric[] = [
  { label: 'Disk I/O Stream Rate', value: '450 MB/s' },
  { label: 'Multipart Chunk Allocator', value: '5 MB Chunks' },
];

const CloudStoragePage: React.FC = () => {
  const [streamState, setStreamState] = useState<StreamBufferState>({
    progress: 0,
    isUploading: false,
  });

  const simulateUpload = (): void => {
    setStreamState({ progress: 0, isUploading: true });
    const interval = setInterval(() => {
      setStreamState((prev) => {
        if (prev.progress >= 100) {
          clearInterval(interval);
          return { progress: 100, isUploading: false };
        }
        return { ...prev, progress: prev.progress + 20 };
      });
    }, 200);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center space-x-3">
        <span className="text-4xl">☁️</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Custom Cloud Storage Pipeline</h1>
          <p className="text-xs text-slate-500">Node.js Stream-based File & Chunk Storage</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-slate-800">Upload Test File</h2>
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center space-y-3">
            <p className="text-xs text-slate-500">Stream files directly through custom Node.js buffer pipeline</p>
            <button
              onClick={simulateUpload}
              disabled={streamState.isUploading}
              className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              Simulate Stream Upload
            </button>
          </div>
          {streamState.progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-600 font-semibold">
                <span>Streaming Chunk Buffer...</span>
                <span>{streamState.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                  style={{ width: `${streamState.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-sm font-bold text-slate-800">Node.js Storage Metrics</h2>
          <div className="space-y-3 text-xs">
            {storageMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-50 p-3 rounded-xl flex justify-between">
                <span className="text-slate-500">{metric.label}</span>
                <span className="font-bold text-slate-800">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudStoragePage;