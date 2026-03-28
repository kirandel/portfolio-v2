import { useState, useEffect } from 'react';
import { Sparkles, Copy, Check, X, ExternalLink, Coffee } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const email = 'hello@kirandelneuville.com';

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      setIsAnimating(false);
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
          WebkitBackdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm transition-all duration-300 ease-out"
        style={{
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: '#ffffff',
            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full transition-all duration-200 hover:bg-gray-100 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="px-6 pt-8 pb-6">

            {/* Icon */}
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: '#f3f4f6' }}
            >
              <Sparkles className="w-5 h-5 text-gray-700" />
            </div>

            {/* Header */}
            <div className="mb-6">
              <h3
                className="text-gray-900 mb-1.5"
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                }}
              >
                {"Let's talk"}
              </h3>
              <p
                className="text-gray-500"
                style={{ fontSize: '14px', lineHeight: '1.5', letterSpacing: '-0.01em' }}
              >
                Always open to opportunities and collaborations.
              </p>
            </div>

            {/* Email card */}
            <button
              onClick={handleCopy}
              className="group w-full p-4 rounded-xl transition-all duration-200 text-left mb-2"
              style={{
                background: copied ? '#111827' : '#ffffff',
                border: '1.5px solid',
                borderColor: copied ? 'transparent' : '#e5e7eb',
                boxShadow: copied ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: copied ? 'rgba(255,255,255,0.12)' : '#f3f4f6' }}
                  >
                    <Mail className={`w-4 h-4 ${copied ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-xs mb-0.5 ${copied ? 'text-white/50' : 'text-gray-400'}`}>Email</p>
                    <p
                      className={`font-medium truncate ${copied ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontSize: '13px', letterSpacing: '-0.01em' }}
                    >
                      {email}
                    </p>
                  </div>
                </div>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0" />
                )}
              </div>
            </button>

            {/* Coffee card */}
            <div
              className="w-full p-4 rounded-xl mb-6"
              style={{
                background: '#ffffff',
                border: '1.5px solid #e5e7eb',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#f3f4f6' }}
                >
                  <Coffee className="w-4 h-4 text-gray-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs mb-0.5 text-gray-400">In San Francisco?</p>
                  <p className="font-medium text-gray-900" style={{ fontSize: '13px', letterSpacing: '-0.01em' }}>
                    {"Let's grab a coffee!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-300 font-medium tracking-wide uppercase">also find me at</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-1.5 mb-5">
              {[
                { href: 'https://www.linkedin.com/in/kirandelneuville/', label: 'LinkedIn' },
                { href: 'https://www.tandemchat.ai', label: 'TandemChat.ai' },
                { href: 'https://www.truenorthposters.com', label: 'True North Posters' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-150 hover:bg-gray-50 group"
                  style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#374151',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gray-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div 
              className="flex items-center justify-center gap-2 py-2.5 rounded-full"
              style={{ background: '#f0fdf4' }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span 
                className="font-medium"
                style={{ fontSize: '12px', color: '#16a34a', letterSpacing: '-0.01em' }}
              >
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
