import React, { useState, useEffect } from 'react'

const AdvisorForm = props => {
  let newAdvisor = props.newAdvisor;
  let lessGreaterThan = "<"
  let lessThanOne = "<1"
  let greaterThanTen = "10<"

  return (
    <div className="testbox">
      <form onSubmit={props.handleAdvisorSubmit}>
        <div className="banner">
          <h1>Advisor Signup</h1>
        </div>
      <br/>
      <br/>
      <div className="center-question">
       <label>Years of Experience</label>
       <div className="years-of-experience">
       <ul className="experience-years">
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
      <option value={greaterThanTen}>{greaterThanTen}</option>
    </select>
    </ul>
    </div>
   </div>
   <div className="question">
   <div className="center-question">
   <label>Number of Clients</label>
   </div>
   <div className="question-answer">
   <div className="inline">
   <ul className="client-amount">
   <div>
     <input name="clientNumber" onChange={props.clientNumberInput} type="radio" id="19"/>
     <label htmlFor="19" className="radio"><span>{lessGreaterThan} 50<br/></span></label>
   </div>
   <div>
     <input name="clientNumber" onChange={props.clientNumberInput} type="radio" id="20"/>
     <label htmlFor="20" className="radio"><span>50 - 100</span></label>
   </div>
   <div>
     <input name="clientNumber" onChange={props.clientNumberInput} type="radio" id="21"/>
     <label htmlFor="21" className="radio"><span>100 {lessGreaterThan}</span></label>
   </div>
     </ul>
     </div>
     </div>
     <div className="question">
     <div className="center-question">
       <label>Average Current Clients Investable Assets</label>
       </div>
       <div className="question-answer">
       <div className="inline">
       <ul className="inline-options">
       <div>
         <input value={newAdvisor.avgClientInvestableAssets} onChange={props.investableAssetsInput} type="radio" id="22" />
         <label htmlFor="22" className="radio"><span>{lessGreaterThan} $250,000<br/></span></label>
       </div>
       <div>
         <input value={newAdvisor.avgClientInvestableAssets} onChange={props.investableAssetsInput} type="radio" id="23"/>
         <label htmlFor="23" className="radio"><span>{lessGreaterThan} $1,000,000</span></label>
       </div>
       <div>
         <input value={newAdvisor.avgClientInvestableAssets} onChange={props.investableAssetsInput} type="radio" id="24"/>
         <label htmlFor="24" className="radio"><span>$1,000,000 {lessGreaterThan}</span></label>
       </div>
         </ul>
         </div>
         </div>
        </div>
        <div className="question">
        <div className="center-question">
          <label>Clients Combined Income</label>
          </div>
          <div className="question-answer">
          <div className="inline">
          <ul className="inline-options">
          <div>
            <input name="totalClientIncome" onChange={props.clientIncomeInput} type="radio" id="25"/>
            <label htmlFor="25" className="radio"><span>{lessGreaterThan} $200,000<br/></span></label>
          </div>
          <div>
            <input name="totalClientIncome" onChange={props.clientIncomeInput} type="radio" id="26"/>
            <label htmlFor="26" className="radio"><span>$200,000 - $500,000</span></label>
          </div>
          <div>
            <input name="totalClientIncome" onChange={props.clientIncomeInput} type="radio" id="27"/>
            <label htmlFor="27" className="radio"><span>$500,000 - $1,000,000</span></label>
          </div>
          <div>
            <input name="totalClientIncome" value={newAdvisor.totalClientIncome} onChange={props.clientIncomeInput} type="radio" id="28"/>
            <label htmlFor="28" className="radio"><span>$1,000,000 {lessGreaterThan}</span></label>
          </div>
            </ul>
            </div>
            </div>
           </div>
    <div className="center-question">
      <label>Do you work with Mutual Funds / ETFs</label>
    </div>
      <div className="question-answer">
      <div className="inline">
        <ul className="inline-options">
        <div>
          <input name="mutualFundsETFs" value={newAdvisor.mutualFundsETFs} onChange={props.handleRadioTrue} type="radio" id="29"/>
          <label htmlFor="29" className="radio"><span>Yes</span></label>
        </div>
        <div>
          <input name="mutualFundsETFs" value={newAdvisor.mutualFundsETFs} onChange={props.handleRadioFalse} type="radio" id="30"/>
          <label htmlFor="30" className="radio"><span>No</span></label>
        </div>
        </ul>
      </div>
    </div>
  </div>
 <div className="question">
      <div className="center-question">
        <label>Individual Securities</label>
      </div>
        <div className="question-answer">
        <div className="inline">
          <ul className="inline-options">
          <div>
            <input name="individualSecurities" value={newAdvisor.individualSecurities} onChange={props.handleRadioTrue} type="radio" id="31"/>
            <label htmlFor="31" className="radio"><span>Yes</span></label>
          </div>
            <div>
              <input name="individualSecurities" value={newAdvisor.individualSecurities} onChange={props.handleRadioFalse} type="radio" id="32"/>
              <label htmlFor="32" className="radio"><span>No</span></label>
            </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="question">
        <div className="center-question">
          <label>Do You Work with Stocks and Bonds</label>
        </div>
          <div className="question-answer">
          <div className="inline">
            <ul className="inline-options">
            <div>
              <input name="stocksAndBonds" type="radio" onChange={props.handleRadioTrue} id="33" />
              <label htmlFor="33" className="radio"><span>Yes</span></label>
            </div>
              <div>
                <input name="stocksAndBonds" type="radio" onChange={props.handleRadioFalse} id="34"/>
                <label htmlFor="34" className="radio"><span>No</span></label>
              </div>
              </ul>
            </div>
          </div>
        </div>
      <div className="center-input">
        <label htmlFor="totalStocksAndBonds">Total of Stocks & Bonds</label><br/>
        <input className="short-input-bar" name="totalStocksAndBonds" value={newAdvisor.totalStocksAndBonds} onChange={props.handleFieldChange} id="totalStocksAndBonds" type="number"/>
      </div>
        <div className="question">
        <div className="center-question">
        <label>Percent of Clients Who Own a Business</label>
        </div>
        <div className="question-answer">
        <div className="inline">
        <ul className="inline-options">
        <div>
          <input name="clientBusinessOwners" onChange={props.businessOwnersInput} type="radio" id="35"/>
          <label htmlFor="35" className="radio"><span>{lessGreaterThan} 5%</span></label>
        </div>
        <div>
          <input name="clientBusinessOwners" onChange={props.businessOwnersInput} type="radio" id="36"/>
          <label htmlFor="36" className="radio"><span>{lessGreaterThan} 10%</span></label>
        </div>
        <div>
          <input name="clientBusinessOwners" onChange={props.businessOwnersInput} type="radio" id="37"/>
          <label htmlFor="37" className="radio"><span>10% {lessGreaterThan}</span></label>
        </div>
          </ul>
          </div>
          </div>
         </div>
         <div className="question">
           <div className="center-question">
             <label>Discipinary Action</label>
           </div>
             <div className="question-answer">
             <div className="inline">
               <ul className="inline-options">
               <div>
                 <input name="discipinaryAction" type="radio" value={newAdvisor.discipinaryAction} onChange={props.handleRadioTrue} id="38" />
                 <label htmlFor="38" className="radio"><span>Yes</span></label>
               </div>
                 <div>
                   <input name="discipinaryAction" type="radio" value={newAdvisor.discipinaryAction} onChange={props.handleRadioFalse} id="39"/>
                   <label htmlFor="39" className="radio"><span>No</span></label>
                 </div>
                 </ul>
               </div>
             </div>
           </div>
           <div className="center-input">
             <label htmlFor="explanation">Discipinary Explanation</label><br/>
             <input className="avg-input-bar" name="explanation" value={newAdvisor.explanation} onChange={props.handleFieldChange} id="explanation" type="text" />
           </div>
           <div className="question">
                <div className="center-question">
                  <label>More than 10% of Clients have Annuities or Employer Pensions</label>
                </div>
                  <div className="question-answer">
                  <div className="inline">
                    <ul className="inline-options">
                    <div>
                      <input name="moreThan10PercentAnnuitiesOrEmployerPensions" onChange={props.handleRadioTrue} type="radio" id="40"/>
                      <label htmlFor="40" className="radio"><span>Yes</span></label>
                    </div>
                      <div>
                        <input name="moreThan10PercentAnnuitiesOrEmployerPensions" onChange={props.handleRadioFalse} type="radio" id="41"/>
                        <label htmlFor="41" className="radio"><span>No</span></label>
                      </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="center-input">
                  <label htmlFor="clientCapacity">Number of New Clients Willing to Take On</label><br/>
                  <input className="short-input-bar" name="clientCapacity" value={newAdvisor.clientCapacity} onChange={props.handleFieldChange} id="clientCapacity" type="number" min="0" name="clientCapacity"/>
                </div>
                <div className="question">
                <div className="center-question">
                  <label>Certifications</label>
                  </div>
                  <div className="question-answer">
                    <div className="inline">
                    <ul className="inline-options">
                  <div>
                    <input type="radio" id="42" checked={props.cfpControl} name="CFP" onClick={props.cfpInput}/>
                    <label htmlFor="42" id="cfpRadio" className="radio"><span>CFP<br/></span></label>
                  </div>
                  <div>
                    <input type="radio" id="43" checked={props.aifControl} name="AIF" onClick={props.aifInput}/>
                    <label htmlFor="43" className="radio"><span>AIF</span></label>
                  </div>
                  <div>
                    <input type="radio" id="44" checked={props.pfsControl} name="PFS" onClick={props.pfsInput}/>
                    <label htmlFor="44" className="radio"><span>PFS</span></label>
                  </div>
                  <div>
                    <input type="radio" id="45" checked={props.chfcControl} name="CHFC" onClick={props.chfcInput}/>
                    <label htmlFor="45" className="radio"><span>CHFC</span></label>
                  </div>
                  <div>
                    <input type="radio" id="46" checked={props.napfaControl} name="NAPFA" onClick={props.napfaInput}/>
                    <label htmlFor="46" className="radio"><span>NAPFA</span></label>
                  </div>
                  <div>
                    <input type="radio" id="47" checked={props.fpaControl} name="FPA" onClick={props.fpaInput}/>
                    <label htmlFor="47" className="radio"><span>FPA</span></label>
                  </div>
                    </ul>
                    </div>
                    </div>
                   </div>
                   {props.cfpControl}
         <div className="question">
           <div className="center-question">
             <label>Independent</label>
           </div>
             <div className="question-answer">
             <div className="inline">
               <ul className="inline-options">
               <div>
                 <input name="independent" onChange={props.handleRadioTrue} type="radio" id="48"/>
                 <label htmlFor="48" className="radio"><span>Yes</span></label>
               </div>
               <div>
                 <input name="independent" onChange={props.handleRadioFalse} type="radio" id="49"/>
                 <label htmlFor="49" className="radio"><span>No</span></label>
               </div>
               </ul>
             </div>
           </div>
         </div>
         <div className="center-input">
           <label className="" htmlFor="firm">Firm</label><br/>
           <input className="short-input-bar" value={newAdvisor.firm} onChange={props.handleFieldChange} id="firm" type="text" name="firm" />
         </div>

      <div className="btn-block">
         <button type="submit" onClick={props.handleScore} href="/">Submit</button>
       </div>
     </form>
   </div>
      )
    }

export default AdvisorForm
