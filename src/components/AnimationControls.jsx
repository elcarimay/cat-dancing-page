export default function AnimationControls({ isPlaying, currentMode, currentLabel, onTogglePlay, onNextMode, DANCE_LABELS, DANCE_MODES }) {
  return (
    <div className="controls">
      <button
        className={`btn btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onTogglePlay}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <button
        className="btn btn-mode"
        onClick={onNextMode}
        aria-label="다음 댄스 모드"
        disabled={!isPlaying}
      >
        🔀 {currentLabel} 모드
      </button>

      <div className="mode-indicators" role="group" aria-label="댄스 모드 목록">
        {DANCE_MODES.map((mode) => (
          <span
            key={mode}
            className={`mode-dot ${mode === currentMode && isPlaying ? 'active' : ''}`}
            title={DANCE_LABELS[mode]}
          />
        ))}
      </div>
    </div>
  );
}
