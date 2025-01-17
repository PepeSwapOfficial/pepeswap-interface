import React, { useMemo } from 'react'
import { Text, TextProps } from 'rebass'
import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Colors } from './styled'
import BackgroundImg from '../assets/images/background.png'

export * from './components'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ?'#EDEEF2' : '#565A69',
    text3: darkMode ? '#C3C5CB' : '#888D9B',
    text4: darkMode ? '#6C7284' : '#C3C5CB',
    text5: darkMode ? '#565A69' : '#EDEEF2',

    // backgrounds / greys
    bg01: 'black',
    bg0: darkMode ? 'rgba(16, 16, 18, 0.9)' : 'rgba(16, 16, 18, 0.9)',
    bg1: darkMode ? 'rgba(16, 16, 18, 0.9)' : 'rgba(16, 16, 18, 0.9)',
    bg2: darkMode ? '#191B1F' : '#EDEEF2',
    bg3: darkMode ? '#40444F' : '#CED0D9',
    bg4: darkMode ? '#565A69' : '#888D9B',
    bg5: darkMode ? '#6C7284' : '#888D9B',
    bg6: darkMode ? '#1A2028' : '#6C7284',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#22c55e' : '#22c55e',
    primary2: darkMode ? '#16a34a' : '#16a34a',
    primary3: darkMode ? '#15803d' : '#15803d',
    primary4: darkMode ? '#166534' : '#166534',
    primary5: darkMode ? '#14532dae' : '#14532dae',

    primary1_30: 'rgba(74, 222, 128, 0.5)', /* #27d2ea */
    primaryTransparent: 'rgba(74, 222, 128, 0.2)', /* #27d2ea */

    // color text
    primaryText1: darkMode ? '#22c55e' : '#22c55e',

    // secondary colors
    secondary1: darkMode ? '#14532d' : '#14532d',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    secondary1_30: 'rgba(4, 76, 26, 0.3)',
    secondary1_10: 'rgba(4, 76, 26, 0.1)',

    dark0: 'rgba(16, 16, 18, 0.9)', /* #101012 */
    dark1: 'rgba(12,26,35,0.9)', /* #0c1a23 */
    //dark2: 'rgba(10,14,36, 0.9)',
    dark2: '#14532d',
    dark3: 'rgba(10,19,51, 1)', /* #0a1333 */
    dark4: 'rgba(14,28,67,1)', /* #0e1c43 */
    dark5: 'transparent',
    darkTransparent: 'rgba(16, 16, 18, 0.12)', /* #101012 */
    darkTransparent2: 'rgba(16, 16, 18, 0.32)', /* #101012 */
    darkTransparent3: 'rgba(16, 16, 18, 0.8)', /* #101012 */

    bgGradient: `linear-gradient(90deg, rgba(16, 16, 18, 0.9) 0%, rgba(10,14,36, 0.9) 35%, rgba(16, 16, 18, 0.9) 100%)`,

    // other
    red1: 'rgba(242,65,65,0.3)',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#e3a507',
    yellow2: '#ff8f00',
    yellow3: '#F3B71E',
    blue1: '#2172E5',
    blue2: '#5199FF',

    error: '#FD4040',
    success: '#27AE60',
    warning: '#ff8f00',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: darkMode ? '#000' : '#4ade80',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  label(props: TextProps) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'blue1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow3'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  },
}

export const ThemedBackground = styled.div<{ backgroundColor?: string | undefined }>`
  position: fixed;
  /* top: 0; */
  top: 30vh;
  /* left: calc(-100vw / 2); */
  right: 0;
  pointer-events: none;
  /* max-width: 100vw !important; */
  width: 100vw;
  /* width: 200vw; */
  height: 200vh;
  mix-blend-mode: color;
  /* background: ${({ backgroundColor }) =>
    `radial-gradient(50% 50% at 50% 50%, ${
      backgroundColor ? backgroundColor : '#fc077d10'
    } 0%, rgba(255, 255, 255, 0) 100%)`}; */
  transform: translateY(-100vh);
  will-change: background;
  transition: background 450ms ease;
`

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Inter var', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
body::-webkit-scrollbar {
  display: none;
}


 a {
   color: ${colors(false).blue1}; 
 }

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on,  'cv01' on, 'cv03' on;
  
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg01};
  background: linear-gradient(to right, rgba(0, 0, 0, 0.833) 0 100%), url('${BackgroundImg}') no-repeat fixed;
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;

}
`
