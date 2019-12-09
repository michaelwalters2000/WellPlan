import React, { useState, useEffect } from 'react'

const ClientForm = props => {
  let income1 = "< $50,000"
  let income2 = "$50,000 - $100,000"
  let income3 = "$100,000 - $200,000"
  let income4 = "$200,000 <"
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
           <input onClick={props.handleKidsAnswer} onChange={props.handleRadioTrue} type="radio" value={newClient.kids} id="radio_3" name="kids"/>
           <label htmlFor="radio_3" className="radio"><span>Yes</span></label>
         </div>
         <div>
           <input onClick={props.handleNoKidsAnswer} onChange={props.handleRadioFalse} type="radio" value={newClient.kids} id="radio_4" name="kids"/>
           <label htmlFor="radio_4" className="radio"><span>No</span></label>
         </div>
       </div>
     </div>
   </div>
   <div>{props.kids}</div>
   <div className="question">
   <div className="center-question">
     <label>Are you a Home Owner ?</label>
   </div>
   <div className="checkboxes">
     <div className="question-answer">
       <div>
         <input onClick={props.handleHomeOwner} onChange={props.handleRadioTrue} value={newClient.home_owner} type="radio" id="radio_5" name="home_owner"/>
         <label htmlFor="radio_5" className="radio"><span>Yes</span></label>
       </div>
       <div>
         <input onClick={props.handleNoHomeOwner} onChange={props.handleRadioFalse} value={newClient.home_owner} type="radio" id="radio_6" name="home_owner"/>
         <label htmlFor="radio_6" className="radio"><span>No</span></label>
       </div>
     </div>
   </div>
 </div>
 <div>{props.equity}</div>
 <div className="question">
      <div className="center-question">
        <label>Are you a Business Owner ?</label>
      </div>
      <div className="checkboxes">
        <div className="question-answer">
          <div>
            <input onChange={props.handleRadioTrue} value={newClient.business_owner} type="radio" value="none" id="radio_7" name="business_owner"/>
            <label htmlFor="radio_7" className="radio"><span>Yes</span></label>
          </div>
            <div>
              <input onChange={props.handleRadioFalse} value={newClient.business_owner} type="radio" value="none" id="radio_8" name="business_owner"/>
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
          <input onChange={props.handleIncomeOne} type="radio" value={newClient.income} id="radio_9" name="income"/>
          <label htmlFor="radio_9" className="radio"><span>{income1}<br/></span></label>
        </div>
        <div>
          <input onChange={props.handleIncomeTwo} type="radio" value={newClient.income} id="radio_10" name="income"/>
          <label htmlFor="radio_10" className="radio"><span>{income2}</span></label>
        </div>
        <div>
          <input onChange={props.handleIncomeThree} type="radio" value={newClient.income} id="radio_11" name="income"/>
          <label htmlFor="radio_11" className="radio"><span>{income3}</span></label>
        </div>
        <div>
          <input onChange={props.handleIncomeFour} type="radio" value={newClient.income} id="radio_12" name="income"/>
          <label htmlFor="radio_12" className="radio"><span>{income4}</span></label>
        </div>
          </ul>
          </div>
         </div>
         <div>{props.spouseincome}</div>
         <div className="question">
           <div className="center-question">
             <label>Do you have a 401k ?</label>
           </div>
           <div className="checkboxes">
             <div className="question-answer">
               <div>
                 <input onClick={props.handle401k} onChange={props.handleRadioTrue} type="radio" value={newClient.four_o_onek} id="radio_13" name="four_o_onek"/>
                 <label htmlFor="radio_13" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input onClick={props.handleNo401k} onChange={props.handleRadioFalse} type="radio" value={newClient.four_o_onek} id="radio_14" name="four_o_onek"/>
                 <label htmlFor="radio_14" className="radio"><span>No</span></label>
               </div>
             </div>
           </div>
         </div>
         <div>{props.four}</div>
         <div className="question">
           <div className="center-question">
             <label>Do you have Individual Stocks or Bonds ?</label>
           </div>
           <div className="checkboxes">
             <div className="question-answer">
               <div>
                 <input onClick={props.bonds} onChange={props.handleRadioTrue} type="radio" value={newClient.stocks_and_bonds} id="radio_15" name="stocks_and_bonds"/>
                 <label htmlFor="radio_15" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input onClick={props.noBonds} onChange={props.handleRadioFalse} type="radio" value={newClient.stocks_and_bonds} id="radio_16" name="stocks_and_bonds"/>
                 <label htmlFor="radio_16" className="radio"><span>No</span></label>
               </div>
             </div>
           </div>
         </div>
         <div>{props.stocks}</div>
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
