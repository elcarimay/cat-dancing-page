import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';
import './App.css';

export default function App() {
  const { isPlaying, currentMode, currentLabel, togglePlay, nextMode, DANCE_LABELS, DANCE_MODES } = useAnimation();

  return (
    <main className="app">
      <h1 className="title">🐱 댄싱 캣</h1>
      <p className="subtitle">{isPlaying ? `${currentLabel} 중이에요~` : '고양이가 쉬고 있어요'}</p>

      <DancingCat isPlaying={isPlaying} mode={currentMode} />

      <AnimationControls
        isPlaying={isPlaying}
        currentMode={currentMode}
        currentLabel={currentLabel}
        onTogglePlay={togglePlay}
        onNextMode={nextMode}
        DANCE_LABELS={DANCE_LABELS}
        DANCE_MODES={DANCE_MODES}
      />
    </main>
  );
}
