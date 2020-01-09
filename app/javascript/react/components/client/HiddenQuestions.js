import React, { useState } from 'react'
import ClientForm from "./ClientForm"

const ClientFormContainer = props => {
  let newClient = props.newClient;
  let setNewClient = props.setNewClient;
  let lessGreaterThan = "<"

  const [spouse, setSpouse] = useState(<div></div>)
  const [kids, setKids] = useState(<div></div>)

  const incomeValues = [{key:"< $50,000",value:1},{key:"$50,000 - $100,000",value:2},{key:"$100,000 - $200,000",value:3},{key:"$200,000 <",value:5}]
  const equityValues = [{key:"< $0",value:0},{key:"$0 - $200,000",value:3},{key:"$200,000 <",value:5}]
  const stocks401kValues = [{key:"< $250,000",value:1},{key:"$250,000 - $500,000",value:3},{key:"$500,000 - $1,000,000",value:5},{key:"$1,000,000 <",value:10}]

  const handleSpouseTrue = event => {
    setSpouse(
      <div className="question">
    <div className="center-question">
    <label>Spouse's Income Bracket ?</label>
    </div>
    <div className="question-answer">
    <div className="income">
    <ul className="income-options">
    <div>
      <input name="spousesincome" onClick={props.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="7"/>
      <label htmlFor="7" className="radio"><span>{lessGreaterThan} $50,000<br/></span></label>
    </div>
    <div>
      <input name="spousesincome" onClick={props.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="8"/>
      <label htmlFor="8" className="radio"><span>$50,000 - $100,000</span></label>
    </div>
    <div>
      <input name="spousesincome" onClick={props.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="9"/>
      <label htmlFor="9" className="radio"><span>$100,000 - $200,000</span></label>
    </div>
    <div>
      <input name="spousesincome" onClick={props.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="10"/>
      <label htmlFor="10" className="radio"><span>$200,000 {lessGreaterThan}</span></label>
    </div>
      </ul>
      </div>
      </div>
     </div>
   )
  }

  const handleSpouseFalse = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "false"
    });
    setSpouse(<div></div>);
  }

  const handleKidsTrue = event => {
    setKids(
      <div className="center-question">
       <label>Number of Kids</label>
       <div className="kids-options">
       <ul className="kids-ages-options">
       <li><p>Ages (0-5)</p>
       <select>
      <option></option>
      <option onClick={props.handleKids}> </option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6+">6+</option>
    </select></li>
    <li><p>Ages (6-12)</p>
    <select>
      <option selected onChange={props.handleKids} selected></option>
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6+">6+</option>
    </select></li>
   <li><p>Ages (13-18)</p>
    <select>
      <option selected onChange={props.handleKids} value={newClient.kids13to18} disabled selected></option>
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

  const handleKidsFalse = event => {
    setKids(<div></div>)
  }

  return(
    <ClientForm
      newClient={props.newClient}
      handleClientSubmit={props.handleClientSubmit}
      handleSelectChange={props.handleSelectChange}
      handleSelectValue={props.handleSelectValue}
      handleFieldChange={props.handleFieldChange}
      handleScore={props.handleScore}
      selected={props.selected}
      handleRadioTrue={props.handleRadioTrue}
      handleRadioFalse={props.handleRadioFalse}
      incomeInput={props.incomeInput}
      spouseIncomeInput={props.spouseIncomeInput}
      equityInput={props.equityInput}
      handle401kBoolean={props.handle401kBoolean}
      inputOf401kValue={props.inputOf401kValue}
      handleStocksBoolean={props.handleStocksBoolean}
      stocksBondsInput={props.stocksBondsInput}
      handlePensionInput={props.handlePensionInput}
      handleKids0to5={props.handleKids0to5}
      handleSpouseTrue={handleSpouseTrue}
      handleSpouseFalse={handleSpouseFalse}
      handleKidsTrue={handleKidsTrue}
      handleKidsFalse={handleKidsFalse}
      kids={kids}
      spouse={spouse} />
  )
}

  export default ClientFormContainer
