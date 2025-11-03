import { type ClassValue, clsx } from 'clsx';
import * as culori from 'culori';
import { twMerge } from 'tailwind-merge';
import type { ColorFormat } from '../types/color';
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Format number to show in k format (e.g., 1557 => 1.6k)
 */
export function formatCompactNumber(num: number): string {
	if (num < 1000) {
		return num.toString();
	}
	return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
}

export const colorFormatter = (
	colorValue: string,
	format: ColorFormat = 'hsl',
	tailwindVersion: '3' | '4'
): string => {
	const color = culori.parse(colorValue);
	if (!color) throw new Error('Invalid color input');

	switch (format) {
		case 'hsl': {
			const hsl = culori.converter('hsl')(color);
			if (tailwindVersion === '4') {
				return formatHsl(hsl);
			}
			return `${formatNumber(hsl.h)} ${formatNumber(hsl.s * 100)}% ${formatNumber(hsl.l * 100)}%`;
		}
		case 'rgb': {
			return culori.formatRgb(color);
		}
		case 'oklch': {
			const oklch = culori.converter('oklch')(color);
			return `oklch(${formatNumber(oklch.l)} ${formatNumber(oklch.c)} ${formatNumber(oklch.h)})`;
		}
		case 'hex':
			return culori.formatHex(color);
		default:
			return colorValue;
	}
};

export const formatNumber = (num?: number) => {
	if (!num) return '0';
	return num % 1 === 0 ? num : num.toFixed(4);
};

export const formatHsl = (hsl: culori.Hsl) => {
	return `hsl(${formatNumber(hsl.h)} ${formatNumber(hsl.s * 100)}% ${formatNumber(hsl.l * 100)}%)`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};
