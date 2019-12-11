import React, { useState, useEffect } from 'react'

const ClientForm = props => {
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
  let newClient = props.newClient

  return (
    <div className="testbox">
      <form onSubmit={props.handleClientSubmit} action="/">
        <div className="banner">
          <h1>Volunteer Signup</h1>
        </div>
      <br/>
    <p>The HELP Group is seeking volunteers to serve our community. Fill in the inhtmlFormation below to indicate how you would like to become involved.</p>
      <br/>
      <div className="item">
        <label htmlFor="age">Age<span>*</span></label>
        <input onChange={props.handleFieldChange} value={newClient.age} id="age" type="number" min="18" max="120" name="age" required/>
      </div>
      <div className="question">
      <div className="center-question">
        <label>Are you Planning with a Spouse / Partner ?</label>
      </div>
      <div className="checkboxes">
        <div className="question-answer">
          <div>
            <input onClick={props.handleSpouseAnswer} onChange={props.handleRadioTrue} type="radio" value={newClient.spouse} id="radio_1" name="spouse"/>
            <label htmlFor="radio_1" className="radio"><span>Yes</span></label>
          </div>
          <div>
            <input onClick={props.handleNoSpouseAnswer} onChange={props.handleRadioFalse} type="radio" value={newClient.spouse} id="radio_2" name="spouse"/>
            <label htmlFor="radio_2" className="radio"><span>No</span></label>
          </div>
        </div>
      </div>
    </div>
    <div className="question">
     <div className="center-question">
       <label>Do you have Kids ?</label>
     </div>
     <div className="checkboxes">
       <div className="question-answer">
         <div>
           <input onChange={props.handleRadioTrue} type="radio" value={newClient.kids} id="radio_3" name="kids"/>
           <label htmlFor="radio_3" className="radio"><span>Yes</span></label>
         </div>
         <div>
           <input onChange={props.handleRadioFalse} type="radio" value={newClient.kids} id="radio_4" name="kids"/>
           <label htmlFor="radio_4" className="radio"><span>No</span></label>
         </div>
       </div>
     </div>
   </div>
   <div className="center-question">
    <label>Number of Kids</label>
    <div className="kids-options">
    <ul className="kids-ages-options">
    <li><p>Ages (0-5)</p>
     <select>
       <option selected onChange={props.handleFieldChange} value={newClient.kids0to5} selected></option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6+">6+</option>
     </select></li>
     </ul>
     </div>
     <div className="kids-options">
     <ul className="kids-ages-options">
     <li><p>Ages (6-12)</p>
      <select>
        <option selected onChange={props.handleFieldChange} value={newClient.kids0to5} selected></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6+">6+</option>
      </select></li>
      </ul>
      </div>
    </div>
   <div className="question">
   <div className="center-question">
     <label>Are you a Home Owner ?</label>
   </div>
   <div className="checkboxes">
     <div className="question-answer">
       <div>
         <input onChange={props.handleRadioTrue} value={newClient.homeowner} type="radio" id="radio_5" name="homeowner"/>
         <label htmlFor="radio_5" className="radio"><span>Yes</span></label>
       </div>
       <div>
         <input onChange={props.handleRadioFalse} value={newClient.homeowner} type="radio" id="radio_6" name="homeowner"/>
         <label htmlFor="radio_6" className="radio"><span>No</span></label>
       </div>
     </div>
   </div>
 </div>
 <div className="question">
 <div className="center-question">
 <label>Home Equity Amount ?</label>
 </div>
 <div className="income">
 <ul className="equity-options">
 <div>
   <input onClick={props.equityInput} type="radio" value={newClient.equity} id="0" name="equity"/>
   <label className="equity-title" htmlFor="0" className="radio"><span>{equity1}<br/></span></label>
 </div>
 <div>
   <input onClick={props.equityInput} type="radio" value={newClient.equity} id="1" name="equity"/>
   <label className="equity-title-2" htmlFor="1" className="radio"><span>{equity2}</span></label>
 </div>
 <div>
   <input onClick={props.equityInput} type="radio" value={newClient.equity} id="2" name="equity"/>
   <label className="equity-title" htmlFor="2" className="radio"><span>{income4}</span></label>
 </div>
   </ul>
   </div>
    <div className="center-question">
      <label>More than one Home ?</label>
    </div>
    <div className="checkboxes">
      <div className="question-answer">
        <div>
          <input onChange={props.handleRadioTrue} value={newClient.morethan1home} type="radio" value="none" id="radio_26" name="morethan1home"/>
          <label htmlFor="radio_26" className="radio"><span>Yes</span></label>
        </div>
        <div>
          <input onChange={props.handleRadioFalse} value={newClient.morethan1home} type="radio" value="none" id="radio_27" name="morethan1home"/>
          <label htmlFor="radio_27" className="radio"><span>No</span></label>
        </div>
      </div>
    </div>
  </div>
 <div className="question">
      <div className="center-question">
        <label>Are you a Business Owner ?</label>
      </div>
      <div className="checkboxes">
        <div className="question-answer">
          <div>
            <input onChange={props.handleRadioTrue} value={newClient.businessowner} type="radio" value="none" id="radio_7" name="businessowner"/>
            <label htmlFor="radio_7" className="radio"><span>Yes</span></label>
          </div>
            <div>
              <input onChange={props.handleRadioFalse} value={newClient.businessowner} type="radio" value="none" id="radio_8" name="businessowner"/>
              <label htmlFor="radio_8" className="radio"><span>No</span></label>
            </div>
          </div>
        </div>
      </div>
      <div className="question">
      <div className="center-question">
        <label>Income Bracket ?</label>
        </div>
        <div className="income">
        <ul className="income-options">
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="3" name="income"/>
          <label htmlFor="3" className="radio"><span>{income1}<br/></span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="4" name="income"/>
          <label htmlFor="4" className="radio"><span>{income2}</span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="5" name="income"/>
          <label htmlFor="5" className="radio"><span>{income3}</span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="6" name="income"/>
          <label htmlFor="6" className="radio"><span>{income4}</span></label>
        </div>
          </ul>
          </div>
         </div>
         <div className="question">
         <div className="center-question">
         <label>Spouse's Income Bracket ?</label>
         </div>
         <div className="income">
         <ul className="income-options">
         <div>
           <input name="spousesincome" onClick={newClient.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="7"/>
           <label htmlFor="7" className="radio"><span>{income1}<br/></span></label>
         </div>
         <div>
           <input name="spousesincome" onClick={newClient.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="8"/>
           <label htmlFor="8" className="radio"><span>{income2}</span></label>
         </div>
         <div>
           <input name="spousesincome" onClick={newClient.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="9"/>
           <label htmlFor="9" className="radio"><span>{income3}</span></label>
         </div>
         <div>
           <input name="spousesincome" onClick={newClient.spouseIncomeInput} type="radio" value={newClient.spousesincome} id="10"/>
           <label htmlFor="10" className="radio"><span>{income4}</span></label>
         </div>
           </ul>
           </div>
          </div>
         <div className="question">
           <div className="center-question">
             <label>Do you have a 401k ?</label>
           </div>
           <div className="checkboxes">
             <div className="question-answer">
               <div>
                 <input onChange={props.handleRadioTrue} type="radio" value={newClient.retirement} id="radio_13" name="retirement"/>
                 <label htmlFor="radio_13" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input onChange={props.handleRadioFalse} type="radio" value={newClient.retirement} id="radio_14" name="retirement"/>
                 <label htmlFor="radio_14" className="radio"><span>No</span></label>
               </div>
             </div>
           </div>
         </div>
         <div className="question">
         <div className="center-question">
         <label>Value of 401k ?</label>
         </div>
         <div className="income">
         <ul className="income-options">
         <div>
           <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="11" name="retirementamount"/>
           <label htmlFor="11" className="radio"><span>{four_o_one_k1}<br/></span></label>
         </div>
         <div>
           <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="12" name="retirementamount"/>
           <label htmlFor="12" className="radio"><span>{four_o_one_k2}</span></label>
         </div>
         <div>
           <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="13" name="retirementamount"/>
           <label htmlFor="13" className="radio"><span>{four_o_one_k3}</span></label>
         </div>
         <div>
           <input onChange={props.inputOf401kValue} type="radio" value={newClient.retirementamount} id="14" name="retirementamount"/>
           <label htmlFor="14" className="radio"><span>{four_o_one_k4}</span></label>
         </div>
           </ul>
           </div>
          </div>
         <div className="question">
           <div className="center-question">
             <label>Do you have Individual Stocks or Bonds ?</label>
           </div>
           <div className="checkboxes">
             <div className="question-answer">
               <div>
                 <input onClick={props.bonds} onChange={props.handleRadioTrue} type="radio" value={newClient.stocksbonds} id="radio_15" name="stocksbonds"/>
                 <label htmlFor="radio_15" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input onClick={props.noBonds} onChange={props.handleRadioFalse} type="radio" value={newClient.stocksbonds} id="radio_16" name="stocksbonds"/>
                 <label htmlFor="radio_16" className="radio"><span>No</span></label>
               </div>
             </div>
           </div>
         </div>
         <div className="question">
         <div className="center-question">
         <label>Value of Stocks / Bonds ?</label>
         </div>
         <div className="income">
         <ul className="income-options">
         <div>
           <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="15" name="stocksbondsamount"/>
           <label htmlFor="15" className="radio"><span>{four_o_one_k1}</span></label>
         </div>
         <div>
           <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="16" name="stocksbondsamount"/>
           <label htmlFor="16" className="radio"><span>{four_o_one_k2}</span></label>
         </div>
         <div>
           <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="17" name="stocksbondsamount"/>
           <label htmlFor="17" className="radio"><span>{four_o_one_k3}</span></label>
         </div>
         <div>
           <input onChange={props.stocksBondsInput} type="radio" value={newClient.stocksbondsamount} id="18" name="stocksbondsamount"/>
           <label htmlFor="18" className="radio"><span>{four_o_one_k4}</span></label>
         </div>
           </ul>
           </div>
          </div>
         <div className="question">
           <div className="center-question">
             <label>Do you have a Pension or Annuities ?</label>
           </div>
           <div className="checkboxes">
             <div className="question-answer">
               <div>
                 <input onChange={props.handleRadioTrue} value={newClient.pension} type="radio" id="radio_17" name="pension"/>
                 <label htmlFor="radio_17" className="radio"><span>Yes</span></label>
               </div>
                 <div>
                   <input onChange={props.handleRadioFalse} value={newClient.pension} type="radio" id="radio_18" name="pension"/>
                   <label htmlFor="radio_18" className="radio"><span>No</span></label>
                 </div>
               </div>
             </div>
           </div>

      <div className="btn-block">
         <button type="submit" href="/">Submit</button>
       </div>
     </form>
   </div>
      )
    }

export default ClientForm
