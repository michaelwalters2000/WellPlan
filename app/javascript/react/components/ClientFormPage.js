import React, { useState, useEffect } from 'react'
import ClientFormIndex from "./ClientFormIndex"

const ClientFormPage = (props) => {
  const [kids, setKids] = useState(<div></div>);
  const [income, setIncome] = useState(<div></div>);
  let income1 = "< $50,000"
  let income2 = "$50,000 - $100,000"
  let income3 = "$100,000 - $200,000"
  let income4 = "$200,000 <"

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

  function handleSpouseAnswer() {
    setIncome(
      <div class="question">
      <div className="center-question">
      <label>Spouse's Income Bracket?</label>
      </div>
      <div className="income">
      <ul className="income-options">
      <div>
        <input  type="radio" value="none" id="radio_9" name="bracket"/>
        <label className="income-bracket-title" for="radio_9" class="radio"><span>{income1}<br/></span></label>
      </div>
      <div>
        <input type="radio" value="none" id="radio_10" name="bracket"/>
        <label className="income-bracket-title" for="radio_10" for="radio_10" class="radio"><span>{income2}</span></label>
      </div>
      <div>
        <input  type="radio" value="none" id="radio_11" name="bracket"/>
        <label className="income-bracket-title" for="radio_11" for="radio_11" class="radio"><span>{income3}</span></label>
      </div>
      <div>
        <input  type="radio" value="none" id="radio_12" name="bracket"/>
        <label className="income-bracket-title" for="radio_12" for="radio_12" class="radio"><span>{income4}</span></label>
      </div>
        </ul>
        </div>
       </div>
    )
  }

  function handleNoSpouseAnswer() {
    setIncome(<div></div>)
  }


  return(
    <div>
    <ClientFormIndex
      handleKidsAnswer={handleKidsAnswer}
      handleNoKidsAnswer={handleNoKidsAnswer}
      kids={kids}
      handleSpouseAnswer={handleSpouseAnswer}
      handleNoSpouseAnswer={handleNoSpouseAnswer}
      spouseincome={income} />
      </div>
  )
}

export default ClientFormPage
