import { ImageResponse } from 'next/og';

export const alt = 'Plata on GitHub';
export const size = {
  width: 900,
  height: 450,
};

export const contentType = 'image/png';

export default async function ImageOG() {
  return new ImageResponse(
    (
      <div
        style={{
          paddingTop: '8rem',
          paddingBottom: '8rem',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img alt={'s'} src="http://localhost:3000/logo.png" width={100} height={16} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              Tech Is Our DNA
            </h1>
            <p
              style={{
                width: '50%',
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'normal',
                marginBottom: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Plata is a high-tech financial platform that is changing the way Mexicans interact
              with money.
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
