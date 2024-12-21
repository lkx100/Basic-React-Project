import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-emerald-900 flex px-3 py-5 items-center justify-between'>
            <h2 className='text-3xl'>AceCoder</h2>
            <div className='flex gap-8 items-center'>
                <h4 className='text-xl'>Home</h4>
                <h4 className='text-xl'>About</h4>
                <h4 className='text-xl'>Contact</h4>
            </div>
        </nav>
    )
}

export default Navbar