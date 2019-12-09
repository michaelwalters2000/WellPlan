import React, { useState } from 'react'
import ClientForm from "./ClientForm"



const ClientFormContainer = props => {
  const [kids, setKids] = useState(<div></div>);
  const [kidsOne, setKidsOne] = useState(<div></div>);
  const [kidsTwo,setKidsTwo] = useState(<div></div>);
  const [kidsThree,setKidsThree] = useState(<div></div>);
  const [income, setIncome] = useState(<div></div>);
  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)
  let newClient = props.newClient

  let income1 = "< $50,000"
  let income2 = "$50,000 - $100,000"
  let income3 = "$100,000 - $200,000"
  let income4 = "$200,000 <"

  let equity1 = "< $0"
  let equity2 = "$0 - $200,000"

  let four_o_one_k1 = "< $250,000"
  let four_o_one_k2 = "$250,000 - $500,000"
  let four_o_one_k3 = "$500,000 - $1,000,000"
  let four_o_one_k4 = "$1,000,000 <"

  const handleEquityOne = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: equity1
    })
  }

  const handleEquityTwo = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: equity2
    })
  }

  const handleIncomeFour = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: income4
    })
  }







  function handleKidsAnswer() {
    function handleKidsOne() {
      setKidsOne(<li><p>Ages (0-5)</p>
        <select name="kids_0to5" onChange={props.handleFieldChange} value={props.kids_0to5}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6+">6+</option>
        </select></li>
      )
    }
    function handleKidsTwo() {
      setKidsTwo(
        <li><p>Ages (6-12)</p>
        <select name="kids_6to12" onChange={props.handleFieldChange} value={props.kids_6to12}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6+">6+</option>
        </select></li>
      )
    }
    function handleKidsThree() {
      setKidsThree(
        <li><p>Ages (13-18)</p>
        <select name="kids_13to18" onChange={props.handleFieldChange} value={props.kids_13to18}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6+">6+</option>
        </select></li>
      )
    }
         setKids(
           <div className="center-question">
             <label>Number of Kids</label>
             <ul className="kids-ages-options">
                <div>{kidsOne} {kidsTwo} {kidsThree}</div>
               </ul>
            </div>
          )
        }

  function handleNoKidsAnswer() {
    setKids(<div onChange={props.handleFieldChange}></div>);

  }

  function handleSpouseAnswer() {
    setIncome(
      <div className="question">
      <div className="center-question">
      <label>Spouse's Income Bracket ?</label>
      </div>
      <div className="income">
      <ul className="income-options">
      <div>
        <input  onChange={props.handleIncomeOne} type="radio" value={newClient.spouses_income} id="radio_19" name="spouses_income"/>
        <label className="income-bracket-title" htmlFor="radio_19" className="radio"><span>{income1}<br/></span></label>
      </div>
      <div>
        <input onChange={props.handleIncomeTwo} type="radio" value={newClient.spouses_income} id="radio_20" name="spouses_income"/>
        <label className="income-bracket-title" htmlFor="radio_20" className="radio"><span>{income2}</span></label>
      </div>
      <div>
        <input onChange={props.handleIncomeThree} type="radio" value={newClient.spouses_income} id="radio_21" name="spouses_income"/>
        <label className="income-bracket-title" htmlFor="radio_21" className="radio"><span>{income3}</span></label>
      </div>
      <div>
        <input onChange={props.handleIncomeFour} type="radio" value={newClient.spouses_income} id="radio_22" name="spouses_income"/>
        <label className="income-bracket-title" htmlFor="radio_22" className="radio"><span>{income4}</span></label>
      </div>
        </ul>
        </div>
       </div>
    )
  }

  function handleNoSpouseAnswer() {
    setIncome(<div></div>)
  }

  function handleHomeOwner() {
    setEquity(
      <div className="question">
      <div className="center-question">
      <label>Home Equity Amount ?</label>
      </div>
      <div className="income">
      <ul className="equity-options">
      <div>
        <input onChange={props.handleEquityOne} type="radio" value={props.home_equity} id="radio_23" name="home_equity"/>
        <label className="equity-title" htmlFor="radio_23" className="radio"><span>{equity1}<br/></span></label>
      </div>
      <div>
        <input onChange={props.handleEquityTwo} type="radio" value={props.home_equity} id="radio_24" name="home_equity"/>
        <label className="equity-title-2" htmlFor="radio_24" className="radio"><span>{equity2}</span></label>
      </div>
      <div>
        <input onChange={props.handleIncomeFour} type="radio" value={props.home_equity} id="radio_25" name="home_equity"/>
        <label className="equity-title" htmlFor="radio_25" className="radio"><span>{income4}</span></label>
      </div>
        </ul>
        </div>
         <div className="center-question">
           <label>More than one Home ?</label>
         </div>
         <div className="checkboxes">
           <div className="question-answer">
             <div>
               <input onChange={props.handleRadioTrue} value={props.morethan1home} type="radio" value="none" id="radio_26" name="morethan1home"/>
               <label htmlFor="radio_26" className="radio"><span>Yes</span></label>
             </div>
             <div>
               <input onChange={props.handleRadioFalse} value={props.morethan1home} type="radio" value="none" id="radio_27" name="morethan1home"/>
               <label htmlFor="radio_27" className="radio"><span>No</span></label>
             </div>
           </div>
         </div>
       </div>
    )
  }

  function handleNoHomeOwner() {
    setEquity(<div></div>)
  }

  function handle401k() {
    setFour(
      <div className="question">
      <div className="center-question">
      <label>Value of 401k ?</label>
      </div>
      <div className="income">
      <ul className="income-options">
      <div>
        <input onChange={props.handle401kOne} type="radio" value={props.four_o_onek_amount} id="radio_28" name="four_o_onek_amount"/>
        <label htmlFor="radio_28" className="radio"><span>{four_o_one_k1}<br/></span></label>
      </div>
      <div>
        <input onChange={props.handle401kTwo} type="radio" value={props.four_o_onek_amount} id="radio_29" name="four_o_onek_amount"/>
        <label htmlFor="radio_29" className="radio"><span>{four_o_one_k2}</span></label>
      </div>
      <div>
        <input onChange={props.handle401kThree} type="radio" value={props.four_o_onek_amount} id="radio_30" name="four_o_onek_amount"/>
        <label htmlFor="radio_30" className="radio"><span>{four_o_one_k3}</span></label>
      </div>
      <div>
        <input onChange={props.handle401kFour} type="radio" value={props.four_o_onek_amount} id="radio_31" name="four_o_onek_amount"/>
        <label htmlFor="radio_31" className="radio"><span>{four_o_one_k4}</span></label>
      </div>
        </ul>
        </div>
       </div>
    )
  }

  function handleNo401k() {
    setFour(<div></div>)
  }

  function bonds() {
    setStocks(
      <div className="question">
      <div className="center-question">
      <label>Value of Stocks / Bonds ?</label>
      </div>
      <div className="income">
      <ul className="income-options">
      <div>
        <input onChange={props.handle401kOne} type="radio" value={props.stocks_and_bonds_amount} id="radio_32" name="stocks_and_bonds_amountt"/>
        <label htmlFor="radio_32" className="radio"><span>{four_o_one_k1}</span></label>
      </div>
      <div>
        <input onChange={props.handle401kTwo} type="radio" value={props.stocks_and_bonds_amount} id="radio_33" name="stocks_and_bonds_amount"/>
        <label htmlFor="radio_33" className="radio"><span>{four_o_one_k2}</span></label>
      </div>
      <div>
        <input onChange={props.handle401kThree} type="radio" value={props.stocks_and_bonds_amount} id="radio_34" name="stocks_and_bonds_amount"/>
        <label htmlFor="radio_34" className="radio"><span>{four_o_one_k3}</span></label>
      </div>
      <div>
        <input onChange={props.handle401kFour} type="radio" value={props.stocks_and_bonds_amount} id="radio_35" name="stocks_and_bonds_amount"/>
        <label htmlFor="radio_35" className="radio"><span>{four_o_one_k4}</span></label>
      </div>
        </ul>
        </div>
       </div>
    )
  }

  function noBonds() {
    setStocks(<div></div>);
  }

  return(
    <ClientForm
      handleKidsAnswer={handleKidsAnswer}
      handleNoKidsAnswer={handleNoKidsAnswer}
      kids={kids}
      handleSpouseAnswer={handleSpouseAnswer}
      handleNoSpouseAnswer={handleNoSpouseAnswer}
      spouseincome={income}
      handleHomeOwner={handleHomeOwner}
      handleNoHomeOwner={handleNoHomeOwner}
      equity={equity}
      handle401k={handle401k}
      handleNo401k={handleNo401k}
      four={four}
      bonds={bonds}
      stocks={stocks}
      noBonds={noBonds}
      handleClientSubmit={props.handleClientSubmit}
      handleFieldChange={props.handleFieldChange}
      handleRadioTrue={props.handleRadioTrue}
      handleRadioFalse={props.handleRadioFalse}
      handleIncomeOne={props.handleIncomeOne}
      handleIncomeTwo={props.handleIncomeTwo}
      handleIncomeThree={props.handleIncomeThree}
      handleIncomeFour={props.handleIncomeFour}
      newClient={props.newClient} />
  )
}

      export default ClientFormContainer
