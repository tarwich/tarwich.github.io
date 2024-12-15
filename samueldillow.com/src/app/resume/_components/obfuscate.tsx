'use client';

import { cn } from '@/lib/utils';
import { ComponentProps, useEffect, useMemo, useRef } from 'react';
import { decrypt } from './obfuscate.crypto';

export const Obfuscate = (
  props: Omit<ComponentProps<'canvas'>, 'children'> & {
    text: string;
    height?: number; // Optional height prop, will default to font size
  }
) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const text = useMemo(() => decrypt(props.text), [props.text]);

  useEffect(() => {
    if (!canvas.current) return;

    // Get the computed style to get the font and color
    const computedStyle = window.getComputedStyle(canvas.current);
    const dpr = window.devicePixelRatio || 1;

    // Create temporary context to measure text
    ctx.current = canvas.current.getContext('2d');
    if (!ctx.current) return;

    // Configure text rendering
    ctx.current.font = computedStyle.font;

    // Measure the text
    const textMetrics = ctx.current.measureText(text);
    const textHeight = parseInt(computedStyle.fontSize);

    // Calculate dimensions
    const width = Math.ceil(textMetrics.width);
    const height = props.height || textHeight;

    // Set the canvas dimensions accounting for device pixel ratio
    canvas.current.width = width * dpr;
    canvas.current.height = height * dpr;

    // Scale the context to account for the device pixel ratio
    ctx.current.scale(dpr, dpr);

    // Set the CSS size explicitly
    canvas.current.style.width = `${width}px`;
    canvas.current.style.height = `${height}px`;

    // Reconfigure text rendering after resize
    ctx.current.font = computedStyle.font;
    ctx.current.fillStyle = computedStyle.color;
    ctx.current.textBaseline = 'middle';

    // Draw the text
    const x = 0;
    const y = height / 2;

    ctx.current.fillText(text, x, y);
  }, [canvas, text, props.height]);

  return (
    <canvas {...props} ref={canvas} className={cn(props.className)}></canvas>
  );
};
