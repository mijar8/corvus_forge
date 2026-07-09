import React from 'react';
import './Pricing.css';

const PRICING_PLANS = [
  {
    num: '01',
    title: 'BUSINESS CARD SITE',
    desc: "Concise, lightning-fast site for specialists: lawyers, doctors, coaches, craftsmen. Speaks for you before you do.",
    price: 'from €199',
    delayClass: ''
  },
  {
    num: '02',
    title: 'PREMIUM LANDING',
    desc: "Interactive design, full responsiveness, contact form and automated booking calendar (Calendly / Cal.com).",
    price: 'from €299',
    delayClass: 'reveal-delay-1'
  },
  {
    num: '03',
    title: 'MULTI-PAGE SITE',
    desc: "Multi-section websites for business, portfolio, catalog or services. SEO-optimized from day one.",
    price: 'from €499',
    delayClass: 'reveal-delay-2'
  },
  {
    num: '04',
    title: 'SUPPORT + SEO',
    desc: "Blazing-fast hosting, content updates, speed optimization, local SEO and monthly reports. Always on, always current.",
    price: 'from €29 / mo',
    delayClass: 'reveal-delay-3'
  }
];

export default function Pricing() {
  return (
    <div className="services-grid">
      {PRICING_PLANS.map((plan, idx) => (
        <div key={idx} className={`service-card reveal ${plan.delayClass}`}>
          <div className="service-num">{plan.num}</div>
          <h3>{plan.title}</h3>
          <p>{plan.desc}</p>
          <div className="service-price">{plan.price}</div>
        </div>
      ))}
    </div>
  );
}
