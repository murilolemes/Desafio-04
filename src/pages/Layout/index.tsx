import { Header } from '@/styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import logoImg from '@/assets/logo.svg'
import ButtonBag from '../components/ButtonBag'

export default function Layout() {
  const { pathname } = useRouter()

  return (
    <Header pathName={pathname === '/success'}>
      <Link href={'/'}>
        <Image src={logoImg} alt="" priority={false} />
      </Link>

      <ButtonBag />
    </Header>
  )
}