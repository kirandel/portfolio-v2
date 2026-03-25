import { useState, useEffect } from 'react';
import { Mail, Copy, Check, X, Linkedin, ExternalLink, Coffee } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

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
          backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
          WebkitBackdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md transition-all duration-300 ease-out"
        style={{
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          opacity: isAnimating ? 1 : 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glass card */}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,252,0.95) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)',
          }}
        >
          {/* Subtle gradient accent at top */}
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef)',
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-8 pt-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                }}
              >
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {"Let's talk"}
              </h3>
              <p className="text-gray-500 text-sm">
                {"I'm always open to new opportunities and collaborations."}
              </p>
            </div>

            {/* Email card - interactive */}
            <div className="mb-6">
              <button
                onClick={handleCopy}
                className="group w-full p-4 rounded-2xl transition-all duration-300 text-left"
                style={{
                  background: copied ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : '#f8f9fa',
                  border: '1px solid',
                  borderColor: copied ? 'transparent' : '#e5e7eb',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-xl transition-colors duration-300"
                      style={{
                        background: copied ? 'rgba(255,255,255,0.2)' : '#e5e7eb',
                      }}
                    >
                      <Mail className={`w-4 h-4 transition-colors duration-300 ${copied ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-medium mb-0.5 transition-colors duration-300 ${copied ? 'text-white/80' : 'text-gray-400'}`}>
                        Email
                      </p>
                      <p className={`font-medium transition-colors duration-300 ${copied ? 'text-white' : 'text-gray-900'}`}>
                        {email}
                      </p>
                    </div>
                  </div>
                  <div 
                    className="p-2 rounded-xl transition-all duration-300"
                    style={{
                      background: copied ? 'rgba(255,255,255,0.2)' : 'transparent',
                    }}
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    )}
                  </div>
                </div>
              </button>
              <p className={`text-center text-xs mt-2 transition-all duration-300 ${copied ? 'text-emerald-600 opacity-100' : 'text-gray-400 opacity-0'}`}>
                Copied to clipboard!
              </p>
            </div>

            {/* Coffee meetup card */}
            <div className="mb-6">
              <div 
                className="w-full p-4 rounded-2xl text-left"
                style={{
                  background: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-xl"
                      style={{
                        background: '#e5e7eb',
                      }}
                    >
                      <Coffee className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium mb-0.5 text-gray-400">
                        In SF?
                      </p>
                      <p className="font-medium text-gray-900">
                        Let's meet for coffee
                      </p>
                    </div>
                  </div>
                  <span className="text-lg">☕</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">or connect via</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://linkedin.com/in/kirandelneuville', '_blank')}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden flex-1 justify-center"
                style={{
                  border: '1px solid #e5e7eb',
                  background: '#ffffff',
                  color: '#111827',
                  cursor: 'pointer',
                }}
              >
                <span
                  className="inline-block rounded-full transition-all duration-300 group-hover:opacity-0"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#111827',
                    flexShrink: 0,
                  }}
                ></span>
                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
                  LinkedIn
                </span>
                <div
                  className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2"
                  style={{
                    background: '#0077b5',
                    color: '#ffffff',
                  }}
                >
                  <Linkedin size={18} strokeWidth={2.5} />
                  <span>LinkedIn</span>
                </div>
              </button>

              <button
                onClick={() => window.open('https://tandemchat.ai', '_blank')}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden flex-1 justify-center"
                style={{
                  border: '1px solid #1a1a1a',
                  background: '#1a1a1a',
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
              >
                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1">
                  TandemChat.ai
                </span>
                <div
                  className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2"
                  style={{
                    background: '#1a1a1a',
                    color: '#ffffff',
                  }}
                >
                  <span>TandemChat.ai</span>
                  <ExternalLink size={18} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* Availability badge */}
            <div className="mt-6 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-emerald-700 font-medium">
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
