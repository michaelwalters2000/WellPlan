import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import AdvisorFormContainer from "./AdvisorFormContainer"
import _ from 'lodash'

const AdvisorFormPage = (props) => {
  const[errors, setErrors] = useState({});
  const[shouldRedirect, setShouldRedirect] = useState(false);
  const [selectNumber, setSelectNumber] = useState();
  const [newAdvisor, setNewAdvisor] = useState({
    level: "",
    score: "",
    experienceYears: "",
    clientNumber: "",
    avgClientInvestableAssets: "",
    avgClientIncomePercentUnder200: "",
    avgClientIncomePercent200to500: "",
    avgClientIncomePercent500to1000: "",
    avgClientIncomePercentOver1000: "",
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
    firm: "",
    user_id: ""
  })

  const handleFieldChange = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFieldPercent = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: event.currentTarget.value + "%"
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
      avgClientIncomePercentUnder200: "",
      avgClientIncomePercent200to500: "",
      avgClientIncomePercent500to1000: "",
      avgClientIncomePercentOver1000: "",
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
      firm: "",
      user_id: ""
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
  window.location.replace("https://sheltered-tor-66167.herokuapp.com/")
  if (!validForSubmission()){
    return
  }

  let payload = {
    level:newAdvisor.level,
    score:newAdvisor.score,
    experienceYears:newAdvisor.experienceYears,
    clientNumber:newAdvisor.clientNumber,
    avgClientInvestableAssets:newAdvisor.avgClientInvestableAssets,
    avgClientIncomePercentUnder200:newAdvisor.avgClientIncomePercentUnder200,
    avgClientIncomePercent200to500:newAdvisor.avgClientIncomePercent200to500,
    avgClientIncomePercent500to1000:newAdvisor.avgClientIncomePercent500to1000,
    avgClientIncomePercentOver1000:newAdvisor.avgClientIncomePercentOver1000,
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
    firm:newAdvisor.firm,
    user_id:newAdvisor.user_id
  }

  addNewAdvisor(payload)
  setNewAdvisor({
    level: "",
    score: "",
    experienceYears: "",
    clientNumber: "",
    avgClientInvestableAssets: "",
    avgClientIncomePercentUnder200: "",
    avgClientIncomePercent200to500: "",
    avgClientIncomePercent500to1000: "",
    avgClientIncomePercentOver1000: "",
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
    firm: "",
    user_id: ""
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
  return <Redirect to="/" />
}

  return(
    <AdvisorFormContainer
    handleAdvisorSubmit={handleAdvisorSubmit}
    handleFieldChange={handleFieldChange}
    handleFieldPercent={handleFieldPercent}
    handleSelectChange={handleSelectChange}
    setNewAdvisor={setNewAdvisor}
    newAdvisor={newAdvisor} />
  )
}

export default AdvisorFormPage
