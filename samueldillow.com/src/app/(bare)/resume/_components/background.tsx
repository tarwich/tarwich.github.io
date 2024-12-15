import { cn } from '@/lib/utils';

export default function Background() {
  // Generate squares in a grid pattern
  const squares = [];
  const gridSize = 20; // Number of squares per row/column
  const squareBaseSize = 1;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const x = (100 / gridSize) * i;
      const y = (100 / gridSize) * j;
      const opacity = Math.random() * 0.12 + 0.02; // Random opacity between 0.02 and 0.14
      const size = squareBaseSize * (Math.random() * 0.5 + 0.75); // Random size variation

      squares.push(
        <g
          key={`${i}-${j}`}
          className={cn(Math.random() > 0.5 ? 'animate-pulse' : 'animate-none')}
        >
          <rect
            x={x}
            y={y}
            width={size}
            height={size}
            fill="currentColor"
            opacity={opacity}
          />
        </g>
      );
    }
  }

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect
        width="100"
        height="100"
        fill="transparent"
        className="fill-black"
      />
      <rect
        width="100"
        height="100"
        fill="transparent"
        className="fill-indigo-900"
      />
      {squares}
    </svg>
  );
}
