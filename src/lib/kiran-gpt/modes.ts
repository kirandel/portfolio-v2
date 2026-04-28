import type { KiranModeId, ModeConfig } from './types';

export const MODE_ORDER: KiranModeId[] = ['about', 'product', 'fun'];

export const KIRAN_MODES: Record<KiranModeId, ModeConfig> = {
  about: {
    id: 'about',
    label: 'About Me',
    description: 'Ask about my background, path, and story.',
    placeholder: 'Ask about my story, path, or motivations...',
    suggestedQuestions: [
      'What is the story behind how Kiran became a product manager?',
      'Where did Kiran grow up, and what shaped him early on?',
      'What were the key turning points that changed Kiran’s trajectory?',
    ],
    systemInstruction:
      'Speak in a warm, narrative, third-person voice about Kiran. Always answer as an observer: start or lean on phrasing like “Kiran is…”, “Kiran grew up…”, “His path…”. Never answer as if you are Kiran in first person (“I…”). Emphasize arc, motivations, and lessons learned.',
    toneGuidelines: ['warm', 'human', 'reflective', 'confident', 'third-person'],
    retrievalTags: ['about', 'resume', 'background', 'journey'],
    emptyStateTitle: 'Ask about Kiran’s story!',
    emptyStateHint: 'Try a prompt below to explore background and career path.',
  },
  product: {
    id: 'product',
    label: 'Product Mode',
    description: 'Ask how I design, build, and scale products from 0 to 1 and beyond.',
    placeholder: 'Ask about my 0→1 work, strategy, tradeoffs, or leadership...',
    suggestedQuestions: [
      'What is the most impressive product Kiran has built, and why?',
      'How does Kiran approach a completely ambiguous product problem?',
      'How does Kiran decide what not to build?',
    ],
    systemInstruction:
      'Be sharp, strategic, and credible in third person. Describe Kiran with “Kiran is…”, “Kiran tends to…”, “He leads by…”. Use concrete examples and business impact. Never speak as Kiran in first person.',
    toneGuidelines: ['strategic', 'specific', 'credible', 'high-agency', 'third-person'],
    retrievalTags: ['product', 'projects', 'marketplace', 'strategy', 'growth'],
    emptyStateTitle: 'Ask about Kiran’s product thinking!',
    emptyStateHint: 'Use prompts to explore approach, frameworks, and outcomes.',
  },
  fun: {
    id: 'fun',
    label: 'Fun Mode',
    description: 'Playful questions about me — travel, personality, and more.',
    placeholder: 'Ask something playful about me...',
    suggestedQuestions: [
      'Roast Kiran like you have worked with him for 5 years.',
      'If Kiran were a startup, what would his pitch be?',
      'What is Kiran like outside of work?',
    ],
    systemInstruction:
      'Be playful and witty while staying grounded. Always describe Kiran in third person (“Kiran is…”, “He’s the kind of person who…”). Never answer as Kiran in first person. Keep it tasteful, not cringe.',
    toneGuidelines: ['playful', 'light', 'self-aware', 'tasteful', 'third-person'],
    retrievalTags: ['fun', 'personality', 'interests', 'travel', 'food'],
    emptyStateTitle: 'Ask something fun about Kiran!',
    emptyStateHint: 'Try a playful prompt and keep it conversational.',
  },
};
