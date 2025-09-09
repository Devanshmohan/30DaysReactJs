import React from 'react'

export const Eleven = () => {

  let quotes = ["Be yourself; everyone else is already taken.","The only approval you need is your own.","Nothing will work unless you do.","Keep your face always toward the sunshine, and shadows will fall behind you.","I find that the harder I work, the more luck I seem to have.","It is hard to fail but it is worse never to have tried to succeed.","That which does not kill us makes us stronger."];

  const randomIndex = Math.floor(Math.random()*quotes.length);
  let quote = quotes[randomIndex];
  return (
    <div className='h-screen w-full bg-amber-500 flex items-center justify-center'>
    <div className='h-100 w-100 bg-black rounded-2xl text-white text-2xl flex items-center justify-center p-2 shadow-2xl shadow-amber-700'>{quote}</div>
    </div>
  )
}
