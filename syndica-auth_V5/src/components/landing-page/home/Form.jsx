import React from 'react'

import '../../../css/landing-page/home/form.css'

const Form = () => {
  return (
    <form action="">
            <input type="text" name="" id="" placeholder="Enter Tracking Number"/>
            <button type="submit" className="button-responsive-mobile">
                <svg viewBox="0 0 20.00 20.00" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path fill="#000000" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> 
                    </g>
                </svg>
            </button>
        <button className="button-desktop" type="submit">TRACK</button>
    </form>
  )
}

export default Form