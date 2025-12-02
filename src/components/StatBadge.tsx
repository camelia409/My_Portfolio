import { ReactNode } from 'react';

interface StatBadgeProps {
  label: string;
  value: string;
  icon?: ReactNode;
  gradient?: string;
  delay?: number;
}

const StatBadge = ({ 
  label, 
  value, 
  icon, 
  gradient = 'from-cyan-400 to-purple-400',
  delay = 0
}: StatBadgeProps) => {
  return (
    <div
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 sm:p-4 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 w-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-2">
        {/* Icon */}
        {icon && (
          <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${gradient} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            {icon}
          </div>
        )}
        
        {/* Value */}
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          {value}
        </div>
        
        {/* Label */}
        <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wide leading-tight text-center px-1">
          {label}
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default StatBadge;

