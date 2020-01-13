import React, { useState, useEffect } from 'react'

const ClientForm = props => {
  let lessGreaterThan = "<"
  let newClient = props.newClient
  let radio = "false"
  const radioClick = event => {
    let radio = "true"
  }
 let a = ".question-answer label.radio:before"
  return (
    <div className="testbox">
      <form onSubmit={props.handleClientSubmit} action="/">
        <div className="banner">
          <h1>Client Signup</h1>
        </div>
      <br/>
      <br/>
      <div className="center-input">
        <label htmlFor="age">Age</label><br/>
        <input className="short-input-bar" name="age" value={newClient.age} onChange={props.handleFieldChange} id="age" type="number" min="18" max="120"/>
      </div>
    <div className="question">
      <div className="center-question">
        <label>Are you Planning with a Spouse / Partner ?</label>
      </div>
      <div className="question-answer">
        <div className="inline">
          <ul className="inline-options">
            <div>
              <input onClick={props.handleSpouseTrue} type="radio" value={newClient.spouse} id="radio_1" name="spouse"/>
              <label htmlFor="radio_1" className="radio"><span>Yes</span></label>
            </div>
            <div>
              <input onClick={props.handleSpouseFalse} onChange={radioClick} type="radio" value={newClient.spouse} id="radio_2" name="spouse"/>
              <label htmlFor="radio_2" className="radio"><span>No</span></label>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div className="question">
     <div className="center-question">
       <label>Do you have Kids ?</label>
     </div>
       <div className="question-answer">
       <div className="inline">
         <ul className="inline-options">
         <div>
           <input onChange={props.handleKidsTrue} type="radio" value={newClient.kids} id="radio_3" name="kids"/>
           <label htmlFor="radio_3" className="radio"><span>Yes</span></label>
         </div>
         <div>
           <input onChange={props.handleKidsFalse} type="radio" value={newClient.kids} id="radio_4" name="kids"/>
           <label htmlFor="radio_4" className="radio"><span>No</span></label>
         </div>
         </ul>
       </div>
     </div>
   </div>
   <div>{props.kids}</div>
   <div className="question">
   <div className="center-question">
     <label>Are you a Home Owner ?</label>
   </div>
     <div className="question-answer">
     <div className="inline">
       <ul className="inline-options">
       <div>
         <input onChange={props.handleHomeTrue} value={newClient.homeowner} type="radio" id="radio_5" name="homeowner"/>
         <label htmlFor="radio_5" className="radio"><span>Yes</span></label>
       </div>
       <div>
         <input onChange={props.handleHomeFalse} value={newClient.homeowner} type="radio" id="radio_6" name="homeowner"/>
         <label htmlFor="radio_6" className="radio"><span>No</span></label>
       </div>
       </ul>
     </div>
   </div>
 </div>
<div>{props.home}</div>
 <div className="question">
      <div className="center-question">
        <label>Are you a Business Owner ?</label>
      </div>
        <div className="question-answer">
        <div className="inline">
          <ul className="inline-options">
          <div>
            <input onChange={props.handleRadioTrue} value={newClient.businessowner} type="radio" value="none" id="radio_7" name="businessowner"/>
            <label htmlFor="radio_7" className="radio"><span>Yes</span></label>
          </div>
            <div>
              <input onChange={props.handleRadioFalse} value={newClient.businessowner} type="radio" value="none" id="radio_8" name="businessowner"/>
              <label htmlFor="radio_8" className="radio"><span>No</span></label>
            </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="question">
      <div className="center-question">
        <label>Income Bracket ?</label>
        </div>
        <div className="question-answer">
        <div className="inline">
        <ul className="inline-options">
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="3" name="income"/>
          <label htmlFor="3" className="radio"><span>{lessGreaterThan} $50,000<br/></span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="4" name="income"/>
          <label htmlFor="4" className="radio"><span>$50,000 - $100,000</span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="5" name="income"/>
          <label htmlFor="5" className="radio"><span>$100,000 - $200,000</span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" value={newClient.income} id="6" name="income"/>
          <label htmlFor="6" className="radio"><span>$200,000 {lessGreaterThan}</span></label>
        </div>
          </ul>
          </div>
          </div>
         </div>
         <div>{props.spouse}</div>
         <div className="question">
           <div className="center-question">
             <label>Do you have a 401k ?</label>
           </div>
             <div className="question-answer">
             <div className="inline">
               <ul className="inline-options">
               <div>
                 <input onClick={props.handle401kTrue} onChange={props.handle401kBoolean} type="radio" value={newClient.retirement} id="50" name="retirement"/>
                 <label htmlFor="50" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input onClick={props.handle401kFalse} onChange={props.handle401kBoolean} type="radio" value={newClient.retirement} id="51" name="retirement"/>
                 <label htmlFor="51" className="radio"><span>No</span></label>
               </div>
               </ul>
             </div>
           </div>
         </div>
         <div>{props.fourOne}</div>
         <div className="question">
           <div className="center-question">
             <label>Do you have Individual Stocks or Bonds ?</label>
           </div>
             <div className="question-answer">
             <div className="inline">
               <ul className="inline-options">
               <div>
                 <input onClick={props.handleStockTrue} onChange={props.handleStocksBoolean} type="radio" value={newClient.stocksbonds} id="52" name="stocksbonds"/>
                 <label htmlFor="52" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input onClick={props.handleStockFalse} onChange={props.handleStocksBoolean} type="radio" value={newClient.stocksbonds} id="53" name="stocksbonds"/>
                 <label htmlFor="53" className="radio"><span>No</span></label>
               </div>
               </ul>
             </div>
           </div>
         </div>
         <div>{props.stocks}</div>
         <div className="question">
           <div className="center-question">
             <label>Do you have a Pension or Annuities ?</label>
           </div>
             <div className="question-answer">
             <div className="inline">
               <ul className="inline-options">
               <div>
                 <input onChange={props.handlePensionInput} type="radio" id="54" name="pension"/>
                 <label htmlFor="54" className="radio"><span>Yes</span></label>
               </div>
                 <div>
                   <input onChange={props.handlePensionInput} type="radio" id="55" name="pension"/>
                   <label htmlFor="55" className="radio"><span>No</span></label>
                 </div>
                 </ul>
               </div>
             </div>
           </div>

      <div className="btn-block">
         <button type="submit" onClick={props.handleScore} href="/">Submit</button>
       </div>
     </form>
   </div>
      )
    }

export default ClientForm
