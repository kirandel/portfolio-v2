import { ExternalLink } from 'lucide-react';

export function Footer() {
  const navigation = [
    { label: 'About', href: '#' },
    { label: 'Experience', href: '#' },
    { label: 'Kiran-GPT', href: '#' },
    { label: 'Education', href: '#' },
    { label: 'Resume', href: '#' },
  ];

  const externalLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Niche.ai', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <footer 
      className="w-screen -mx-6"
      style={{
        background: '#f5f5f7',
        borderTop: '1px solid #d2d2d7',
      }}
    >
      {/* Main footer content */}
      <div className="max-w-[980px] mx-auto px-6 py-5">
        {/* Navigation Links */}
        <div 
          className="flex flex-wrap gap-x-6 gap-y-2 pb-3 mb-3"
          style={{ borderBottom: '1px solid #d2d2d7' }}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-opacity hover:opacity-70"
              style={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#424245',
              }}
            >
              {item.label}
            </a>
          ))}
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-opacity hover:opacity-70 inline-flex items-center gap-1"
              style={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#424245',
              }}
            >
              {link.label}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          {/* Copyright and contact */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p style={{ fontSize: '12px', color: '#86868b' }}>
              Copyright © 2025 Kiran Delneuville. All rights reserved.
            </p>
            <a
              href="mailto:contact@kirandelneuville.com"
              className="transition-opacity hover:opacity-70"
              style={{
                fontSize: '12px',
                color: '#424245',
              }}
            >
              contact@kirandelneuville.com
            </a>
          </div>
          
          {/* Legal links */}
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-70"
                style={{
                  fontSize: '12px',
                  color: '#424245',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
