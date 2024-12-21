import React from 'react'

const Card = (props) => {

    return (
        <div className='mr-8 bg-white text-black inline-block p-6 text-center rounded'>
            <img className='ml-8 h-32 w-32 rounded-full' src="" alt="" />
            <h1 className='text-2xl text-black font-semibold mb-4'>{props.name}</h1>
            <h2>{props.city}, {props.age}</h2>
            <button className='mt-5 bg-emerald-900 text-white p-4'> Add Friend </button>
        </div>
    )

}

export default Card