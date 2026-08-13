import React from "react";

export interface AuthLog {
  id: string;
  type: "OAUTH" | "JWT" | "REFRESH" | "RBAC";
  message: string;
  statusColor: string;
}

export interface SecurityConfig {
  jwtStrategy: string;
  sessionMode: string;
  oauthProvider: string;
}

const authLogs: AuthLog[] = [
  {
    id: "1",
    type: "OAUTH",
    message: "[OAUTH_SUCCESS] User: alex.m@SB .com via Google Provider",
    statusColor: "text-green-400",
  },
  {
    id: "2",
    type: "JWT",
    message: "[JWT_ISSUED] Access Token generated (Exp: 15m)",
    statusColor: "text-blue-400",
  },
  {
    id: "3",
    type: "REFRESH",
    message: "[REFRESH_TOKEN] Rotated securely in HttpOnly Cookie",
    statusColor: "text-slate-400",
  },
  {
    id: "4",
    type: "RBAC",
    message: "[SESSION_CHECK] RBAC permissions validated: admin",
    statusColor: "text-amber-400",
  },
];

const securityParameters: SecurityConfig = {
  jwtStrategy: "RS256 Signature",
  sessionMode: "Stateless + Redis Blacklist",
  oauthProvider: "Google Cloud Console",
};

const AuthPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center space-x-3">
        <span className="text-4xl">🔑</span>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Enterprise Authentication
          </h1>
          <p className="text-xs text-slate-500">
            Google OAuth 2.0, JWT Tokens, and Session Governance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-slate-800">
            Active Authentication Logs
          </h2>
          <div className="bg-slate-900 text-slate-200 rounded-xl p-4 font-mono text-xs space-y-2 overflow-x-auto">
            {authLogs.map((log) => (
              <p key={log.id} className={log.statusColor}>
                {log.message}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-sm font-bold text-slate-800">
            Security Parameters
          </h2>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500">JWT Strategy</span>
              <span className="font-semibold text-slate-800">
                {securityParameters.jwtStrategy}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500">Session Mode</span>
              <span className="font-semibold text-green-600">
                {securityParameters.sessionMode}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-500">OAuth Provider</span>
              <span className="font-semibold text-slate-800">
                {securityParameters.oauthProvider}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
