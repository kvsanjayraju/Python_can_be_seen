import React from 'react';
import { InteractiveLesson } from './InteractiveLesson';

export function PythonInterpreterWidget(props) {
  // If no specific props are passed (e.g. from an old lesson), render nothing or a placeholder.
  // But for the new curriculum, we expect 'challenge', 'visual', 'xRay'.
  if (!props.challenge || !props.visual) {
      return (
          <div className="flex items-center justify-center h-full text-slate-400">
              Widget not configured for this lesson.
          </div>
      );
  }

  return (
    <InteractiveLesson
       challenge={props.challenge}
       visual={props.visual}
       xRay={props.xRay}
    />
  );
}
