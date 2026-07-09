import React from 'react';
import Pricing from './Pricing';
import './Services.css';

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-header">
          <div>
            <p className="section-label reveal">// SERVICES</p>
            <h2 id="services-heading" className="reveal reveal-delay-1">
              Websites<br />that work.
            </h2>
          </div>
          <p className="reveal reveal-delay-2">
            One project at a time — full attention, no assembly line.
            We take on a limited number of clients so nothing slips through.
          </p>
        </div>

        {/* Mount Pricing component representing the cards grid */}
        <Pricing />
      </div>
    </section>
  );
}
