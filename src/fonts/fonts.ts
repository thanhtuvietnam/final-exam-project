import { Pattaya, Montserrat, Montserrat_Alternates } from 'next/font/google';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
});
export const montserratAlter = Montserrat_Alternates({
  display: 'swap',
  style: ['italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const pattayaFont = Pattaya({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});
