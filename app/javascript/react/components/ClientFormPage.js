import React, { useState, useEffect } from 'react'
import ClientFormIndex from "./ClientFormIndex"

const ClientFormPage = (props) => {
  const [kids, setKids] = useState(<div></div>);

  function handleKidsAnswer() {
         setKids(
           <div className="center-question">
             <label>Number of Kids</label>
             <div className="kids-options">
             <ul className="kids-ages-options">
             <li><p>Ages (0-5)</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6+">6+</option>
               </select></li>
               <li><p>Ages (6-12)</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1" >1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6+">6+</option>
               </select></li>
              <li><p>Ages (13-18)</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1" >1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6+">6+</option>
               </select></li>
               </ul>
               </div>
              </div>
        )
       }

  function handleNoKidsAnswer() {
    setKids(<div></div>)
  }


  return(
    <div>
    <ClientFormIndex
      handleKidsAnswer={handleKidsAnswer}
      handleNoKidsAnswer={handleNoKidsAnswer}
      kids={kids} />
      </div>
  )
}

export default ClientFormPage
