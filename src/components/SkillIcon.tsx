import React from 'react';
import { Brain } from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
}

// Inline SVG for NLP - represents natural language processing
const NLPIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" fillOpacity="0.8"/>
    <path d="M7 9h10M7 13h8M7 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="9" cy="11" r="1" fill="currentColor"/>
    <circle cx="15" cy="11" r="1" fill="currentColor"/>
  </svg>
);

// Inline SVG for RAG - represents retrieval-augmented generation
const RAGIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="9" cy="10" r="1" fill="currentColor"/>
    <circle cx="9" cy="14" r="1" fill="currentColor"/>
    <path d="M18 11l-2 2m2-2l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Inline SVG for Excel
const ExcelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#217346"/>
    <path d="M7 7h10M7 11h10M7 15h10M7 19h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 7v12" stroke="white" strokeWidth="2"/>
    <path d="M17 7v12" stroke="white" strokeWidth="2"/>
  </svg>
);

// Inline SVG for Power BI
const PowerBIIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#F2C811"/>
    <path d="M8 8h8v8H8V8z" stroke="#000" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke="#000" strokeWidth="2" fill="none"/>
    <path d="M9 9l6 6M15 9l-6 6" stroke="#000" strokeWidth="1.5"/>
  </svg>
);

// Inline SVG for Tableau
const TableauIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#E97627"/>
    <path d="M7 7h3v10H7V7zM11 7h3v10h-3V7zM15 7h3v10h-3V7z" fill="white"/>
  </svg>
);

const SkillIcon: React.FC<SkillIconProps> = ({ name, className = "w-5 h-5" }) => {
  // Official brand icons from Simple Icons CDN (no download needed!)
  const iconMap: { 
    [key: string]: { slug: string; color: string } 
  } = {
    'Python': { slug: 'python', color: '3776AB' },
    'JavaScript': { slug: 'javascript', color: 'F7DF1E' },
    'SQL': { slug: 'mysql', color: '4479A1' },
    'Bash': { slug: 'gnubash', color: '4EAA25' },
    'Machine Learning': { slug: 'scikitlearn', color: 'F7931E' },
    'Time-Series Forecasting': { slug: 'pandas', color: '150458' },
    'FastAPI': { slug: 'fastapi', color: '009688' },
    'Scikit-learn': { slug: 'scikitlearn', color: 'F7931E' },
    'TensorFlow': { slug: 'tensorflow', color: 'FF6F00' },
    'PyTorch': { slug: 'pytorch', color: 'EE4C2C' },
    'Next.js': { slug: 'nextdotjs', color: '000000' },
    'Git': { slug: 'git', color: 'F05032' },
    'Linux': { slug: 'linux', color: 'FCC624' },
    'Firebase': { slug: 'firebase', color: 'FFCA28' },
    'Jupyter': { slug: 'jupyter', color: 'F37626' },
  };

  // Custom inline SVG components (no download needed!)
  if (name === 'Machine Learning') {
    return <Brain className={className} style={{ color: '#EE4C2C' }} />;
  }

  if (name === 'NLP') {
    return <NLPIcon className={className} style={{ color: '#FFD21E' }} />;
  }

  if (name === 'RAG') {
    return <RAGIcon className={className} style={{ color: '#FFD21E' }} />;
  }

  if (name === 'Excel') {
    return <ExcelIcon className={className} />;
  }

  if (name === 'Power BI') {
    return <PowerBIIcon className={className} />;
  }

  if (name === 'Tableau') {
    return <TableauIcon className={className} />;
  }

  // Use Simple Icons CDN for all other skills
  const iconInfo = iconMap[name];

  if (!iconInfo) {
    return (
      <span className={`${className} text-gray-400 font-bold flex items-center justify-center bg-slate-700 rounded p-1`}>
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img 
      src={`https://cdn.simpleicons.org/${iconInfo.slug}/${iconInfo.color}`}
      alt={`${name} icon`}
      className={className}
      style={{ objectFit: 'contain' }}
      loading="lazy"
    />
  );
};

export default SkillIcon;