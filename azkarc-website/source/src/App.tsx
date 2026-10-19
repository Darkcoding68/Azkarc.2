import { useEffect, useState } from 'react';
import coinArtwork from '@assets/ChatGPT_Image_19_Eki_2026_03_21_41_1792370578356.png';

const navItems = [
  ['About AZK', '#about'],
  ['The creator', '#creator'],
  ['Project notes', '#details'],
] as const;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Azkarc (AZK) — A project by Burak Azkar';
    const description =
      'Meet Azkarc (AZK), a crypto coin project created by Burak Azkar, a 16-year-old creator in Türkiye. Learn the story and read important project notes.';
    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      element?.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', 'Azkarc (AZK) — A project by Burak Azkar');
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', coinArtwork);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', 'Azkarc (AZK) — A project by Burak Azkar');
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', coinArtwork);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="azk-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Azkarc home">
          <img src={coinArtwork} alt="" width="34" height="34" />
          <span>AZKARC<small>AZK PROJECT</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <span className="header-note">AN INDEPENDENT PROJECT INTRODUCTION</span>
        <button
          className="mobile-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '≡'}
        </button>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">A personal crypto coin project</div>
            <h1 id="hero-title">A project<br />with a <span>spark.</span></h1>
            <p className="hero-intro">
              <strong>Azkarc, or AZK,</strong> is a crypto coin project created by
              Burak Azkar, a 16-year-old guy in Türkiye. This is its introduction:
              the idea, the person behind it, and the facts we can share.
            </p>
            <div className="hero-actions">
              <a className="text-link" href="#about">Get to know AZK <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#creator">Meet its creator <span aria-hidden="true">↘</span></a>
            </div>
            <div className="hero-facts" aria-label="Project overview">
              <div className="hero-fact"><b>AZK</b><small>Project name</small></div>
              <div className="hero-fact"><b>Burak Azkar</b><small>Creator</small></div>
              <div className="hero-fact"><b>Türkiye</b><small>Based in</small></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Azkarc electric blue coin artwork">
            <div className="coin-aura" />
            <div className="coin-orbit" />
            <img className="coin-image" src={coinArtwork} alt="Luminous electric-blue Azkarc coin emblem" width="1024" height="1024" fetchPriority="high" />
            <span className="hero-coordinate">AZK / PERSONAL PROJECT / TR</span>
            <span className="visual-caption">Azkarc · AZK</span>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {[0, 1].map((copy) => (
              <span key={copy}>
                AZKARC PROJECT <i /> CREATED BY BURAK AZKAR <i /> AN INTRODUCTION, NOT AN OFFER <i /> TÜRKİYE <i /> AZK
              </span>
            ))}
          </div>
        </div>

        <section className="section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-topline"><span>01 / The project</span><span>What AZK is — and what we know</span></div>
          <div className="section-heading">
            <h2 id="about-title">A name, an idea,<br />a place to begin.</h2>
            <p>
              Azkarc (AZK) is a crypto coin project started by Burak Azkar. The
              project is introduced here in plain terms, without promises or
              assumptions about what may come next.
            </p>
          </div>
          <div className="story-grid">
            <div className="story-art">
              <img src={coinArtwork} alt="The glowing blue Azkarc coin artwork" width="1024" height="1024" loading="lazy" />
              <span className="art-label">AZK / PROJECT MARK</span>
            </div>
            <article className="story-copy">
              <span className="quote-mark" aria-hidden="true">“</span>
              <h3>It begins with a creator willing to put an idea out into the world.</h3>
              <p>
                AZK is the name of Burak’s crypto coin project. This page is a
                straightforward introduction to that project and its creator.
                No technical or commercial details are stated here unless they
                can be confirmed.
              </p>
              <div className="story-signature"><span>Burak Azkar</span><small>CREATOR OF AZK</small></div>
            </article>
          </div>
        </section>

        <section className="facts-section" id="details" aria-labelledby="details-title">
          <div className="section-wrap facts-inner">
            <div className="facts-intro">
              <div className="eyebrow">Clarity over claims</div>
              <h2 id="details-title">Known facts.<br />Nothing dressed up.</h2>
              <p>
                A coin name is not a complete specification. Here is what this
                introduction can responsibly tell you today.
              </p>
            </div>
            <div>
              <div className="facts-list">
                <div className="fact-row"><span>Project</span><b>Azkarc</b></div>
                <div className="fact-row"><span>Short name</span><b>AZK</b></div>
                <div className="fact-row"><span>Created by</span><b>Burak Azkar</b></div>
                <div className="fact-row"><span>Creator</span><b>16-year-old guy</b></div>
                <div className="fact-row"><span>From</span><b>Türkiye</b></div>
                <div className="fact-row"><span>Availability</span><b className="fact-caution">Not stated here</b></div>
              </div>
              <div className="not-claims">
                No network, contract address, supply, utility, listing, roadmap,
                or market information is provided on this page.
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap creator" id="creator" aria-labelledby="creator-title">
          <div className="section-topline"><span>02 / The creator</span><span>Behind the initials</span></div>
          <div className="creator-panel">
            <div className="creator-main">
              <div className="eyebrow">Made by a person, not a promise</div>
              <h2 id="creator-title">Meet Burak<br />Azkar.</h2>
              <p>
                Burak is a 16-year-old guy in Türkiye and the creator of the
                Azkarc (AZK) crypto coin project. This project introduction keeps
                the focus on its real starting point: one young creator and an idea.
              </p>
            </div>
            <div className="creator-fact"><strong>16</strong><span>Creator’s age</span></div>
          </div>
        </section>

        <section className="section-wrap caution" aria-labelledby="risk-title">
          <div className="caution-card">
            <div className="caution-icon" aria-hidden="true">!</div>
            <div>
              <h2 id="risk-title">A note on crypto risk</h2>
              <p>
                Crypto assets can be highly risky and may lose value. This page
                is informational, not financial advice and not an offer to buy
                or sell. Project details and any availability should be
                independently verified through reliable sources before taking
                any action. No purchase option is presented here.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={coinArtwork} alt="" width="23" height="23" loading="lazy" /> <span>Azkarc / AZK</span></div>
        <div className="footer-end">A project introduction by Burak Azkar<br />© {new Date().getFullYear()} · For information only</div>
      </footer>
    </div>
  );
}

export default App;
