import React from 'react';
import './Process.css';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'BRIEF',
    desc: 'A no-pressure conversation. We listen, ask sharp questions, understand your audience and what you need the site to do.',
    delayClass: ''
  },
  {
    num: '02',
    title: 'STRATEGY',
    desc: "We map your brand, your competition, and design a custom roadmap. No generic solutions — every decision is intentional.",
    delayClass: 'reveal-delay-1'
  },
  {
    num: '03',
    title: 'BUILD',
    desc: "We design and code simultaneously, showing you previews as we go. Clean HTML/CSS/JS — no bloated builders, no plugin hell.",
    delayClass: 'reveal-delay-2'
  },
  {
    num: '04',
    title: 'LAUNCH',
    desc: 'Deploy, verify, done. Your site loads in under 2 seconds, scores 100 on PageSpeed, and starts booking clients from day one.',
    delayClass: 'reveal-delay-3'
  }
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="container">
        <div className="process-header">
          <div>
            <p className="section-label reveal">// THE FORGE PROCESS</p>
            <h2 id="process-heading" className="reveal reveal-delay-1">
              One client.<br />One focus.<br />Every time.
            </h2>
          </div>
          <div className="process-header-right">
            <p className="reveal reveal-delay-2">
              We don't sprint through projects. We work on one at a time —
              methodically, with full focus on your outcome.
            </p>
            <a href="https://t.me/gestalter8" className="btn-ghost reveal reveal-delay-3" target="_blank" rel="noopener noreferrer" id="process-cta-btn">
              GET YOUR QUOTE →
            </a>
          </div>
        </div>

        <div className="process-steps">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className={`process-step reveal ${step.delayClass}`}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
