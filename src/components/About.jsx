import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="manifesto" aria-labelledby="manifesto-heading">
      <div className="container">
        <div className="manifesto-inner">
          <blockquote className="reveal">
            "We started this after watching the same thing happen to business owners we know: they paid for a <em>'custom site,'</em> got a Tilda template with their logo swapped in, and found out only when a customer complained the booking form <em>didn't work on mobile</em>."
          </blockquote>

          <p className="manifesto-body reveal reveal-delay-1">
            So we build differently. Every site is coded from scratch — no page builders, no theme you're renting access to. You own the code.
            <br /><br />
            We take on 2-3 projects a month, not more. Not as a brand thing — we just can't personally check every line of code on five sites at once, and we're not going to stop checking.
            <br /><br />
            If you need something live by tomorrow, a template will get you there faster than we will. If you want a site that still works the way you designed it in a year, that's what we're for.
          </p>

          <p className="manifesto-sig reveal reveal-delay-2">— CORVUS FORGE STUDIO</p>
        </div>
      </div>
    </section>
  );
}
