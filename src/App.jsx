import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { CourseShell, LessonView } from './components/layout/CourseShell';
import { ObjectIdentityWidget } from './components/widgets/ObjectIdentityWidget';
import { BlueprintWidget } from './components/widgets/BlueprintWidget';
import { MemoryCellWidget } from './components/widgets/MemoryCellWidget';
import { ReferenceWidget } from './components/widgets/ReferenceWidget';
import { PythonInterpreterWidget } from './components/widgets/PythonInterpreterWidget';
import { InteractiveLesson } from './components/widgets/InteractiveLesson';
import { courseContent } from './lib/courseContent';

const WIDGET_REGISTRY = {
  'ObjectIdentityWidget': ObjectIdentityWidget,
  'BlueprintWidget': BlueprintWidget,
  'MemoryCellWidget': MemoryCellWidget,
  'ReferenceWidget': ReferenceWidget,
  'PythonInterpreterWidget': PythonInterpreterWidget,
  'InteractiveLesson': InteractiveLesson,
};

function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // Reset key to force re-mounting of widgets
  const [resetKey, setResetKey] = useState(0);

  const currentLevel = courseContent[currentLevelIndex];
  const currentLesson = currentLevel.lessons[currentLessonIndex];
  const totalLevels = courseContent.length;
  const totalLessonsInLevel = currentLevel.lessons.length;

  const handleNext = () => {
    if (currentLessonIndex < totalLessonsInLevel - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    } else if (currentLevelIndex < totalLevels - 1) {
      setCurrentLevelIndex(prev => prev + 1);
      setCurrentLessonIndex(0);
    }
    setResetKey(prev => prev + 1); // Reset widget state on navigation
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    } else if (currentLevelIndex > 0) {
      setCurrentLevelIndex(prev => prev - 1);
      setCurrentLessonIndex(courseContent[currentLevelIndex - 1].lessons.length - 1);
    }
    setResetKey(prev => prev + 1); // Reset widget state on navigation
  };

  const handleReset = () => {
     setResetKey(prev => prev + 1); // Only increment key to re-mount current widget
  };

  const canNext = !(currentLevelIndex === totalLevels - 1 && currentLessonIndex === totalLessonsInLevel - 1);
  const canPrev = !(currentLevelIndex === 0 && currentLessonIndex === 0);

  const WidgetComponent = WIDGET_REGISTRY[currentLesson.widgetId];
  const widgetProps = currentLesson.widgetProps || {};

  return (
    <CourseShell
      currentLevelIndex={currentLevelIndex}
      currentLessonIndex={currentLessonIndex}
      totalLevels={totalLevels}
      totalLessonsInLevel={totalLessonsInLevel}
      title={currentLevel.title}
      onNext={handleNext}
      onPrev={handlePrev}
      onReset={handleReset}
      canNext={canNext}
      canPrev={canPrev}
      whyContent={currentLesson.whyContent} // Pass specific why content if available
    >
      <LessonView
        key={`${currentLesson.id}-${resetKey}`} // Force re-render on lesson change OR reset
        content={
          <div>
            <div className="mb-6">
               <h2 className="text-3xl font-bold text-slate-900 mb-2">{currentLesson.title}</h2>
               {currentLesson.instructions && (
                 <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                    Tip: {currentLesson.instructions}
                 </div>
               )}
            </div>
            <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
          </div>
        }
        widget={WidgetComponent ? <WidgetComponent {...widgetProps} /> : null}
      />
    </CourseShell>
  );
}

export default App;
