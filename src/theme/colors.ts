

interface Color {
    bg: string;
    color: string;
}
const BASE_BLACK = '#171616'
//const DEFAULT_WHITE = 'rgb(234 241 255)'
export const COLORS: Record<string, Color> = {
  red: { bg: 'red', color: 'white' },
  CODE: { color: BASE_BLACK, bg: '#818181'},
  BASE_BLACK: { color: BASE_BLACK, bg: 'white' },
  BASE_WHITE: { color: '#d5cece', bg: 'black' }
};

