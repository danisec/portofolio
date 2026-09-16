import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#09090b',
        backgroundImage:
          'radial-gradient(circle at 20% 15%, rgba(59,130,246,0.28), transparent 45%), radial-gradient(circle at 82% 88%, rgba(16,185,129,0.22), transparent 45%)',
        padding: '72px 80px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 9999,
            backgroundColor: '#10b981',
          }}
        />
        <span style={{ color: '#a1a1aa', fontSize: 26, letterSpacing: 0.5 }}>
          {siteConfig.location}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <span
          style={{
            color: '#ffffff',
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -1.5,
          }}
        >
          {siteConfig.name}
        </span>
        <span style={{ color: '#60a5fa', fontSize: 40, fontWeight: 500 }}>{siteConfig.role}</span>
        <span
          style={{
            color: '#a1a1aa',
            fontSize: 28,
            lineHeight: 1.45,
            maxWidth: 920,
          }}
        >
          Laravel · React · Next.js — production-ready web products that stay fast, secure, and
          maintainable.
        </span>
      </div>

      <div
        style={{ display: 'flex', alignItems: 'center', gap: 24, color: '#71717a', fontSize: 24 }}
      >
        <span>{siteConfig.url.replace(/^https?:\/\//, '')}</span>
        <span style={{ color: '#3f3f46' }}>|</span>
        <span>github.com/danisec</span>
      </div>
    </div>,
    { ...size },
  );
}
