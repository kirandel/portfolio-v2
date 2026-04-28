interface SuggestedQuestionsProps {
  title: string;
  hint: string;
  questions: string[];
  onSelect: (question: string) => void;
}

export function SuggestedQuestions({ title, hint, questions, onSelect }: SuggestedQuestionsProps) {
  return (
    <div
      className="mb-0 rounded-2xl p-4 sm:p-5 relative overflow-hidden"
      style={{
        background: 'linear-gradient(140deg, rgba(18,22,30,0.96) 0%, rgba(25,33,46,0.88) 65%, rgba(18,22,30,0.96) 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 10px 24px rgba(0,0,0,0.25)',
      }}
    >
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl"
        style={{ background: 'rgba(123, 97, 255, 0.22)', pointerEvents: 'none' }}
      />
      <p
        className="text-white mb-2 relative z-10"
        style={{ fontSize: 'clamp(18px, 2.2vw, 20px)', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '1.35', opacity: 0.96 }}
      >
        {title}
      </p>
      <p
        className="text-white mb-4 sm:mb-5 relative z-10"
        style={{ fontSize: 'clamp(14px, 1.9vw, 16px)', fontWeight: 400, letterSpacing: '-0.005em', lineHeight: '1.5', opacity: 0.72 }}
      >
        {hint}
      </p>
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="text-left rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontSize: 'clamp(14px, 1.9vw, 15px)',
              lineHeight: '1.45',
              fontWeight: 500,
              letterSpacing: '-0.012em',
              border: '1px solid rgba(255,255,255,0.16)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.22)',
            }}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
