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
    level: "",
    score: "",
    age: "",
    spouse: "",
    kids: "",
    kidsNumber: "",
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

  const handleFieldChange = event => {
    setNewClient({
      ...newClient,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  $(document).ready(function(){
  $("#radio_1").click(function(){
  })
})

  let selected

  const handleSelectValue = event => {
    let selected = event.currentTarget.value;
    return selected;
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewClient({
      level: "",
      score: "",
      age: "",
      spouse: "",
      kids: "",
      kidsNumber: "",
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
    const requiredFields = []
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
    level:newClient.level,
    score:newClient.score,
    age:newClient.age,
    spouse:newClient.spouse,
    kids:newClient.kids,
    kidsNumber:newClient.kidsNumber,
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
    level: "",
    score: "",
    age: "",
    spouse: "",
    kids: "",
    kidsNumber: "",
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
  return <Redirect to="/matches" />
}

  return(
    <ClientFormContainer
    handleClientSubmit={handleClientSubmit}
    handleFieldChange={handleFieldChange}
    handleSelectValue={handleSelectValue}
    selected={selected}
    setNewClient={setNewClient}
    newClient={newClient} />
  )
}

export default ClientFormPage
