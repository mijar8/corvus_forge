import React from 'react';
import './Marquee.css';

const TAGS = [
  'LANDING PAGES',
  'AUTO BOOKING',
  'LOCAL SEO',
  'CLEAN CODE',
  '7-14 DAYS',
  '100% PAGESPEED',
  'ZERO WORDPRESS',
  'MOBILE FIRST'
];

export default function Marquee() {
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {/* First copy */}
        {TAGS.map((tag, idx) => (
          <React.Fragment key={`first-${idx}`}>
            <span className="ticker-item">{tag}</span>
            <span className="ticker-sep">·</span>
          </React.Fragment>
        ))}
        {/* Duplicate copy for loop continuity */}
        {TAGS.map((tag, idx) => (
          <React.Fragment key={`second-${idx}`}>
            <span className="ticker-item">{tag}</span>
            <span className="ticker-sep">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
