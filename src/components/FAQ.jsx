import React, { useState } from 'react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    q: 'Why clean code instead of WordPress or Tilda?',
    a: "WordPress and Tilda sites are bloated with unnecessary plugins and template code. We write everything by hand in pure HTML/CSS/JS. Our sites load in under 2 seconds, score 100% on Google PageSpeed, and have no vulnerable plugin chain to exploit. You own the code — no subscriptions, no lock-in.",
    delayClass: ''
  },
  {
    q: 'How does the auto-booking work?',
    a: 'Depends on what fits your business. Some clients want a custom Telegram bot for bookings, others prefer Calendly or Cal.com — we set up whichever works best for your customers. Either way, it connects directly to the site, no manual follow-ups.',
    delayClass: 'reveal-delay-1'
  },
  {
    q: 'How long does it take?',
    a: 'Typically 7 to 14 days from brief to launch. We run one project at a time, so your task gets our full attention — not a slot between 12 other clients. Timeline depends on scope and how fast you provide content (text, photos).',
    delayClass: 'reveal-delay-2'
  },
  {
    q: 'Can I edit the content myself after launch?',
    a: "Yes. We build clean, commented code and can set up a simple editing system. You can change prices, descriptions, and photos without risking the design or code structure. For ongoing updates, our Support + SEO plan covers it from €29/mo.",
    delayClass: 'reveal-delay-3'
  },
  {
    q: 'What\'s included in Support + SEO at €29/mo?',
    a: 'Blazing-fast hosting, regular content updates, ongoing speed optimization, local SEO management (Google Business, citations), and monthly performance reports. Your site stays live, fast, and visible — always.',
    delayClass: ''
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-header">
          <div>
            <p className="section-label reveal">// FAQ</p>
            <h2 id="faq-heading" className="reveal reveal-delay-1">
              Common<br />questions.
            </h2>
          </div>
        </div>

        <div className="faq-list" role="list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className={`faq-item reveal ${item.delayClass} ${isOpen ? 'open' : ''}`} role="listitem">
                <button 
                  className="faq-question" 
                  aria-expanded={isOpen} 
                  id={`faq-q-${idx}`}
                  onClick={() => toggleItem(idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true"></span>
                </button>
                <div 
                  className="faq-answer" 
                  id={`faq-a-${idx}`} 
                  role="region" 
                  aria-labelledby={`faq-q-${idx}`}
                  style={{
                    maxHeight: isOpen ? '200px' : '0', /* Height limit suited for answer text lengths */
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-inner">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
