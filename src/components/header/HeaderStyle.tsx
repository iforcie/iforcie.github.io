import React, { CSSProperties } from 'react';

type THeaderStyle = Pick<CSSProperties, 'background' | 'backgroundSize' | 'paddingTop' | 'paddingBottom' | 'color'>;

type Props = {
  children: React.ReactNode;
};

const ABOUT_PNG_SRC: string = '/static/images/backgrounds/desk-791178_1920.png';
const OUR_COFFEE_SRC: string = '/static/images/backgrounds/our-coffee.png';
const PLEASURE_SRC: string = '/static/images/backgrounds/pleasure_header.png';

const backgroundUrl: Record<string, string> = {
	'/': ABOUT_PNG_SRC,
	'/coffee': OUR_COFFEE_SRC,
	'/pleasure':PLEASURE_SRC
};

export const HeaderStyle = React.memo(({ children }: Props) => {
  const style: THeaderStyle = {
    background: `url('${backgroundUrl[window.location.pathname]}') 0 0 no-repeat`,
    backgroundSize: 'cover',
    paddingTop: `${window.location.pathname === '/' ? "40pt" : "30pt"}`,
    paddingBottom: `${window.location.pathname === '/' ? "150pt" : "0pt"}`,
    color: '#fff',
  };

  return (
    <div style={style}>{children}</div>
  );
});