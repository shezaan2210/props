import React, { useRef } from 'react'

const Input = (props) => {
    let show = useRef()

    const change = (e)=>{
        const inp = show.current
        if(inp.value.length <  8){
            console.log(inp)
            inp.style.border = '1px solid red'
            // inp.className='border-[1px] border-red-400]'
        }
        else{
            inp.style.border = '1px solid black'
        }
    }

  return (
  <>
  <input onChange={change} ref={show}  className='outline-none' {...props}/>
  
  </>
  )
}

export default Input