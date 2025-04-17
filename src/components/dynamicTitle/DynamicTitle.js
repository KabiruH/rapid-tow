// components/DynamicTitle.js
import { usePathname } from 'next/navigation'
import Head from 'next/head'

export default function DynamicTitle() {
  const pathname = usePathname()
  
  const getTitleFromPath = (path) => {
    switch(path) {
      case '/services':
        return 'Towing & Roadside Services in Texas - Rapid Tow Recovery'
      case '/about':
        return 'About Our Texas Towing Company - Rapid Tow Recovery'
      default:
        return 'Rapid Tow Recovery - 24/7 Emergency Towing Services in Texas'
    }
  }
  
  return (
    <Head>
      <title>{getTitleFromPath(pathname)}</title>
    </Head>
  )
}