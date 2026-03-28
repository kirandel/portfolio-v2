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
          backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isAnimating ? 'blur(12px)' : 'blur(0px)',
          WebkitBackdropFilter: isAnimating ? 'blur(12px)' : 'blur(0px)',
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[400px] transition-all duration-300 ease-out"
        style={{
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: '#ffffff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full transition-all duration-200 hover:bg-gray-100 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="px-8 pt-10 pb-8">

            {/* Icon */}
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: '#111827' }}
            >
              <Mail className="w-6 h-6 text-white" />
            </div>

            {/* Header */}
            <div className="mb-8">
              <h3
                className="text-gray-900 mb-2"
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  letterSpacing: '-0.03em',
                  lineHeight: '1.2',
                }}
              >
                {"Let's talk"}
              </h3>
              <p
                className="text-gray-500"
                style={{ fontSize: '16px', lineHeight: '1.5', letterSpacing: '-0.01em' }}
              >
                Always open to new opportunities and interesting conversations.
              </p>
            </div>

            {/* Email card */}
            <button
              onClick={handleCopy}
              className="group w-full p-4 rounded-2xl transition-all duration-200 text-left mb-3"
              style={{
                background: copied ? '#111827' : '#fafafa',
                border: '1px solid',
                borderColor: copied ? 'transparent' : '#f0f0f0',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: copied ? 'rgba(255,255,255,0.15)' : '#e8e8e8' }}
                  >
                    <Mail className={`w-5 h-5 ${copied ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-medium mb-0.5 ${copied ? 'text-white/50' : 'text-gray-400'}`}>
                      Email
                    </p>
                    <p
                      className={`font-semibold ${copied ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontSize: '15px', letterSpacing: '-0.01em' }}
                    >
                      {email}
                    </p>
                  </div>
                </div>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-150"
                  style={{ background: copied ? 'rgba(255,255,255,0.1)' : 'transparent' }}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                  )}
                </div>
              </div>
            </button>

            {/* Coffee card */}
            <div
              className="w-full p-4 rounded-2xl mb-8"
              style={{
                background: '#fafafa',
                border: '1px solid #f0f0f0',
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#e8e8e8' }}
                >
                  <Coffee className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5 text-gray-400">In San Francisco?</p>
                  <p className="font-semibold text-gray-900" style={{ fontSize: '15px', letterSpacing: '-0.01em' }}>
                    {"Let's grab a coffee!"}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">or connect via</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Social links */}
            <div className="flex gap-3 mb-7">
              <a
                href="https://www.linkedin.com/in/kirandelneuville/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: '#111827',
                  color: '#ffffff',
                  fontSize: '14px',
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
                className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: '#fafafa',
                  color: '#111827',
                  border: '1px solid #e5e5e5',
                  fontSize: '14px',
                  letterSpacing: '-0.01em',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                TandemChat.ai
              </a>
            </div>

            {/* Availability */}
            <div 
              className="flex items-center justify-center gap-2.5 py-3 rounded-full"
              style={{ background: '#f0fdf4' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span 
                className="font-medium"
                style={{ fontSize: '13px', color: '#16a34a', letterSpacing: '-0.01em' }}
              >
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
