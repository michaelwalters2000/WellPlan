import React, { useState } from 'react'
import ClientForm from "./ClientForm"

const ClientFormContainer = props => {
  let newClient = props.newClient;
  let setNewClient = props.setNewClient;

  const [spouse, setSpouse] = useState(<div></div>)
  const [kids, setKids] = useState(<div></div>)
  const [home, setHome] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)
  const [fourOne, setFourOne] = useState(<div></div>)
  const [inPerson, setInPerson] = useState(<div></div>)

  // $(document).ready(function(){
  // $("button").click(function(){

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
    <div className="inline">
    <ul className="inline-options">
    <div>
      <input name="spousesincome" onClick={props.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="7"/>
      <label htmlFor="7" className="radio"><span>Less than $50,000<br/></span></label>
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
      <label htmlFor="10" className="radio"><span>Greater than $200,000</span></label>
    </div>
      </ul>
      </div>
      </div>
     </div>
   )
  }

  const handleInPerson = event => {
    setInPerson(
      <div className="center-input">
        <label className="" htmlFor="zip">Zip Code</label><br/>
        <input className="short-input-bar" id="zip" type="text" name="zip" maxLength="5"/>
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

  const handleHomeTrue = event => {
    setHome(
    <div className="question">
      <div className="center-question">
        <label>Value of equity in your home ?</label>
      </div>
      <div className="question-answer">
        <div className="inline">
          <ul className="inline-options">
        <div>
          <input name="equity" onClick={props.equityInput} type="radio" value="< $0" id="0"/>
          <label className="equity-title" htmlFor="0" className="radio"><span>Less than $0<br/></span></label>
        </div>
      <div>
        <input name="equity" onClick={props.equityInput} type="radio" value="$0 - $200,000" id="1"/>
        <label className="equity-title-2" htmlFor="1" className="radio"><span>$0 - $200,000</span></label>
      </div>
      <div>
        <input name="equity" onClick={props.equityInput} type="radio" value="$200,000 <" id="2"/>
        <label className="equity-title" htmlFor="2" className="radio"><span>Greater than $200,000</span></label>
      </div>
    </ul>
  </div>
  </div>
  <div className="center-question">
    <label>More than one home ?</label>
  </div>
  <div className="question-answer">
    <div className="inline">
      <ul className="inline-options">
        <div>
          <input onChange={props.handleMoreTrue} value={newClient.morethan1home} type="radio" value="none" id="radio_26" name="morethan1home"/>
          <label htmlFor="radio_26" className="radio"><span>Yes</span></label>
        </div>
        <div>
          <input onChange={props.handleMoreFalse} value={newClient.morethan1home} type="radio" value="none" id="radio_27" name="morethan1home"/>
          <label htmlFor="radio_27" className="radio"><span>No</span></label>
        </div>
      </ul>
    </div>
  </div>
  </div>
);
  }

  const handleHomeFalse = event => {
    setHome(<div></div>);
    setNewClient({
      ...newClient,
      homeowner: "false"
    });
  }

  const handleStockTrue = event => {
    setStocks(
    <div className="question">
      <div className="center-question">
        <label>Value of Stocks / Bonds ?</label>
      </div>
      <div className="question-answer">
        <div className="inline">
          <ul className="inline-options">
            <div>
              <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="15" name="stocksbondsamount"/>
              <label htmlFor="15" className="radio"><span>Less than $250,000</span></label>
            </div>
            <div>
              <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="16" name="stocksbondsamount"/>
              <label htmlFor="16" className="radio"><span>$250,000 - $500,000</span></label>
            </div>
            <div>
              <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="17" name="stocksbondsamount"/>
              <label htmlFor="17" className="radio"><span>$500,000 - $1,000,000</span></label>
            </div>
            <div>
              <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="18" name="stocksbondsamount"/>
              <label htmlFor="18" className="radio"><span>Greater than $1,000,000</span></label>
            </div>
          </ul>
        </div>
      </div>
    </div>
    )
  }

  const handleStockFalse = event => {
    setStocks(<div></div>);
    setNewClient({
      ...newClient,
      stocksbonds: "false"
    })
  }

  const handle401kTrue = event => {
    setFourOne(
      <div className="question">
      <div className="center-question">
      <label>Value of 401k ?</label>
      </div>
      <div className="question-answer">
      <div className="inline">
      <ul className="inline-options">
      <div>
        <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="11" name="retirementamount"/>
        <label htmlFor="11" className="radio"><span>Less than $250,000<br/></span></label>
      </div>
      <div>
        <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="12" name="retirementamount"/>
        <label htmlFor="12" className="radio"><span>$250,000 - $500,000</span></label>
      </div>
      <div>
        <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="13" name="retirementamount"/>
        <label htmlFor="13" className="radio"><span>$500,000 - $1,000,000</span></label>
      </div>
      <div>
        <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="14" name="retirementamount"/>
        <label htmlFor="14" className="radio"><span>Greater than $1,000,000</span></label>
      </div>
        </ul>
        </div>
        </div>
       </div>
    )
  }

  const handle401kFalse = event => {
    setFourOne(<div></div>);
    setNewClient({
      ...newClient,
      retirement: "false"
    })
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
      handleHomeTrue={handleHomeTrue}
      handleHomeFalse={handleHomeFalse}
      handleStockTrue={handleStockTrue}
      handleStockFalse={handleStockFalse}
      handle401kTrue={handle401kTrue}
      handle401kFalse={handle401kFalse}
      fourOne={fourOne}
      stocks={stocks}
      home={home}
      kids={kids}
      spouse={spouse}
      handleInPerson={handleInPerson}
      inPerson={inPerson} />
  )
}

  export default ClientFormContainer
