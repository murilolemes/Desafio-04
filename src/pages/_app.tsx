import { AppProps } from "next/app"

import { globalStyles } from '@/styles/global'
import { Container, Header } from "@/styles/pages/app"
import Layout from "./Layout";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Layout />

      <Component {...pageProps} />
    </Container>
  )
}