import React, { useState } from 'react'

const Page = () => {
const [heading, setHeading] = useState('')
const [details, setDetails] = useState('')
const [note, setNote] = useState([])

  function formSubmit (e){
    e.preventDefault()
    console.log(e)

    console.log("form submited")
    const copyNote = [...note]
    copyNote.push({heading,details})
    setNote(copyNote)
    console.log(copyNote);
    console.log(note);

    setHeading('')
    setDetails('')     
    
  }
  return (
    <div id="main" className='w-full md:flex-row  flex flex-col'>

    <form className='flex flex-col  gap-4 p-4 md:w-1/2 min-h-screen  text-white' action="" 
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

    <div className='text-amber-500 p-4 md:max-w-1/2'>
      <h2  className='text-center font-bold text-2xl'>Your Notes:</h2>
      <div className='mt-4 flex w-full flex-wrap justify-start items-start gap-2'>
        {note.map((elem,idx)=>{
          return <div key={idx} className='bg-green-200 py-2 px-3 pt-5  h-52 w-40 
          rounded-2xl'>
            <h3 className='text-2xl bold text-black '>{elem.heading}:</h3>
            <p className='text-green-500 mt-2'>{elem.details}</p>  
          </div>

        })}

        
        
      </div>
    </div>

    </div>
  )
}

export default Page