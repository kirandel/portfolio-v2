import { useState, useEffect } from 'react';
import { Mail, Copy, Check, X, Linkedin, ExternalLink, Coffee } from 'lucide-react';

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
          backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isAnimating ? 'blur(10px)' : 'blur(0px)',
          WebkitBackdropFilter: isAnimating ? 'blur(10px)' : 'blur(0px)',
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-sm transition-all duration-300 ease-out"
        style={{
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(16px)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: '#ffffff',
            boxShadow: '0 24px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="p-8">

            {/* Header */}
            <div className="mb-7">
              <h3
                className="text-gray-900 mb-1.5"
                style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  letterSpacing: '-0.025em',
                }}
              >
                {"Let's talk"}
              </h3>
              <p
                className="text-gray-500"
                style={{ fontSize: '15px', lineHeight: '1.5' }}
              >
                Open to new opportunities and collaborations.
              </p>
            </div>

            {/* Email card */}
            <button
              onClick={handleCopy}
              className="group w-full p-4 rounded-xl transition-all duration-200 text-left mb-3"
              style={{
                background: copied ? '#111827' : '#f9fafb',
                border: '1px solid',
                borderColor: copied ? 'transparent' : '#e5e7eb',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: copied ? 'rgba(255,255,255,0.1)' : '#e5e7eb' }}
                  >
                    <Mail className={`w-4 h-4 ${copied ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                  <div>
                    <p className={`text-xs mb-0.5 font-medium ${copied ? 'text-white/60' : 'text-gray-400'}`}>
                      Email
                    </p>
                    <p
                      className={`font-medium ${copied ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontSize: '14px', letterSpacing: '-0.01em' }}
                    >
                      {email}
                    </p>
                  </div>
                </div>
                <div>
                  {copied ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors duration-150" />
                  )}
                </div>
              </div>
            </button>

            {/* Coffee card */}
            <div
              className="w-full p-4 rounded-xl mb-7"
              style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#e5e7eb' }}
                >
                  <Coffee className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs mb-0.5 font-medium text-gray-400">In San Francisco?</p>
                  <p className="font-medium text-gray-900" style={{ fontSize: '14px', letterSpacing: '-0.01em' }}>
                    {"Let's grab a coffee!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">or connect via</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/in/kirandelneuville/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-gray-100"
                style={{
                  background: '#f3f4f6',
                  color: '#111827',
                  border: '1px solid #e5e7eb',
                  fontSize: '13px',
                  letterSpacing: '-0.01em',
                }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://www.tandemchat.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl font-medium text-sm transition-all duration-200 hover:bg-gray-100"
                style={{
                  background: '#f3f4f6',
                  color: '#111827',
                  border: '1px solid #e5e7eb',
                  fontSize: '13px',
                  letterSpacing: '-0.01em',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                TandemChat.ai
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-gray-400 font-medium">
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
