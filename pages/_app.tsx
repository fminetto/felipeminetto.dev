import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { IThemeProps } from 'interfaces/theme'
import DefaultTheme from 'themes/default'

const GlobalStyle = createGlobalStyle<IThemeProps>`
body {
  background-color: ${props => props.theme.colors.default};
}`

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content={DefaultTheme.colors.default} />
      <meta name="description" content="A simple backend developer's website" />
      <meta name="keywords" content="software, development, blog, react, typescript, javascript, aws" />
      <meta name="author" content="Felipe Minetto" />
      <link rel="manifest" href="app.manifest" />
      <title>Felipe Minetto</title>
    </Head>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
