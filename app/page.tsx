import { Inter } from 'next/font/google'
import { Button } from '@/components/Buttons'
import { Textbox } from '@/components/Textbox'
import { CheckBox } from '@/components/CheckBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex space-x-2'>
      {/* 
      <Button text='Small' variant='green'/>
      <Button text='Small' variant='neutral'/>
      <Button text='Small' variant='red'/> */}
      <div className='w-[600px] p-2 h-80 bg-white rounded shadow-lg shadow-gray-300'>
      <Textbox name='test' value='my self' label='First name'/>
      <Button text='Enregistrer'/>
      <CheckBox/>
      </div>
    </main>
  )
}
