import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const NOTES = ['♪', '♫', '♬', '🎵', '🎶'];

export default function DancingCat({ isPlaying, mode }) {
  const animClass = isPlaying ? `cat-${mode}` : '';

  return (
    <div className="dancing-cat-wrapper">
      {isPlaying && (
        <div className="music-notes" aria-hidden="true">
          {NOTES.map((note, i) => (
            <span
              key={i}
              className="note"
              style={{
                left: `${10 + i * 18}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${1.2 + (i % 3) * 0.3}rem`,
              }}
            >
              {note}
            </span>
          ))}
        </div>
      )}

      <div className={`cat-container ${animClass}`}>
        <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
      </div>

      {isPlaying && (
        <div className="stars" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${5 + i * 16}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              ⭐
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
