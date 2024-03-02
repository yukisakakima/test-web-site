const THEME_COLOR = {
  base: '#F9F9F9',
  main: '#D5D5D5',
  accent: '#1D7DDD',
  black: '#404040',
  white: '#FFFFFF',
  red: '#DD1D1D',
  overlay: 'rgba(64, 64, 64, 40%)',
  transparent: 'transparent',
  success: '#83dd1d',
}

const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
  '7xl': '128px',
}

const FONT_SIZE = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
}

const LINE_HEIGHT = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '28px',
  '2xl': '32px',
}

const theme = {
  color: THEME_COLOR,
  font: (size: keyof typeof FONT_SIZE = 'xs') => {
    return {
      fontSize: FONT_SIZE[size],
      lineHeight: LINE_HEIGHT[size],
      fontWeight: 'normal',
    }
  },
  'font-b': (size: keyof typeof FONT_SIZE = 'xs') => {
    return {
      fontSize: FONT_SIZE[size],
      lineHeight: LINE_HEIGHT[size],
      fontWeight: 'bold',
    }
  },
  spacing: SPACING,
  'border-radius': {
    rounded: '4px',
    'rounded-md': '8px',
    full: '9999px',
  },
  'box-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
  'grid-layout': (col = 3) => {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
    }
  },
  'col-span': (col = 1) => {
    return {
      gridColumn: `span ${col} / span ${col}`,
    }
  },
  mediaQuery: (val: number, width = 1280, unit = 'vw', minWidth = 1000) => {
    return `min(calc(${val} / ${width} * 100${unit}), ${minWidth}px)`
  },
  transition: '.3s cubic-bezier(0.4, 0, 0.2, 1)',
}

export type ThemeColor = typeof THEME_COLOR
export type ThemeSpacing = typeof SPACING
export type ThemeFontSize = typeof FONT_SIZE
export type ThemeLineHeight = typeof LINE_HEIGHT

export default theme
