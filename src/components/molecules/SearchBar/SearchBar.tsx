'use client';
import React, { JSX, useRef, useState, useEffect, useCallback } from 'react';

import Form from 'next/form';
import { cn } from '@/lib/utils';
import { SearchBtn, InputField } from '@/components/atoms';

const SearchBar = (): JSX.Element => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    'Who is Tyler Durden?',
    'Where is Andrew Laeddis Hiding?',
    'Write a Javascript method to reverse a string',
    'How to assemble your own PC?',
  ];

  const [value, setValue] = useState<string>('');
  const [animating, setAnimating] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const newDataRef = useRef<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null!);

  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue('font-size'));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = '#FFF';
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
            x: n,
            y: t,
          });
        }
      }
    }

    newDataRef.current = newData.map(({ color, x, y }) => ({
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
      r: 1,
      x,
      y,
    }));
  }, [value]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number): void => {
    const animateFrame = (pos: number = 0): void => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { color: color, r: s, x: n, y: i } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setValue('');
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !animating) {
      vanishAndSubmit();
    }
  };

  const vanishAndSubmit = (): void => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || '';
    if (value && inputRef.current) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0,
      );
      animate(maxX);
    }
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   vanishAndSubmit();
  // };
  const handleSubmit = (): void => {
    vanishAndSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log('handlechange', e.target.value);
  };

  return (
    <Form
      className={cn(
        'relative overflow-hidden rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200',
        'bg-bglight dark:bg-bgdark',
        value && 'bg-main-summerSky-100',
        'hidden h-10 max-w-sm md:flex md:w-[19rem] lg:ml-0 lg:w-full',
      )}
      action="/"
    >
      <InputField
        placeholders={placeholders}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        value={value}
        nameInput="search"
        inputRef={inputRef}
        setValue={setValue}
        animating={animating}
        canvasRef={canvasRef}
      />
      <SearchBtn handleSubmit={() => handleSubmit()} value={value} />
    </Form>
  );
};

export default SearchBar;
