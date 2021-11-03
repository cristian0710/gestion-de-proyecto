import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='bg-green-500'>
      <p>hola mundo, soy nextjs mundo</p>
      <Link href='cristian'>ir a la pagina de cristian</Link>
    </div>
  )
}

export default Home
