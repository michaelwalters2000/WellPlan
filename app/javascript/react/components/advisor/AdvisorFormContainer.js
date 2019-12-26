import React, { useState } from 'react'
import AdvisorForm from "./AdvisorForm"

const AdvisorFormContainer = props => {
  let newAdvisor = props.newAdvisor;
  let setNewAdvisor = props.setNewAdvisor;
  const [income, setIncome] = useState([])

  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)

  const clientAmount = ["< 50", "50 - 100", "100 <"]
  const investableAssets = ["< $250,000", "< $1,000,000", "$1,000,000 <"]
  const businessOwners = ["< 5%", "< 10%", "10% <"]
  const certificationList = ["CFP","AIF","PFS","CHFC","NAPFA","FPA"]

  const clientNumberInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 19;
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: clientAmount[selectId]
    })
  }

  const investableAssetsInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 22;
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: investableAssets[selectId]
    })
  }

  const clientIncomeInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 25;
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: investableAssets[selectId]
    })
  }

  const businessOwnersInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 32;
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: businessOwners[selectId]
    })
  }

  const certificationsInput = event => {
    let cList = []
    cList.push(event.currentTarget.name);
    let newList = cList.toString();
    setNewAdvisor({
      ...newAdvisor,
      certifications: newList
    })
  }

  // let id = event.currentTarget.id;
  // let idArray = id.split("");
  // let newIdArray = idArray.splice(2,10);
  // let certificationArray = idArray.splice(0,2);
  // let newId = newIdArray.toString();
  // let certification = certificationArray.toString();
  // let selectId = parseInt(newId) - 39;

  return(
    <AdvisorForm
      newAdvisor={props.newAdvisor}
      handleAdvisorSubmit={props.handleAdvisorSubmit}
      handleFieldChange={props.handleFieldChange}
      handleSelectChange={props.handleSelectChange}
      handleSelectValue={props.handleSelectValue}
      selected={props.selected}
      handleRadioTrue={props.handleRadioTrue}
      handleRadioFalse={props.handleRadioFalse}
      clientNumberInput={clientNumberInput}
      investableAssetsInput={investableAssetsInput}
      clientIncomeInput={clientIncomeInput}
      businessOwnersInput={businessOwnersInput}
      certificationsInput={certificationsInput} />
  )
}

      export default AdvisorFormContainer
