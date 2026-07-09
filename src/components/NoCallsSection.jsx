import React from 'react';
import './NoCallsSection.css';

export default function NoCallsSection() {
  return (
    <section id="collab-process" aria-labelledby="collab-heading">
      <div className="container">
        <div className="collab-inner reveal">
          <p className="section-label">// COLLABORATION</p>
          <h2 id="collab-heading">No calls. One chat in Telegram.</h2>
          <p className="collab-text">
            You send the brief once. We design, build, and send a link to review — all in the same thread. If it's right, we ship it. If not, we adjust. That's the whole process.
          </p>
        </div>
      </div>
    </section>
  );
}
