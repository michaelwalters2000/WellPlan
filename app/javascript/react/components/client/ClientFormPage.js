import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import ClientFormContainer from "./ClientFormContainer"
import _ from 'lodash'

const ClientFormPage = (props) => {
  const[errors, setErrors] = useState({});
  const[shouldRedirect, setShouldRedirect] = useState(false);
  const [selectNumber, setSelectNumber] = useState();
  const [select, setSelect] = useState();
  const [newClient, setNewClient] = useState({
    age: "",
    spouse: "",
    kids: "",
    kids0to5: "",
    kids6to12: "",
    kids13to18: "",
    homeowner: "",
    equity: "",
    morethan1home: "",
    businessowner: "",
    income: "",
    spousesincome: "",
    retirement: "",
    retirementamount: "",
    stocksbonds: "",
    stocksbondsamount: "",
    pension: ""
  })

  const equityValues = ["< $0", "$0 - $200,000", "$200,000 <"]
  const incomeValues = ["< $50,000", "$50,000 - $100,000", "$100,000 - $200,000", "$200,000 <"]
  const spouseIncomeValues = ["< $50,000", "$50,000 - $100,000","$100,000 - $200,000", "$200,000 <"]
  const valuesOf401k = ["< $250,000", "$250,000 - $500,000", "$500,000 - $1,000,000", "$1,000,000 <"]
  const stocksValues = ["< $250,000", "$250,000 - $500,000", "$500,000 - $1,000,000", "$1,000,000 <"]

  const equityInput = event => {
    let selectId = parseInt(event.currentTarget.id);
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: equityValues[selectId]
    })
  }

  const incomeInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 3;
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: incomeValues[selectId]
    })
  }

  const spouseIncomeInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 7;
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: spouseIncomeValues[selectId]
    })
  }

  const inputOf401kValue = event => {
    let selectId = parseInt(event.currentTarget.id) - 11;
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: valuesOf401k[selectId]
    })
  }

  const stocksBondsInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 15;
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: stocksValues[selectId]
    })
  }

  const handleFieldChange = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  let selected

  const handleSelectValue = event => {
    let selected = event.currentTarget.value;
    return selected;
  }

  const handleSelectChange = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: selected

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

  const clearFields = (event) => {
    event.preventDefault()
    setNewClient({
      age: "",
      spouse: "",
      kids: "",
      kids0to5: "",
      kids6to12: "",
      kids13to18: "",
      homeowner: "",
      equity: "",
      morethan1home: "",
      businessowner: "",
      income: "",
      spousesincome: "",
      retirement: "",
      retirementamount: "",
      stocksbonds: "",
      stocksbondsamount: "",
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
//, "spouse", "kids", "homeowner", "businessowner", "income", "retirement", "stocksbonds", "pension"
  const handleClientSubmit = (event) => {
  event.preventDefault()
  if (!validForSubmission()){
    return
  }

  let payload = {
    age:newClient.age,
    spouse:newClient.spouse,
    kids:newClient.kids,
    kids0to5:newClient.kids0to5,
    kids6to12:newClient.kids6to12,
    kids13to18:newClient.kids13to18,
    homeowner:newClient.homeowner,
    equity:newClient.equity,
    morethan1home:newClient.morethan1home,
    businessowner:newClient.businessowner,
    income:newClient.income,
    spousesincome:newClient.spousesincome,
    retirement:newClient.retirement,
    retirementamount:newClient.retirementamount,
    stocksbonds:newClient.stocksbonds,
    stocksbondsamount:newClient.stocksbondsamount,
    pension:newClient.pension
  }

  addNewClient(payload)
  setNewClient({
    age: "",
    spouse: "",
    kids: "",
    kids0to5: "",
    kids6to12: "",
    kids13to18: "",
    homeowner: "",
    equity: "",
    morethan1home: "",
    businessowner: "",
    income: "",
    spousesincome: "",
    retirement: "",
    retirementamount: "",
    stocksbonds: "",
    stocksbondsamount: "",
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
    handleSelectChange={handleSelectChange}
    handleSelectValue={handleSelectValue}
    selected={selected}
    handleRadioTrue={handleRadioTrue}
    handleRadioFalse={handleRadioFalse}
    setNewClient={setNewClient}
    newClient={newClient}
    equityInput={equityInput}
    incomeInput={incomeInput}
    spouseIncomeInput={spouseIncomeInput}
    inputOf401kValue={inputOf401kValue}
    stocksBondsInput={stocksBondsInput} />
  )
}

export default ClientFormPage
