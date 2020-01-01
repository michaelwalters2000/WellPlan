import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import AdvisorFormContainer from "./AdvisorFormContainer"
import _ from 'lodash'

const AdvisorFormPage = (props) => {
  const[errors, setErrors] = useState({});
  const[shouldRedirect, setShouldRedirect] = useState(false);
  const [selectNumber, setSelectNumber] = useState();
  const [select, setSelect] = useState();
  const [newAdvisor, setNewAdvisor] = useState({
    level: "",
    score: "",
    experienceYears: "",
    clientNumber: "",
    avgClientInvestableAssets: "",
    totalClientIncome: "",
    totalClientsInvestableAssets: "",
    mutualFundsETFs: "",
    individualSecurities: "",
    stocksAndBonds: "",
    totalStocksAndBonds: "",
    clientBusinessOwners: "",
    discipinaryAction: "",
    explanation: "",
    moreThan10PercentAnnuitiesOrEmployerPensions: "",
    clientCapacity: "",
    clientRating: "",
    certifications: "",
    independent: "",
    firm: ""
  })

  const handleFieldChange = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSelectChange = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: event.currentTarget.value

    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewAdvisor({
      level: "",
      score: "",
      experienceYears: "",
      clientNumber: "",
      avgClientInvestableAssets: "",
      totalClientIncome: "",
      totalClientsInvestableAssets: "",
      mutualFundsETFs: "",
      individualSecurities: "",
      stocksAndBonds: "",
      totalStocksAndBonds: "",
      clientBusinessOwners: "",
      discipinaryAction: "",
      explanation: "",
      moreThan10PercentAnnuitiesOrEmployerPensions: "",
      clientCapacity: "",
      clientRating: "",
      certifications: "",
      independent: "",
      firm: ""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = []
    requiredFields.forEach(field => {
      if (newAdvisor[field].trim() === "") {
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

  const handleAdvisorSubmit = (event) => {
  event.preventDefault()
  if (!validForSubmission()){
    return
  }

  let payload = {
    level:newAdvisor.level,
    score:newAdvisor.score,
    experienceYears:newAdvisor.experienceYears,
    clientNumber:newAdvisor.clientNumber,
    avgClientInvestableAssets:newAdvisor.avgClientInvestableAssets,
    totalClientIncome:newAdvisor.totalClientIncome,
    totalClientsInvestableAssets:newAdvisor.totalClientsInvestableAssets,
    mutualFundsETFs:newAdvisor.mutualFundsETFs,
    individualSecurities:newAdvisor.individualSecurities,
    stocksAndBonds:newAdvisor.stocksAndBonds,
    totalStocksAndBonds:newAdvisor.totalStocksAndBonds,
    clientBusinessOwners:newAdvisor.clientBusinessOwners,
    discipinaryAction:newAdvisor.discipinaryAction,
    explanation:newAdvisor.explanation,
    moreThan10PercentAnnuitiesOrEmployerPensions:newAdvisor.moreThan10PercentAnnuitiesOrEmployerPensions,
    clientCapacity:newAdvisor.clientCapacity,
    clientRating:newAdvisor.clientRating,
    certifications:newAdvisor.certifications,
    independent:newAdvisor.independent,
    firm:newAdvisor.firm
  }

  addNewAdvisor(payload)
  setNewAdvisor({
    level: "",
    score: "",
    experienceYears: "",
    clientNumber: "",
    avgClientInvestableAssets: "",
    totalClientIncome: "",
    totalClientsInvestableAssets: "",
    mutualFundsETFs: "",
    individualSecurities: "",
    stocksAndBonds: "",
    totalStocksAndBonds: "",
    clientBusinessOwners: "",
    discipinaryAction: "",
    explanation: "",
    moreThan10PercentAnnuitiesOrEmployerPensions: "",
    clientCapacity: "",
    clientRating: "",
    certifications: "",
    independent: "",
    firm: ""
  })
}

const addNewAdvisor = payload => {
    fetch("/api/v1/advisors", {
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
    <AdvisorFormContainer
    handleAdvisorSubmit={handleAdvisorSubmit}
    handleFieldChange={handleFieldChange}
    handleSelectChange={handleSelectChange}
    setNewAdvisor={setNewAdvisor}
    newAdvisor={newAdvisor} />
  )
}

export default AdvisorFormPage
