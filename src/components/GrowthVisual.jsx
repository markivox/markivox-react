import React from 'react';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';

const metrics = [
  { label: 'Growth', value: '3.2x', icon: TrendingUp, color: '#6A3DF0' },
  { label: 'Leads', value: '850+', icon: Users, color: '#D946EF' },
  { label: 'ROAS', value: '285%', icon: Target, color: '#6A3DF0' },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function GrowthVisual() {
  return (
    <div className="relative" style={{ animation: 'floatUp 4s ease-in-out infinite' }}>
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6A3DF0]/10 to-[#D946EF]/10 rounded-3xl blur-2xl scale-105 pointer-events-none" />

      {/* Main dashboard card */}
      <div className="relative bg-white rounded-3xl shadow-[0_24px_60px_rgba(106,61,240,0.14)] border border-gray-100 p-6 overflow-hidden">

        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] rounded-t-3xl" />

        {/* Card header */}
        <div className="flex items-center justify-between mb-5 pt-1">
          <div>
            <p className="text-xs text-[#64748B] mb-0.5">Campaign Performance</p>
            <p className="text-sm font-bold text-[#1F1F1F] font-['Space_Grotesk']">Last 6 Months</p>
          </div>
          <div className="flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full">
            <TrendingUp size={12} />
            +127% Growth
          </div>
        </div>

        {/* SVG Chart */}
        <div className="relative mb-5">
          <svg viewBox="0 0 280 100" className="w-full h-28" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6A3DF0" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#D946EF" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6A3DF0" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="#F1F5F9" strokeWidth="1" />
            ))}

            {/* Area fill */}
            <path
              d="M0,88 C30,82 55,75 80,62 C105,49 120,40 150,28 C175,18 205,12 230,7 C248,4 265,5 280,3 L280,100 L0,100 Z"
              fill="url(#areaGrad)"
              style={{ animation: 'fadeInChart 1.2s ease-out forwards' }}
            />

            {/* Line */}
            <path
              d="M0,88 C30,82 55,75 80,62 C105,49 120,40 150,28 C175,18 205,12 230,7 C248,4 265,5 280,3"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 600,
                strokeDashoffset: 600,
                animation: 'drawChart 1.8s ease-out 0.3s forwards',
              }}
            />

            {/* Data points */}
            {[
              [0, 88], [80, 62], [150, 28], [230, 7], [280, 3],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3.5"
                fill="white"
                stroke="#6A3DF0"
                strokeWidth="2"
                style={{ opacity: 0, animation: `fadeIn 0.3s ease-out ${0.8 + i * 0.15}s forwards` }}
              />
            ))}

            {/* End glow dot */}
            <circle cx="280" cy="3" r="6" fill="#D946EF" fillOpacity="0.2" />
            <circle cx="280" cy="3" r="3.5" fill="#D946EF" />
          </svg>

          {/* Month labels */}
          <div className="flex justify-between px-1 mt-1">
            {months.map((m) => (
              <span key={m} className="text-[10px] text-[#94A3B8]">{m}</span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="bg-[#F9F7FF] rounded-2xl p-3 text-center"
                style={{ animation: `scaleIn 0.5s ease-out ${0.6 + i * 0.15}s both` }}
              >
                <Icon size={14} className="mx-auto mb-1.5" style={{ color: m.color }} />
                <div className="text-base font-bold font-['Space_Grotesk']" style={{ color: m.color }}>
                  {m.value}
                </div>
                <div className="text-[10px] text-[#64748B]">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating badge — top right */}
      <div
        className="absolute -top-3 -right-3 bg-gradient-to-r from-[#6A3DF0] to-[#D946EF] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg"
        style={{ animation: 'slideInRight 0.6s ease-out 1.4s both' }}
      >
        <Zap size={11} className="inline mr-1" />
        Performance-First
      </div>

      {/* Floating badge — bottom left */}
      <div
        className="absolute -bottom-3 -left-3 bg-white border border-gray-100 shadow-lg text-[11px] font-semibold px-3 py-1.5 rounded-full text-[#1F1F1F]"
        style={{ animation: 'slideInLeft 0.6s ease-out 1.6s both' }}
      >
        90+ Clients Growing
      </div>
    </div>
  );
}
