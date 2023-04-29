import { Inter } from 'next/font/google'
import { Button } from '@/components/Buttons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex space-x-2'>
      <Button text='Small'/>
      <Button text='Small' variant='green'/>
      <Button text='Small' variant='neutral'/>
      <Button text='Small' variant='red'/>
    </main>
  )
}
