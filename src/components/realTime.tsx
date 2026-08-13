import React, { useState } from 'react';

export interface SocketMessage {
  id: number;
  text: string;
  time: string;
  status: 'CONNECTED' | 'DISCONNECTED' | 'PENDING';
}

const RealtimePage: React.FC = () => {
  const [messages, setMessages] = useState<SocketMessage[]>([
    { id: 1, text: 'WebSocket Handshake Established', time: '10:00:01 AM', status: 'CONNECTED' },
    { id: 2, text: 'Joined Channel #system-events', time: '10:00:02 AM', status: 'CONNECTED' },
  ]);

  const triggerEvent = (): void => {
    const newMessage: SocketMessage = {
      id: Date.now(),
      text: 'PING Broadcast Received from Edge Node',
      time: new Date().toLocaleTimeString(),
      status: 'CONNECTED',
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">⚡</span>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Real-time Infrastructure</h1>
            <p className="text-xs text-slate-500">WebSocket Engine & Event Broadcast System</p>
          </div>
        </div>
        <button
          onClick={triggerEvent}
          className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow-md transition-all cursor-pointer"
        >
          Emit Test Event
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-slate-800">Live Socket Buffer</span>
          <span className="inline-flex items-center text-[10px] font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
            ● Connected (ws://node-cluster:8080)
          </span>
        </div>
        <div className="space-y-2">
          {messages.map((m) => (
            <div key={m.id} className="flex justify-between items-center bg-slate-50 p-3 rounded-xl text-xs">
              <span className="font-medium text-slate-700">{m.text}</span>
              <span className="text-slate-400 font-mono text-[10px]">{m.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealtimePage;