import React from 'react'
import NavBarProfile from '../components/NavBarProfile'
import Cards from '../components/Cards'

const work = () => {
  return (
    <div>
        <NavBarProfile />
        <div className='flex justify-between py-3 px-6 bg-gray-50 border-b'>
          <form action=''>
            <input type='text' name='search' placeholder='Buscar' autocomplete='off' aria-label='Buscar' className='px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'/>
          </form>
        </div>
        <Cards />
    </div>
  )
}

export default work