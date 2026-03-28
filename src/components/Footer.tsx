import { Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const navigation = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'KiranGPT', id: 'kiran-gpt' },
    { label: 'Education', id: 'education' },
    { label: 'Resume', id: 'download-cv' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const externalLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kirandelneuville/' },
    { label: 'TandemChat.ai', href: 'https://www.tandemchat.ai' },
    { label: 'True North Posters', href: 'https://www.truenorthposters.com' },
  ];

  return (
    <footer 
      className="w-screen relative overflow-hidden -mx-6"
      style={{
        background: '#0a0a12',
        paddingTop: '80px',
        paddingBottom: '0',
      }}
    >
      {/* Ambient glow elements */}
      <div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #667eea 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div 
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f093fb 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div 
        className="absolute bottom-1/4 left-1/2 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #4facfe 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative curved lines */}
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-8"
        style={{ pointerEvents: 'none' }}
      >
        <path
          d="M 0 150 Q 300 50 600 150 T 1200 150"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.1"
        />
        <path
          d="M 200 300 Q 500 200 800 300 T 1400 300"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.08"
        />
        <path
          d="M 100 450 Q 400 350 700 450 T 1300 450"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.06"
        />
      </svg>

      {/* Main footer content */}
      <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-[120px] relative z-10 pb-16">
        {/* Four-column layout with more space for first column */}
        <div           className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr_1fr] gap-8 lg:gap-0">
          {/* COLUMN 1: Identity Block */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 
                className="text-white mb-3"
                style={{
                  fontSize: 'clamp(22px, 5vw, 30px)',
                  fontWeight: '600',
                  letterSpacing: '-0.01em',
                }}
              >
                Kiran Delneuville
              </h3>
              <p 
                className="text-white mb-5"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  opacity: 0.7,
                }}
              >
                Product manager building zero-to-one systems at the intersection of marketplaces, AI, and design.
              </p>
            </div>
          </div>

          {/* SPACER COLUMN */}
          <div className="hidden lg:block" />

          {/* COLUMN 2: Site Navigation */}
          <div className="flex flex-col gap-6">
            <h4 
              className="text-white"
              style={{
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-white transition-all duration-200 hover:opacity-100 group inline-flex items-center w-fit"
                  style={{
                    fontSize: '16px',
                    opacity: 0.75,
                  }}
                >
                  {item.label}
                  <span 
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ fontSize: '14px' }}
                  >
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: External Links */}
          <div className="flex flex-col gap-6">
            <h4 
              className="text-white"
              style={{
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Elsewhere
            </h4>
            <nav className="flex flex-col gap-3">
              {externalLinks.map((link) => {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white transition-all duration-200 hover:opacity-100 inline-flex items-center gap-2 w-fit"
                    style={{
                      fontSize: '16px',
                      opacity: 0.75,
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* COLUMN 4: Contact + CTA */}
          <div className="flex flex-col gap-6">
            <h4 
              className="text-white"
              style={{
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Get in touch
            </h4>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:hello@kirandelneuville.com"
                className="text-white transition-opacity duration-200 hover:opacity-100 inline-flex items-center gap-2 break-all"
                style={{
                  fontSize: '16px',
                  opacity: 0.9,
                }}
              >
                <Mail className="w-4 h-4" />
                hello@kirandelneuville.com
              </a>
              
              {/* Availability */}
              <p 
                className="text-white"
                style={{
                  fontSize: '14px',
                  opacity: 0.65,
                  lineHeight: '1.6',
                  maxWidth: '280px',
                }}
              >
                Open to new roles and conversations about building new products and early-stage ideas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div 
              className="relative z-10 mt-8 md:mt-16"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div className="max-w-[1536px] mx-auto px-4 md:px-8 lg:px-[120px] py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p 
              className="text-white text-center sm:text-left"
              style={{
                fontSize: '14px',
                opacity: 0.6,
              }}
            >
              © 2026 Kiran Delneuville
            </p>
          </div>
        </div>
      </div>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />
    </footer>
  );
}
