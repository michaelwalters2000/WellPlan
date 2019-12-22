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
    experienceYears: "",
    clientNumber: "",
    avgClientInvestableAssets: "",
    totalClientIncome: "",
    totalClientsInvestableAssets: "",
    mutualFundsETFs: "",
    individualSecurities: "",
    totalStocksAndBonds: "",
    clientBusinessowners: "",
    discipinaryAction: "",
    explination: "",
    clientCapacity: "",
    clientRating: "",
    certifications: "",
    independent: "",
    firm: ""
  })

  // const equityValues = ["< $0", "$0 - $200,000", "$200,000 <"]
  // const incomeValues = ["< $50,000", "$50,000 - $100,000", "$100,000 - $200,000", "$200,000 <"]
  // const spouseIncomeValues = ["< $50,000", "$50,000 - $100,000","$100,000 - $200,000", "$200,000 <"]
  // const valuesOf401k = ["< $250,000", "$250,000 - $500,000", "$500,000 - $1,000,000", "$1,000,000 <"]
  // const stocksValues = ["< $250,000", "$250,000 - $500,000", "$500,000 - $1,000,000", "$1,000,000 <"]

  // const equityInput = event => {
  //   let selectId = parseInt(event.currentTarget.id);
  //   setNewAdvisor({
  //     ...newAdvisor,
  //     [event.currentTarget.name]: equityValues[selectId]
  //   })
  // }
  //
  // const incomeInput = event => {
  //   let selectId = parseInt(event.currentTarget.id) - 3;
  //   setNewAdvisor({
  //     ...newAdvisor,
  //     [event.currentTarget.name]: incomeValues[selectId]
  //   })
  // }
  //
  // const spouseIncomeInput = event => {
  //   let selectId = parseInt(event.currentTarget.id) - 7;
  //   setNewAdvisor({
  //     ...newAdvisor,
  //     [event.currentTarget.name]: spouseIncomeValues[selectId]
  //   })
  // }
  //
  // const inputOf401kValue = event => {
  //   let selectId = parseInt(event.currentTarget.id) - 11;
  //   setNewAdvisor({
  //     ...newAdvisor,
  //     [event.currentTarget.name]: valuesOf401k[selectId]
  //   })
  // }
  //
  // const stocksBondsInput = event => {
  //   let selectId = parseInt(event.currentTarget.id) - 15;
  //   setNewAdvisor({
  //     ...newAdvisor,
  //     [event.currentTarget.name]: stocksValues[selectId]
  //   })
  // }

  const handleFieldChange = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  let selected

  const handleSelectValue = event => {
    let selected = event.currentTarget.value;
    return selected;
  }

  const handleSelectChange = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: event.currentTarget.value

    })
  }

  const handleRadioTrue = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: "true"
    })
  }

  const handleRadioFalse = event => {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: "false"
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewAdvisor({
      experienceYears: "",
      clientNumber: "",
      avgClientInvestableAssets: "",
      totalClientIncome: "",
      totalClientsInvestableAssets: "",
      mutualFundsETFs: "",
      individualSecurities: "",
      totalStocksAndBonds: "",
      clientBusinessowners: "",
      discipinaryAction: "",
      explination: "",
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
    experienceYears:newAdvisor.experienceYears,
    clientNumber:newAdvisor.clientNumber,
    avgClientInvestableAssets:newAdvisor.avgClientInvestableAssets,
    totalClientIncome:newAdvisor.totalClientIncome,
    totalClientsInvestableAssets:newAdvisor.totalClientsInvestableAssets,
    mutualFundsETFs:newAdvisor.mutualFundsETFs,
    individualSecurities:newAdvisor.individualSecurities,
    totalStocksAndBonds:newAdvisor.totalStocksAndBonds,
    clientBusinessowners:newAdvisor.clientBusinessowners,
    discipinaryAction:newAdvisor.discipinaryAction,
    explination:newAdvisor.explination,
    clientCapacity:newAdvisor.clientCapacity,
    clientRating:newAdvisor.clientRating,
    certifications:newAdvisor.certifications,
    independent:newAdvisor.independent,
    firm:newAdvisor.firm
  }

  addNewAdvisor(payload)
  setNewAdvisor({
    experienceYears: "",
    clientNumber: "",
    avgClientInvestableAssets: "",
    totalClientIncome: "",
    totalClientsInvestableAssets: "",
    mutualFundsETFs: "",
    individualSecurities: "",
    totalStocksAndBonds: "",
    clientBusinessowners: "",
    discipinaryAction: "",
    explination: "",
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
  return <Redirect to="/" />
}

  return(
    <AdvisorFormContainer
    handleAdvisorSubmit={handleAdvisorSubmit}
    handleFieldChange={handleFieldChange}
    handleSelectChange={handleSelectChange}
    handleSelectValue={handleSelectValue}
    selected={selected}
    handleRadioTrue={handleRadioTrue}
    handleRadioFalse={handleRadioFalse}
    setNewAdvisor={setNewAdvisor}
    newAdvisor={newAdvisor} />
  )
}

export default AdvisorFormPage
