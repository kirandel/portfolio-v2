import { useState, useEffect } from 'react';
import { Mail, Copy, Check, X, Linkedin, ExternalLink } from 'lucide-react';

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
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isAnimating ? 'blur(12px)' : 'blur(0px)',
          WebkitBackdropFilter: isAnimating ? 'blur(12px)' : 'blur(0px)',
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
        {/* Card */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: '#0a0a12',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.08)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:bg-white/10 text-white/40 hover:text-white/80"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h3 
                className="text-white mb-2"
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  letterSpacing: '-0.02em',
                }}
              >
                {"Let's talk"}
              </h3>
              <p 
                className="text-white/50"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                {"Open to new opportunities and collaborations."}
              </p>
            </div>

            {/* Email card */}
            <button
              onClick={handleCopy}
              className="group w-full p-4 rounded-xl transition-all duration-200 text-left mb-4"
              style={{
                background: copied ? '#10b981' : 'rgba(255,255,255,0.05)',
                border: '1px solid',
                borderColor: copied ? 'transparent' : 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className={`w-4 h-4 transition-colors duration-200 ${copied ? 'text-white' : 'text-white/50'}`} />
                  <div>
                    <p className={`text-xs mb-0.5 transition-colors duration-200 ${copied ? 'text-white/80' : 'text-white/40'}`}>
                      Email
                    </p>
                    <p className={`font-medium transition-colors duration-200 ${copied ? 'text-white' : 'text-white'}`} style={{ fontSize: '14px' }}>
                      {email}
                    </p>
                  </div>
                </div>
                <div className="transition-all duration-200">
                  {copied ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/30 group-hover:text-white/60" />
                  )}
                </div>
              </div>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-white/30">or connect via</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/kirandelneuville/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-white/80 font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:text-white"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.tandemchat.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl text-white/80 font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:text-white"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                TandemChat.ai
              </a>
            </div>

            {/* Availability indicator */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-white/40">
                Available for new roles
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
