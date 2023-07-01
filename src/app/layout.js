
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import { StateProvider } from './Context/StateProvider'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <StateProvider  >
        <Header />
        <Sidebar />
        {children}
        </StateProvider>
      </body>
    </html>
  )
}
