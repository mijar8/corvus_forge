import React from 'react';
import './Stats.css';

const STATS_DATA = [
  { num: '7+', label: 'Projects delivered', delayClass: '' },
  { num: '100%', label: 'Client retention', delayClass: 'reveal-delay-1' },
  { num: '< 2s', label: 'Page load time', delayClass: 'reveal-delay-2' },
  { num: '€0', label: 'Ad spend — only results', delayClass: 'reveal-delay-3' }
];

export default function Stats() {
  return (
    <section id="stats" aria-label="Key numbers">
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className={`stat-item reveal ${stat.delayClass}`}>
              <div className="stat-num">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
