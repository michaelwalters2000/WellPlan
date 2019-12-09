import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import ClientFormContainer from "./ClientFormContainer"
import _ from 'lodash'

const ClientFormPage = (props) => {
  const[errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newClient, setNewClient] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    age: "",
    spouse: "",
    kids: "",
    kids_0to5: "",
    kids_6to12: "",
    kids_13to18: "",
    home_owner: "",
    home_equity: "",
    morethan1home: "",
    business_owner: "",
    income: "",
    spouses_income: "",
    four_o_onek: "",
    four_o_onek_amount: "",
    stocks_and_bonds: "",
    stocks_and_bonds_amount: "",
    pension: ""
  })

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

  const handle401kOne = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "< $250,000"
    })
  }

  const handle401kTwo = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$250,000 - $500,000"
    })
  }

  const handle401kThree = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$500,000 - $1,000,000"
    })
  }

  const handle401kFour = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$1,000,000 <"
    })
  }

  const handleEquityOne = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "< $0"
    })
  }

  const handleEquityTwo = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$0 - $200,000"
    })
  }

  const handleIncomeOne = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "< $50,000"
    })
  }

  const handleIncomeTwo = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$50,000 - $100,000"
    })
  }

  const handleIncomeThree = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$100,000 - $200,000"
    })
  }

  const handleIncomeFour = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "$200,000 <"
    })
  }

  const handleFieldChange = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleRadioTrue = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "true"
    })
  }

  const handleRadioFalse = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "false"
    })
  }

  const handleSelectNone = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: ""
    })
  }

  const handleSelectOne = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "1"
    })
  }

  const handleSelectTwo = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "2"
    })
  }

  const handleSelectThree = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "3"
    })
  }

  const handleSelectFour = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "4"
    })
  }

  const handleSelectFive = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "5"
    })
  }

  const handleSelectSixPlus = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: "6+"
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewClient({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      age: "",
      spouse: "",
      kids: "",
      kids_0to5: "",
      kids_6to12: "",
      kids_13to18: "",
      home_owner: "",
      home_equity: "",
      morethan1home: "",
      business_owner: "",
      income: "",
      spouses_income: "",
      four_o_onek: "",
      four_o_onek_amount: "",
      stocks_and_bonds: "",
      stocks_and_bonds_amount: "",
      pension: ""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["age", "spouse"]
    requiredFields.forEach(field => {
      if (newClient[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }
//, "spouse", "kids", "home_owner", "business_owner", "income", "four_o_onek", "stocks_and_bonds", "pension"
  const handleClientSubmit = (event) => {
  event.preventDefault()
  if (!validForSubmission()){
    return
  }

  let payload = {
    age:newClient.age,
    spouse:newClient.spouse,
    kids:newClient.kids,
    kids_0to5:newClient.kids_0to5,
    kids_6to12:newClient.kids_6to12,
    kids_13to18:newClient.kids_13to18,
    home_owner:newClient.home_owner,
    home_equity:newClient.home_equity,
    morethan1home:newClient.morethan1home,
    business_owner:newClient.business_owner,
    income:newClient.income,
    spouses_income:newClient.spouses_income,
    four_o_onek:newClient.four_o_onek,
    four_o_onek_amount:newClient.four_o_onek_amount,
    stocks_and_bonds:newClient.stocks_and_bonds,
    stocks_and_bonds_amount:newClient.stocks_and_bonds_amount,
    pension:newClient.pension
  }

  addNewClient(payload)
  setNewClient({
    age: "",
    spouse: "",
    kids: "",
    kids_0to5: "",
    kids_6to12: "",
    kids_13to18: "",
    home_owner: "",
    home_equity: "",
    morethan1home: "",
    business_owner: "",
    income: "",
    spouses_income: "",
    four_o_onek: "",
    four_o_onek_amount: "",
    stocks_and_bonds: "",
    stocks_and_bonds_amount: "",
    pension: ""
  })
}

const addNewClient = payload => {
    fetch("/api/v1/clients", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then((response)=>{
      return response.json()
    })
    .then((persistedData)=>{
        setShouldRedirect(true)
    })
    .catch((error) => {console.error("error in fetch")
    })
  }

if (shouldRedirect){
  return <Redirect to="/" />
}

  return(
    <ClientFormContainer
    handleClientSubmit={handleClientSubmit}
    handleFieldChange={handleFieldChange}
    handleRadioTrue={handleRadioTrue}
    handleRadioFalse={handleRadioFalse}
    handleSelectOne={handleSelectOne}
    handleSelectTwo={handleSelectTwo}
    handleSelectThree={handleSelectThree}
    handleSelectFour={handleSelectFour}
    handleSelectFive={handleSelectFive}
    handleSelectSixPlus={handleSelectSixPlus}
    handleSelectNone={handleSelectNone}
    newClient={newClient}
    handleIncomeOne={handleIncomeOne}
    handleIncomeTwo={handleIncomeTwo}
    handleIncomeThree={handleIncomeThree}
    handleIncomeFour={handleIncomeFour}
    handleEquityOne={handleEquityOne}
    handleEquityTwo={handleEquityTwo}
    handle401kOne={handle401kOne}
    handle401kTwo={handle401kTwo}
    handle401kThree={handle401kThree}
    handle401kFour={handle401kFour} />
  )
}

export default ClientFormPage
