import { ImageResponse } from 'next/og';

export function generateIcon(size: number) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09090b',
        backgroundImage:
          'radial-gradient(circle at 30% 25%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 75% 80%, rgba(16,185,129,0.28), transparent 55%)',
        color: '#ffffff',
        fontSize: Math.round(size * 0.55),
        fontWeight: 700,
        letterSpacing: -Math.round(size * 0.02),
      }}
    >
      DA
    </div>,
    { width: size, height: size },
  );
}
