import { AppProps } from "next/app"
import Link from "next/link";
import Image from 'next/image'

import logoImg from '@/assets/logo.svg'
import ButtonBag from "./components/ButtonBag"

import { globalStyles } from '@/styles/global'
import { Container, Header } from "@/styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" priority={false} />
        </Link>


        <ButtonBag />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}