import React, { useState, useEffect } from 'react'

const AdvisorForm = props => {
  let newAdvisor = props.newAdvisor;
  let lessThanOne = "<1"

  return (
    <div className="testbox">
      <form onSubmit={props.handleAdvisorSubmit}>
        <div className="banner">
          <h1>Advisor Signup</h1>
        </div>
      <br/>
    <p>The HELP Group is seeking volunteers to serve our community. Fill in the inhtmlFormation below to indicate how you would like to become involved.</p>
      <br/>
      <div className="item">
        <label htmlFor="client_number">Number of Clients<span>*</span></label>
        <input id="client_number" type="number" name="client_number" />
      </div>
      <div className="center-question">
       <label>Years of Experience</label>
       <div className="kids-options">
       <ul className="kids-ages-options">
       <li>
       <select>
      <option selected name="experienceYears" onClick={props.handleSelectChange} value={newAdvisor.experienceYears} selected></option>
      <option value={lessThanOne}>{lessThanOne}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10+">10+</option>
    </select></li>
    </ul>
    </div>
   </div>
      <div className="question">
      <div className="center-question">
        <label>Are you Planning with a Spouse / Partner ?</label>
      </div>
      <div className="checkboxes">
        <div className="question-answer">
          <div>
            <input type="radio" id="radio_1" name="spouse"/>
            <label htmlFor="radio_1" className="radio"><span>Yes</span></label>
          </div>
          <div>
            <input type="radio" id="radio_2" name="spouse"/>
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
           <input type="radio" id="radio_3" name="kids"/>
           <label htmlFor="radio_3" className="radio"><span>Yes</span></label>
         </div>
         <div>
           <input type="radio" id="radio_4" name="kids"/>
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
   <option selected name="kids0to5" selected></option>
   <option name="kids0to5" onClick={props.handleSelectValue} value="1">1</option>
   <option name="kids0to5" onClick={props.handleSelectValue} value="2">2</option>
   <option name="kids0to5" onClick={props.handleSelectValue} value="3">3</option>
   <option name="kids0to5" onClick={props.handleSelectValue} value="4">4</option>
   <option name="kids0to5" onClick={props.handleSelectValue} value="5">5</option>
   <option name="kids0to5" onClick={props.handleSelectValue} value="6+">6+</option>
 </select></li>
 <li><p>Ages (6-12)</p>
 <select>
   <option selected selected></option>
   <option value="1" >1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="6+">6+</option>
 </select></li>
<li><p>Ages (13-18)</p>
 <select>
   <option selected disabled selected></option>
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
   <div className="question">
   <div className="center-question">
     <label>Are you a Home Owner ?</label>
   </div>
   <div className="checkboxes">
     <div className="question-answer">
       <div>
         <input type="radio" id="radio_5" name="homeowner"/>
         <label htmlFor="radio_5" className="radio"><span>Yes</span></label>
       </div>
       <div>
         <input type="radio" id="radio_6" name="homeowner"/>
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
   <input type="radio" id="0" name="equity"/>
   <label className="equity-title" htmlFor="0" className="radio"><span>{}<br/></span></label>
 </div>
 <div>
   <input type="radio" id="1" name="equity"/>
   <label className="equity-title-2" htmlFor="1" className="radio"><span>{}</span></label>
 </div>
 <div>
   <input type="radio" id="2" name="equity"/>
   <label className="equity-title" htmlFor="2" className="radio"><span>{}</span></label>
 </div>
   </ul>
   </div>
    <div className="center-question">
      <label>More than one Home ?</label>
    </div>
    <div className="checkboxes">
      <div className="question-answer">
        <div>
          <input type="radio" value="none" id="radio_26" name="morethan1home"/>
          <label htmlFor="radio_26" className="radio"><span>Yes</span></label>
        </div>
        <div>
          <input type="radio" value="none" id="radio_27" name="morethan1home"/>
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
            <input type="radio" value="none" id="radio_7" name="businessowner"/>
            <label htmlFor="radio_7" className="radio"><span>Yes</span></label>
          </div>
            <div>
              <input type="radio" value="none" id="radio_8" name="businessowner"/>
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
          <input type="radio" id="3" name="income"/>
          <label htmlFor="3" className="radio"><span>{}<br/></span></label>
        </div>
        <div>
          <input onChange={props.incomeInput} type="radio" id="4" name="income"/>
          <label htmlFor="4" className="radio"><span>{}</span></label>
        </div>
        <div>
          <input type="radio" id="5" name="income"/>
          <label htmlFor="5" className="radio"><span>{}</span></label>
        </div>
        <div>
          <input type="radio" id="6" name="income"/>
          <label htmlFor="6" className="radio"><span>{}</span></label>
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
           <input name="spousesincome" type="radio" id="7"/>
           <label htmlFor="7" className="radio"><span>{}<br/></span></label>
         </div>
         <div>
           <input name="spousesincome" type="radio" id="8"/>
           <label htmlFor="8" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input name="spousesincome" type="radio" id="9"/>
           <label htmlFor="9" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input name="spousesincome" type="radio" id="10"/>
           <label htmlFor="10" className="radio"><span>{}</span></label>
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
                 <input type="radio" id="radio_13" name="retirement"/>
                 <label htmlFor="radio_13" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input type="radio" id="radio_14" name="retirement"/>
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
           <input type="radio" id="11" name="retirementamount"/>
           <label htmlFor="11" className="radio"><span>{}<br/></span></label>
         </div>
         <div>
           <input type="radio" id="12" name="retirementamount"/>
           <label htmlFor="12" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input type="radio" id="13" name="retirementamount"/>
           <label htmlFor="13" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input type="radio" id="14" name="retirementamount"/>
           <label htmlFor="14" className="radio"><span>{}</span></label>
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
                 <input type="radio" id="radio_15" name="stocksbonds"/>
                 <label htmlFor="radio_15" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input type="radio" id="radio_16" name="stocksbonds"/>
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
           <input type="radio" id="15" name="stocksbondsamount"/>
           <label htmlFor="15" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input type="radio" id="16" name="stocksbondsamount"/>
           <label htmlFor="16" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input type="radio" id="17" name="stocksbondsamount"/>
           <label htmlFor="17" className="radio"><span>{}</span></label>
         </div>
         <div>
           <input type="radio" id="18" name="stocksbondsamount"/>
           <label htmlFor="18" className="radio"><span>{}</span></label>
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
                 <input type="radio" id="radio_17" name="pension"/>
                 <label htmlFor="radio_17" className="radio"><span>Yes</span></label>
               </div>
                 <div>
                   <input type="radio" id="radio_18" name="pension"/>
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

export default AdvisorForm
