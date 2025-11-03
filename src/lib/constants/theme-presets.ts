import type { ThemePreset } from '@/types/theme';

export const defaultPresets: Record<string, ThemePreset> = {
	'modern-minimal': {
		label: 'Modern Minimal',
		styles: {
			light: {
				background: '#ffffff',
				foreground: '#333333',
				primary: '#3b82f6',
				'primary-foreground': '#ffffff',
				secondary: '#f3f4f6',
				'secondary-foreground': '#4b5563',
				accent: '#e0f2fe',
				'accent-foreground': '#1e3a8a'
			},
			dark: {
				background: '#171717',
				foreground: '#e5e5e5',
				primary: '#3b82f6',
				'primary-foreground': '#ffffff',
				secondary: '#262626',
				'secondary-foreground': '#e5e5e5',
				accent: '#1e3a8a',
				'accent-foreground': '#bfdbfe'
			}
		}
	},
	'violet-bloom': {
		label: 'Violet Bloom',
		createdAt: '2025-06-26',
		styles: {
			light: {
				background: '#fdfdfd',
				foreground: '#000000',
				primary: '#7033ff',
				'primary-foreground': '#ffffff',
				secondary: '#edf0f4',
				'secondary-foreground': '#080808',
				accent: '#e2ebff',
				'accent-foreground': '#1e69dc'
			},
			dark: {
				background: '#1a1b1e',
				foreground: '#f0f0f0',
				primary: '#8c5cff',
				'primary-foreground': '#ffffff',
				secondary: '#2a2c33',
				'secondary-foreground': '#f0f0f0',
				accent: '#1e293b',
				'accent-foreground': '#79c0ff'
			}
		}
	},
	't3-chat': {
		label: 'T3 Chat',
		createdAt: '2025-04-19',
		styles: {
			light: {
				background: '#faf5fa',
				foreground: '#501854',
				primary: '#a84370',
				'primary-foreground': '#ffffff',
				secondary: '#f1c4e6',
				'secondary-foreground': '#77347c',
				accent: '#f1c4e6',
				'accent-foreground': '#77347c'
			},
			dark: {
				background: '#221d27',
				foreground: '#d2c4de',
				primary: '#a3004c',
				'primary-foreground': '#efc0d8',
				secondary: '#362d3d',
				'secondary-foreground': '#d4c7e1',
				accent: '#463753',
				'accent-foreground': '#f8f1f5'
			}
		}
	},
	twitter: {
		label: 'Twitter',
		styles: {
			light: {
				background: '#ffffff',
				foreground: '#0f1419',
				primary: '#1e9df1',
				'primary-foreground': '#ffffff',
				secondary: '#0f1419',
				'secondary-foreground': '#ffffff',
				accent: '#E3ECF6',
				'accent-foreground': '#1e9df1'
			},
			dark: {
				background: '#000000',
				foreground: '#e7e9ea',
				primary: '#1c9cf0',
				'primary-foreground': '#ffffff',
				secondary: '#f0f3f4',
				'secondary-foreground': '#0f1419',
				accent: '#061622',
				'accent-foreground': '#1c9cf0'
			}
		}
	},
	'mocha-mousse': {
		label: 'Mocha Mousse',
		createdAt: '2025-04-24',
		styles: {
			light: {
				background: '#F1F0E5',
				foreground: '#56453F',
				primary: '#A37764',
				'primary-foreground': '#FFFFFF',
				secondary: '#BAAB92',
				'secondary-foreground': '#ffffff',
				accent: '#E4C7B8',
				'accent-foreground': '#56453F'
			},
			dark: {
				background: '#2d2521',
				foreground: '#F1F0E5',
				primary: '#C39E88',
				'primary-foreground': '#2d2521',
				secondary: '#8A655A',
				'secondary-foreground': '#F1F0E5',
				accent: '#BAAB92',
				'accent-foreground': '#2d2521'
			}
		}
	},
	bubblegum: {
		label: 'Bubblegum',
		createdAt: '2025-04-18',
		styles: {
			light: {
				background: '#f6e6ee',
				foreground: '#5b5b5b',
				primary: '#d04f99',
				'primary-foreground': '#ffffff',
				secondary: '#8acfd1',
				'secondary-foreground': '#333333',
				accent: '#fbe2a7',
				'accent-foreground': '#333333'
			},
			dark: {
				background: '#12242e',
				foreground: '#f3e3ea',
				primary: '#fbe2a7',
				'primary-foreground': '#12242e',
				secondary: '#e4a2b1',
				'secondary-foreground': '#12242e',
				accent: '#c67b96',
				'accent-foreground': '#f3e3ea'
			}
		}
	},
	'amethyst-haze': {
		label: 'Amethyst Haze',
		createdAt: '2025-05-08',
		styles: {
			light: {
				background: '#f8f7fa',
				foreground: '#3d3c4f',
				primary: '#8a79ab',
				'primary-foreground': '#f8f7fa',
				secondary: '#dfd9ec',
				'secondary-foreground': '#3d3c4f',
				accent: '#e6a5b8',
				'accent-foreground': '#4b2e36'
			},
			dark: {
				background: '#1a1823',
				foreground: '#e0ddef',
				primary: '#a995c9',
				'primary-foreground': '#1a1823',
				secondary: '#5a5370',
				'secondary-foreground': '#e0ddef',
				accent: '#372e3f',
				'accent-foreground': '#f2b8c6'
			}
		}
	},
	notebook: {
		label: 'Notebook',
		createdAt: '2025-05-10',
		styles: {
			light: {
				background: '#f9f9f9',
				foreground: '#3a3a3a',
				primary: '#606060',
				'primary-foreground': '#f0f0f0',
				secondary: '#dedede',
				'secondary-foreground': '#3a3a3a',
				accent: '#f3eac8',
				'accent-foreground': '#5d4037'
			},
			dark: {
				background: '#2b2b2b',
				foreground: '#dcdcdc',
				primary: '#b0b0b0',
				'primary-foreground': '#2b2b2b',
				secondary: '#5a5a5a',
				'secondary-foreground': '#c0c0c0',
				accent: '#e0e0e0',
				'accent-foreground': '#333333'
			}
		}
	},
	'doom-64': {
		label: 'Doom 64',
		createdAt: '2025-04-28',
		styles: {
			light: {
				background: '#cccccc',
				foreground: '#1f1f1f',
				primary: '#b71c1c',
				'primary-foreground': '#ffffff',
				secondary: '#556b2f',
				'secondary-foreground': '#ffffff',
				accent: '#4682b4',
				'accent-foreground': '#ffffff'
			},
			dark: {
				background: '#1a1a1a',
				foreground: '#e0e0e0',
				primary: '#e53935',
				'primary-foreground': '#ffffff',
				secondary: '#689f38',
				'secondary-foreground': '#000000',
				accent: '#64b5f6',
				'accent-foreground': '#000000'
			}
		}
	},
	catppuccin: {
		label: 'Catppuccin',
		createdAt: '2025-04-18',
		styles: {
			light: {
				background: '#eff1f5',
				foreground: '#4c4f69',
				primary: '#8839ef',
				'primary-foreground': '#ffffff',
				secondary: '#ccd0da',
				'secondary-foreground': '#4c4f69',
				accent: '#04a5e5',
				'accent-foreground': '#ffffff'
			},
			dark: {
				background: '#181825',
				foreground: '#cdd6f4',
				primary: '#cba6f7',
				'primary-foreground': '#1e1e2e',
				secondary: '#585b70',
				'secondary-foreground': '#cdd6f4',
				accent: '#89dceb',
				'accent-foreground': '#1e1e2e'
			}
		}
	}
};
