import Navigation from '@/components/Navigation'
import { nunitoSans } from './font'
import './globals.css'

export const metadata = {
  title: 'Paises rest api nextjs',
  description: 'Reto de fonrtend mentor'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={nunitoSans.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
