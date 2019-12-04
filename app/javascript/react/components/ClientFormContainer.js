import React from 'react'

const ClientFormContainer = props => {
  return (
    <form className="modal">
      <div className="modal-content">
        <div class="number-textbox">
        <label>Age</label>
        <input type="number" id="age"/>
      </div>
      </div>
      <div class="form-group">
      <div class="checkbox">
        <label><input type="checkbox"/>Spouse</label>
      </div>
      </div>
      <div>
      <div class="checkbox">
        <label><input type="checkbox"/>Kids</label>
      </div>
        <label for="exampleFormControlSelect1">Kids (0-5)</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Kids (6-12)</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Kids (13-18)</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>
      <div class="checkbox">
        <label><input type="checkbox"/>Home Owner</label>
      </div>
      <div class="form-group">
        <label for="email">Home Equity</label>
        <input type="email" class="form-control" id="email"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Number of Homes:</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>
      <div class="checkbox">
        <label><input type="checkbox"/>Business Owner</label>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">About</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <input type="submit" value="Submit"/>
    </form>
      )
    }

    export default ClientFormContainer

    // <div class="form-group">
    //   <label for="usr">Email:</label>
    //   <input type="text" class="form-control" id="usr"/>
    // </div>
    // <div class="form-group">
    //   <label for="exampleFormControlInput1">401k:</label>
    //   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    // </div>
    // <div class="form-group">
    //   <label for="exampleFormControlInput1">Stocks / Bonds:</label>
    //   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    // </div>
    // <button type="button" class="btn btn-primary">Pension</button>
