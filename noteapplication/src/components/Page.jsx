import React, { useState } from 'react'

const Page = () => {
const [heading, setHeading] = useState('')
const [details, setDetails] = useState('')
const [note, setNote] = useState([])

  function formSubmit (e){
    e.preventDefault()
    if(heading.trim() == '' || details.trim() == ''){
      alert("Please Fill the required filled")
    }else {
    

    console.log("form submited")
    const copyNote = [...note]
    copyNote.push({heading,details})
    setNote(copyNote)
    console.log(copyNote);
    console.log(note);

    setHeading('')
    setDetails('')     
    }
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
      <button className='bg-blue-500 mx-4 rounded-2xl py-1 px-4 active:scale-95'>Add</button>
    </form>

    <div className='text-amber-500 p-4 md:max-w-1/2'>
      <h2  className='text-center font-bold text-2xl'>Your Notes:</h2>
      <div className='mt-4 flex w-full flex-wrap justify-start items-start  gap-2'>
        {note.map((elem,idx)=>{
          return <div key={idx} className='bg-green-200  relative h-52 w-47
          rounded-2xl '>
            <img className='  overflow-hidden h-full w-full rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJrVQ0wfvx5D2VwBRYH8HBUNVv7rx5Xtf18At-6u8mQ&s=10" alt="" />
            <div className='px-3 py-4 absolute top-0 left-0'>
            <h3 className='text-2xl font-bold  text-black  '>{elem.heading}:</h3>
            <p className='text-blue-800 mt-2'>{elem.details}</p>  
            </div>
          </div>

        })}

        
        
      </div>
    </div>

    </div>
  )
}

export default Page