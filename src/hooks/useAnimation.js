import { useState, useCallback } from 'react';

const DANCE_MODES = ['dance', 'wiggle', 'bounce', 'spin', 'float'];
const DANCE_LABELS = {
  dance: '댄스',
  wiggle: '흔들기',
  bounce: '점프',
  spin: '스핀',
  float: '둥실',
};

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [modeIndex, setModeIndex] = useState(0);

  const currentMode = DANCE_MODES[modeIndex];
  const currentLabel = DANCE_LABELS[currentMode];

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const nextMode = useCallback(() => {
    setModeIndex(prev => (prev + 1) % DANCE_MODES.length);
  }, []);

  return { isPlaying, currentMode, currentLabel, togglePlay, nextMode, DANCE_LABELS, DANCE_MODES };
}
