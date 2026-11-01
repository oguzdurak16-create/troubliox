import { ImageResponse } from 'next/og';

export const alt = 'Troublio — error codes, causes and safe checks';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#132e35', color: '#fff', padding: 72 }}>
      <div style={{ display: 'flex', fontSize: 34, color: '#e9c66b' }}>TROUBLIO</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>What does that error code mean?</div>
        <div style={{ fontSize: 30, color: '#d4e1df' }}>Find the cause. Check the model. Take the safe next step.</div>
      </div>
      <div style={{ display: 'flex', fontSize: 25, color: '#e9c66b' }}>Appliances · Windows · Printers · Wi-Fi</div>
    </div>,
    size,
  );
}
