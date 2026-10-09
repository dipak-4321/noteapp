import React, { useState } from 'react'

const Page = () => {
const [heading, setHeading] = useState('')
const [details, setDetails] = useState('')

  function formSubmit (e){
    e.preventDefault()
      console.log("form submited")
  }
  return (
    <div id="main" className='w-full md:flex-row  flex flex-col'>

    <form className='flex flex-col  gap-4 p-4 md:w-1/2 h-dvh  text-white' action="" 
    onSubmit={(e)=>{
      formSubmit(e)

    }}>
      <h1 className='text-center font-bold text-2xl'>Note App</h1>
      <input value={heading} className="py-2 px-3 border-2 border-white outline-none rounded-2xl" type="text" placeholder='Enter Your Title'
       onChange={(e)=>{
        setHeading(e.target.value)

      }}/>
      <textarea value={details} className="py-2 px-3  border-white border-2 outline-none rounded-2xl h-34" name="" id="" placeholder='Add you note'
      onChange={(e)=>{
        setDetails(e.target.value)
      }}></textarea>
      <button className='bg-blue-500 mx-4 rounded-2xl py-1 px-4 '>Add</button>
    </form>

    <div className='text-amber-500 p-4'>
      <h2  className='text-center font-bold text-2xl'>Your Notes:</h2>
      <div className='mt-4'>
        <div className='bg-green-200 py-1 px-2 text-pink-500 h-30 w-25 rounded-2xl'>

        </div>
        
      </div>
    </div>

    </div>
  )
}

export default Page