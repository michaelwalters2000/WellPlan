import React from 'react'

const ClientFormIndex = props => {

  return (
    <div class="testbox">
      <form action="/">
        <div class="banner">
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
            <input id="age" type="number" maximum   name="age" required/>
          </div>
          <div class="item">
            <label for="state">State<span>*</span></label>
            <input id="state" type="text"   name="state" required/>
          </div>
          <div class="item">
            <label for="zip">Zip<span>*</span></label>
            <input id="zip" type="text"   name="zip" required/>
          </div>
        </div>
        <div class="question">
          <label>Include my contact information on lists distributed to other attendees.</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="info"/>
              <label for="radio_1" class="radio"><span>Yes</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_2" name="info"/>
              <label for="radio_2" class="radio"><span>No</span></label>
            </div>
          </div>
        </div>
        <div class="item">
          <p>Meal Preference</p>
          <select>
            <option selected value="" disabled selected></option>
            <option value="b" >Beef</option>
            <option value="ch">Chicken</option>
            <option value="v">Vegetarian</option>
            <option value="n">None</option>
          </select>
        </div>
        <div class="week">
          <div class="question">
            <label>Days Attending </label>
            <div class="question-answer">
              <div>
                <input type="radio" value="none" id="radio_3" name="day"/>
                <label for="radio_3" class="radio"><span>Sunday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_4" name="day"/>
                <label for="radio_4" class="radio"><span>Monday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_5" name="day"/>
                <label for="radio_5" class="radio"><span>Tuesday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_6" name="day"/>
                <label for="radio_6" class="radio"><span>Wednesday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_7" name="day"/>
                <label for="radio_7" class="radio"><span>Thursday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_8" name="day"/>
                <label for="radio_8" class="radio"><span>Friday</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_9" name="day"/>
                <label for="radio_9" class="radio"><span>Saturday</span></label>
              </div>
            </div>
          </div>
          <div class="question">
            <label>Activities Attending</label>
            <div class="question-answer">
              <div>
                <input type="radio" value="none" id="radio_10" name="activity"/>
                <label for="radio_10" class="radio"><span>CEO luncheon</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_11" name="activity"/>
                <label for="radio_11" class="radio"><span>Finance seminar</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_12" name="activity"/>
                <label for="radio_12" class="radio"><span>Leadership seminar</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_13" name="activity"/>
                <label for="radio_13" class="radio"><span>Marketing workshop</span></label>
              </div>
              <div>
                <input  type="radio" value="none" id="radio_14" name="activity"/>
                <label for="radio_14" class="radio"><span>Teamwork seminar</span></label>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <label for="visit">Special Requirements</label>
          <textarea id="visit" rows="3"></textarea>
        </div>
        <div class="question">
          <label>Did you attend last years conference?</label>
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_15" name="contact"/>
              <label for="radio_15" class="radio"><span>Yes</span></label>
            </div>
            <div>
              <input  type="radio" value="none" id="radio_16" name="contact"/>
              <label for="radio_16" class="radio"><span>No</span></label>
            </div>
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
      )
    }

    export default ClientFormIndex
