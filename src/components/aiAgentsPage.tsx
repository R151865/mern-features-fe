import React, { useState } from 'react';

export type AgentRole = 'agent' | 'user' | 'system';

export interface ChatMessage {
  id: number;
  role: AgentRole;
  text: string;
  timestamp: string;
}

const AiAgentsPage: React.FC = () => {
  const [chat] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'agent',
      text: 'System initialized. How can I assist with context monitoring today?',
      timestamp: '10:00 AM',
    },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center space-x-3">
        <span className="text-4xl">🤖</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">AI-Driven Autonomous Agents</h1>
          <p className="text-xs text-slate-500">OpenAI API Context Engine & Autonomous Workflow Mesh</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-slate-800">Context-Aware Agent Console</h2>
        <div className="bg-slate-50 rounded-xl p-4 h-64 overflow-y-auto space-y-3">
          {chat.map((m) => (
            <div
              key={m.id}
              className={`p-3 rounded-xl text-xs max-w-md ${
                m.role === 'agent'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-200 text-slate-800 ml-auto'
              }`}
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className="font-semibold text-[10px] opacity-75">
                  {m.role === 'agent' ? 'OpenAI Agent' : 'User'}
                </span>
                <span className="text-[9px] opacity-60 font-mono">{m.timestamp}</span>
              </div>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiAgentsPage;