import type { ThemePreset } from '$lib/types/theme';

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
	},
	graphite: {
		label: "Graphite",
		createdAt: "2025-04-17",
		styles: {
			light: {
				background: "#f0f0f0",
				foreground: "#333333",
				card: "#f5f5f5",
				"card-foreground": "#333333",
				primary: "#606060",
				"primary-foreground": "#ffffff",
				secondary: "#e0e0e0",
				"secondary-foreground": "#333333",
				accent: "#c0c0c0",
				"accent-foreground": "#333333",
			},
			dark: {
				background: "#1a1a1a",
				foreground: "#d9d9d9",
				card: "#202020",
				"card-foreground": "#d9d9d9",
				primary: "#a0a0a0",
				"primary-foreground": "#1a1a1a",
				secondary: "#303030",
				"secondary-foreground": "#d9d9d9",
				accent: "#404040",
				"accent-foreground": "#d9d9d9",
			},
		}
	},
	perpetuity: {
		label: "Perpetuity",
		createdAt: "2025-04-01",
		styles: {
			light: {
				background: "#e8f0f0",
				foreground: "#0a4a55",
				card: "#f2f7f7",
				"card-foreground": "#0a4a55",
				primary: "#06858e",
				"primary-foreground": "#ffffff",
				secondary: "#d9eaea",
				"secondary-foreground": "#0a4a55",
				accent: "#c9e5e7",
				"accent-foreground": "#0a4a55",
			},
			dark: {
				background: "#0a1a20",
				foreground: "#4de8e8",
				card: "#0c2025",
				"card-foreground": "#4de8e8",
				primary: "#4de8e8",
				"primary-foreground": "#0a1a20",
				secondary: "#164955",
				"secondary-foreground": "#4de8e8",
				accent: "#164955",
				"accent-foreground": "#4de8e8",
			}
		}
	},
	"kodama-grove": {
		label: "Kodama Grove",
		styles: {
			light: {
				background: "#e4d7b0",
				foreground: "#5c4b3e",
				card: "#e7dbbf",
				"card-foreground": "#5c4b3e",
				primary: "#8d9d4f",
				"primary-foreground": "#fdfbf6",
				secondary: "#decea0",
				"secondary-foreground": "#5c4b3e",
				accent: "#dbc894",
				"accent-foreground": "#5c4b3e",
			},
			dark: {
				background: "#3a3529",
				foreground: "#ede4d4",
				card: "#413c33",
				"card-foreground": "#ede4d4",
				primary: "#8a9f7b",
				"primary-foreground": "#2a2521",
				secondary: "#5a5345",
				"secondary-foreground": "#ede4d4",
				accent: "#a18f5c",
				"accent-foreground": "#2a2521",
			}
		}
	},
	"cosmic-night": {
		label: "Cosmic Night",
		createdAt: "2025-04-04",
		styles: {
			light: {
				background: "#f5f5ff",
				foreground: "#2a2a4a",
				card: "#ffffff",
				"card-foreground": "#2a2a4a",
				primary: "#6e56cf",
				"primary-foreground": "#ffffff",
				secondary: "#e4dfff",
				"secondary-foreground": "#4a4080",
				accent: "#d8e6ff",
				"accent-foreground": "#2a2a4a",
			},
			dark: {
				background: "#0f0f1a",
				foreground: "#e2e2f5",
				card: "#1a1a2e",
				"card-foreground": "#e2e2f5",
				primary: "#a48fff",
				"primary-foreground": "#0f0f1a",
				secondary: "#2d2b55",
				"secondary-foreground": "#c4c2ff",
				accent: "#303060",
				"accent-foreground": "#e2e2f5",
			}
		}
	},
	tangerine: {
		label: "Tangerine",
		createdAt: "2025-04-09",
		styles: {
			light: {
				background: "#e8ebed",
				foreground: "#333333",
				card: "#ffffff",
				"card-foreground": "#333333",
				primary: "#e05d38",
				"primary-foreground": "#ffffff",
				secondary: "#f3f4f6",
				"secondary-foreground": "#4b5563",
				accent: "#d6e4f0",
				"accent-foreground": "#1e3a8a",
			},
			dark: {
				background: "#1c2433",
				foreground: "#e5e5e5",
				card: "#2a3040",
				"card-foreground": "#e5e5e5",
				primary: "#e05d38",
				"primary-foreground": "#ffffff",
				secondary: "#2a303e",
				"secondary-foreground": "#e5e5e5",
				accent: "#2a3656",
				"accent-foreground": "#bfdbfe",
			}
		}
	},
	"quantum-rose": {
		label: "Quantum Rose",
		createdAt: "2025-04-03",
		styles: {
			light: {
				background: "#fff0f8",
				foreground: "#91185c",
				card: "#fff7fc",
				"card-foreground": "#91185c",
				primary: "#e6067a",
				"primary-foreground": "#ffffff",
				secondary: "#ffd6ff",
				"secondary-foreground": "#91185c",
				accent: "#ffc1e3",
				"accent-foreground": "#91185c",
			},
			dark: {
				background: "#1a0922",
				foreground: "#ffb3ff",
				card: "#2a1435",
				"card-foreground": "#ffb3ff",
				primary: "#ff6bef",
				"primary-foreground": "#180518",
				secondary: "#46204f",
				"secondary-foreground": "#ffb3ff",
				accent: "#5a1f5d",
				"accent-foreground": "#ffb3ff",
			}
		}
	},
	nature: {
		label: "Nature",
		styles: {
			light: {
				background: "#f8f5f0",
				foreground: "#3e2723",
				card: "#f8f5f0",
				"card-foreground": "#3e2723",
				primary: "#2e7d32",
				"primary-foreground": "#ffffff",
				secondary: "#e8f5e9",
				"secondary-foreground": "#1b5e20",
				accent: "#c8e6c9",
				"accent-foreground": "#1b5e20",
			},
			dark: {
				background: "#1c2a1f",
				foreground: "#f0ebe5",
				card: "#2d3a2e",
				"card-foreground": "#f0ebe5",
				primary: "#4caf50",
				"primary-foreground": "#0a1f0c",
				secondary: "#3e4a3d",
				"secondary-foreground": "#d7e0d6",
				accent: "#388e3c",
				"accent-foreground": "#f0ebe5",
			}
		}
	},
	"bold-tech": {
		label: "Bold Tech",
		styles: {
			light: {
				background: "#ffffff",
				foreground: "#312e81",
				card: "#ffffff",
				"card-foreground": "#312e81",
				primary: "#8b5cf6",
				"primary-foreground": "#ffffff",
				secondary: "#f3f0ff",
				"secondary-foreground": "#4338ca",
				accent: "#dbeafe",
				"accent-foreground": "#1e40af",
			},
			dark: {
				background: "#0f172a",
				foreground: "#e0e7ff",
				card: "#1e1b4b",
				"card-foreground": "#e0e7ff",
				primary: "#8b5cf6",
				"primary-foreground": "#ffffff",
				secondary: "#1e1b4b",
				"secondary-foreground": "#e0e7ff",
				accent: "#4338ca",
				"accent-foreground": "#e0e7ff",
			}
		}
	},
	"elegant-luxury": {
		label: "Elegant Luxury",
		styles: {
			light: {
				background: "#faf7f5",
				foreground: "#1a1a1a",
				card: "#faf7f5",
				"card-foreground": "#1a1a1a",
				primary: "#9b2c2c",
				"primary-foreground": "#ffffff",
				secondary: "#fdf2d6",
				"secondary-foreground": "#805500",
				accent: "#fef3c7",
				"accent-foreground": "#7f1d1d",
			},
			dark: {
				background: "#1c1917",
				foreground: "#f5f5f4",
				card: "#292524",
				"card-foreground": "#f5f5f4",
				primary: "#b91c1c",
				"primary-foreground": "#faf7f5",
				secondary: "#92400e",
				"secondary-foreground": "#fef3c7",
				accent: "#b45309",
				"accent-foreground": "#fef3c7",
			}
		}
	},
	"amber-minimal": {
		label: "Amber Minimal",
		createdAt: "2025-04-27",
		styles: {
			light: {
				background: "#ffffff",
				foreground: "#262626",
				card: "#ffffff",
				"card-foreground": "#262626",
				primary: "#f59e0b",
				"primary-foreground": "#000000",
				secondary: "#f3f4f6",
				"secondary-foreground": "#4b5563",
				accent: "#fffbeb",
				"accent-foreground": "#92400e",
			},
			dark: {
				background: "#171717",
				foreground: "#e5e5e5",
				card: "#262626",
				"card-foreground": "#e5e5e5",
				primary: "#f59e0b",
				"primary-foreground": "#000000",
				secondary: "#262626",
				"secondary-foreground": "#e5e5e5",
				accent: "#92400e",
				"accent-foreground": "#fde68a",
			}
		}
	},
	supabase: {
		label: "Supabase",
		createdAt: "2025-04-27",
		styles: {
			light: {
				background: "#fcfcfc",
				foreground: "#171717",
				card: "#fcfcfc",
				"card-foreground": "#171717",
				primary: "#72e3ad",
				"primary-foreground": "#1e2723",
				secondary: "#fdfdfd",
				"secondary-foreground": "#171717",
				accent: "#ededed",
				"accent-foreground": "#202020",
			},
			dark: {
				background: "#121212",
				foreground: "#e2e8f0",
				card: "#171717",
				"card-foreground": "#e2e8f0",
				primary: "#006239",
				"primary-foreground": "#dde8e3",
				secondary: "#242424",
				"secondary-foreground": "#fafafa",
				accent: "#313131",
				"accent-foreground": "#fafafa",
			}
		}
	},
	"neo-brutalism": {
		label: "Neo Brutalism",
		styles: {
			light: {
				background: "#ffffff",
				foreground: "#000000",
				card: "#ffffff",
				"card-foreground": "#000000",
				primary: "#ff3333",
				"primary-foreground": "#ffffff",
				secondary: "#ffff00",
				"secondary-foreground": "#000000",
				accent: "#0066ff",
				"accent-foreground": "#ffffff",
			},
			dark: {
				background: "#000000",
				foreground: "#ffffff",
				card: "#333333",
				"card-foreground": "#ffffff",
				primary: "#ff6666",
				"primary-foreground": "#000000",
				secondary: "#ffff33",
				"secondary-foreground": "#000000",
				accent: "#3399ff",
				"accent-foreground": "#000000",
			}
		}
	},


	"midnight-bloom": {
		label: "Midnight Bloom",
		styles: {
			light: {
				background: "#f9f9f9",
				foreground: "#333333",
				card: "#ffffff",
				"card-foreground": "#333333",
				primary: "#6c5ce7",
				"primary-foreground": "#ffffff",
				secondary: "#a1c9f2",
				"secondary-foreground": "#333333",
				accent: "#8b9467",
				"accent-foreground": "#ffffff",
			},
			dark: {
				background: "#1a1d23",
				foreground: "#e5e5e5",
				card: "#2f3436",
				"card-foreground": "#e5e5e5",
				primary: "#6c5ce7",
				"primary-foreground": "#ffffff",
				secondary: "#4b0082",
				"secondary-foreground": "#e5e5e5",
				accent: "#6495ed",
				"accent-foreground": "#e5e5e5",
			}
		}
	}
}
