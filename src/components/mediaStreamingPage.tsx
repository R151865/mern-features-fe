import React, { useState } from 'react';

export interface StreamQuality {
  resolution: string;
  fps: number;
  bitrate: string;
}

export interface StreamState {
  isPlaying: boolean;
  activeQuality: StreamQuality;
}

const defaultQuality: StreamQuality = {
  resolution: '4K Ultra HD',
  fps: 60,
  bitrate: '15.4 Mbps',
};

const MediaStreamingPage: React.FC = () => {
  const [stream, setStream] = useState<StreamState>({
    isPlaying: false,
    activeQuality: defaultQuality,
  });

  const togglePlayback = (): void => {
    setStream((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center space-x-3">
        <span className="text-4xl">🎥</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Media Streaming Architecture</h1>
          <p className="text-xs text-slate-500">HLS Adaptive Stream & Data Chunk Management</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold text-slate-800">Stream Player & Segment Monitor</h2>
          <span className="text-xs text-slate-500 font-mono">
            {stream.activeQuality.resolution} @ {stream.activeQuality.fps}FPS
          </span>
        </div>
        <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden group">
          <div className="text-center text-slate-400 space-y-2">
            <button
              onClick={togglePlayback}
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center mx-auto text-white text-2xl group-hover:scale-110 transition-transform cursor-pointer"
            >
              {stream.isPlaying ? '❚❚' : '▶'}
            </button>
            <p className="text-xs">
              {stream.isPlaying ? 'Streaming HLS Chunks Live' : 'Click Play to Buffer Live Stream'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaStreamingPage;