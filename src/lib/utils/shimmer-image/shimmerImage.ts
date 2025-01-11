import { useTheme } from 'next-themes';

export const ShimmerImage = (
  w: number,
  h: number,
  resolvedTheme: 'light' | 'dark' = 'dark',
  // theme: 'light' | 'dark' = 'dark',
) => {
  // const { resolvedTheme } = useTheme();

  const stopColor1 = resolvedTheme === 'light' ? '#e0e0e0' : '#2b2b2b';
  const stopColor2 = resolvedTheme === 'light' ? '#c0c0c0' : '#222';
  const backgroundColor = resolvedTheme === 'light' ? '#f0f0f0' : '#333';

  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${stopColor1}" offset="20%" />
      <stop stop-color="${stopColor2}" offset="50%" />
      <stop stop-color="${stopColor1}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${backgroundColor}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite"  />
</svg>`;
};

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
