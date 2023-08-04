import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from './Landing/landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const render = () => {
    return <Landing />;
  };

  return render();
}
