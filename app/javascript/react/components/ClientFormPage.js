import React, { useState, useEffect } from 'react'
import ClientFormIndex from "./ClientFormIndex"

const ClientFormPage = (props) => {
  const [kids, setKids] = useState(<div></div>);

  function handleKidsAnswer() {
         setKids(
           <div id="numberofkids" className="numberofkids" class="item">
             <label>Number of Kids</label>
             <nobr>
             <p>Ages (0-5)</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6+">6+</option>
               </select>
             <p>Ages (6-12)</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1" >1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6+">6+</option>
               </select>
            <p>Ages (13-18)</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1" >1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6+">6+</option>
               </select>
               </nobr>
            </div>)
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
