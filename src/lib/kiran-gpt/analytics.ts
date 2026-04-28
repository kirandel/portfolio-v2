type KiranAnalyticsEvent =
  | 'kiranGPT_mode_selected'
  | 'kiranGPT_suggested_question_clicked'
  | 'kiranGPT_question_submitted'
  | 'kiranGPT_response_stream_started'
  | 'kiranGPT_response_completed'
  | 'kiranGPT_error'
  | 'kiranGPT_conversation_length_updated'
  | 'kiranGPT_cta_clicked';

export function trackKiranEvent(
  event: KiranAnalyticsEvent,
  payload: Record<string, unknown> = {},
): void {
  // Simple provider-agnostic hook: easy to swap with PostHog/GA later.
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('kiran-gpt-analytics', {
        detail: { event, payload, ts: Date.now() },
      }),
    );
  }
}
