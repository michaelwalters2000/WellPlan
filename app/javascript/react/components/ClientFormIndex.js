import React, { useState } from 'react'

const ClientFormIndex = props => {
  let income1 = "< $50,000"
  let income2 = "$50,000 - $100,000"
  let income3 = "$100,000 - $200,000"
  let income4 = "$200,000 <"

  return (
    <div class="testbox">
      <form action="/">
        <div className="banner">
          <h1>Volunteer Signup</h1>
        </div>
      <br/>
    <p>The HELP Group is seeking volunteers to serve our community. Fill in the information below to indicate how you would like to become involved.</p>
      <br/>
    <div class="colums">
      <div class="item">
        <label for="fname">First Name<span>*</span></label>
        <input id="fname" type="text" name="fname" required/>
      </div>
      <div class="item">
        <label for="lname">Last Name<span>*</span></label>
        <input id="lname" type="text"   name="lname" required/>
      </div>
      <div class="item">
        <label for="phone">Phone<span>*</span></label>
        <input id="phone" type="tel"   name="phone" required/>
      </div>
      <div class="item">
        <label for="eaddress">Email<span>*</span></label>
        <input id="eaddress" type="text"   name="eaddress" required/>
      </div>
      <div class="item">
        <label for="age">Age<span>*</span></label>
        <input id="age" type="number" min="18" max="120" name="age" required/>
      </div>
      <div class="item">
        <label for="equity">Home Equity<span>*</span></label>
        <input id="equity" type="text"   name="equity" required/>
      </div>
    </div>
    <div class="question">
      <div className="center-question">
        <label>Are you Married?</label>
      </div>
      <div className="checkboxes">
        <div class="question-answer">
          <div>
            <input onClick={props.handleSpouseAnswer} type="radio" value="none" id="radio_1" name="spouse"/>
            <label for="radio_1" class="radio"><span>Yes</span></label>
          </div>
          <div>
            <input onClick={props.handleNoSpouseAnswer} type="radio" value="none" id="radio_2" name="spouse"/>
            <label for="radio_2" class="radio"><span>No</span></label>
          </div>
        </div>
      </div>
    </div>
    <div className="question">
      <div className="center-question">
        <label>Do you have Kids?</label>
      </div>
      <div className="checkboxes">
        <div className="question-answer">
          <div>
            <input onClick={props.handleKidsAnswer} type="radio" value="none" id="radio_3" name="kids"/>
            <label for="radio_3" class="radio"><span>Yes</span></label>
          </div>
          <div>
            <input onClick={props.handleNoKidsAnswer} type="radio" value="none" id="radio_4" name="kids"/>
            <label for="radio_4" class="radio"><span>No</span></label>
          </div>
        </div>
      </div>
    </div>
    <div>{props.kids}</div>
    <div class="question">
      <div className="center-question">
        <label>Are you a Home Owner?</label>
      </div>
      <div className="checkboxes">
        <div class="question-answer">
          <div>
            <input type="radio" value="none" id="radio_5" name="home-owner"/>
            <label for="radio_5" class="radio"><span>Yes</span></label>
          </div>
          <div>
            <input  type="radio" value="none" id="radio_6" name="home-owner"/>
            <label for="radio_6" class="radio"><span>No</span></label>
          </div>
        </div>
      </div>
    </div>
    <div class="question">
      <div className="center-question">
        <label>Are you a Business Owner?</label>
      </div>
      <div className="checkboxes">
        <div class="question-answer">
          <div>
            <input type="radio" value="none" id="radio_7" name="business"/>
            <label for="radio_7" class="radio"><span>Yes</span></label>
          </div>
            <div>
              <input  type="radio" value="none" id="radio_8" name="business"/>
              <label for="radio_8" class="radio"><span>No</span></label>
            </div>
          </div>
        </div>
      </div>
      <div class="question">
      <div className="center-question">
        <label>Income Bracket?</label>
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
         <div>{props.spouseincome}</div>
        <div class="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
      )
    }
    // <div class="item">
    //   <label for="visit">Special Requirements</label>
    //   <textarea id="visit" rows="3"></textarea>
    // </div>

    export default ClientFormIndex
