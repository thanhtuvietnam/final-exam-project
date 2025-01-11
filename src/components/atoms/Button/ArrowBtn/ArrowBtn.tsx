'use client';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/declarations/icons';

interface ArrowBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
}

const ArrowBtn: React.FC<ArrowBtnProps> = ({
  borderColor = '#c284f9',
  buttonOverlayColor = '#bf49ff',
  className,
  iconColor = 'white',
  text = '',
  textColor = '#bf49ff',
  ...props
}) => {
  return (
    <button
      data-group="arrow-btn"
      style={{
        borderColor: borderColor,
      }}
      {...props}
      className={cn(
        'bg-background group/arrow-btn relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-400 px-3 py-1 font-medium shadow-md transition duration-300 ease-out',
        className,
      )}
    >
      <span
        style={{
          background: buttonOverlayColor,
        }}
        className={cn(
          'ease tw-flex-1 absolute inset-0 h-full w-full -translate-x-full justify-center bg-purple-400 text-white duration-300 group-hover/arrow-btn:translate-x-0',
        )}
      >
        <icons.BiMoviePlay />
      </span>
      <span
        style={{
          color: textColor,
        }}
        className={cn(
          'tw-flex-1 absolute top-1 h-full w-full transform justify-center font-bold transition-all duration-300 ease-in-out group-hover/arrow-btn:translate-x-full',
        )}
      >
        {text}
      </span>
      <span className="invisible relative">Button</span>
    </button>
  );
};

export default ArrowBtn;
