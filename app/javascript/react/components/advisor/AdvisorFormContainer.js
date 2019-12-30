import React, { useState } from 'react'
import AdvisorForm from "./AdvisorForm"

const AdvisorFormContainer = props => {
  let newAdvisor = props.newAdvisor;
  let setNewAdvisor = props.setNewAdvisor;
  const [score, setScore] = useState(0)
  const [tally, setTally] = useState(0)
  const [tryOne, setTryOne] = useState()

  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)

  const clientAmount = [{key:"< 50", value:1}, {key:"50 - 100", value:3},{key:"100 <",value:5}]
  const investableAssets = [{key:"< $250,000", value:1},{key:"< $1,000,000", value:5},{key:"$1,000,000 <", value:10}]
  const businessOwners = ["< 5%", "< 10%", "10% <"]

  const clientNumberInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 19;
    setTally(tally + 1);
    setScore(score + clientAmount[selectId].value);
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: clientAmount[selectId].key,
      level: (newAdvisor.level + clientAmount[selectId].value) * 1
    })
  }

  const investableAssetsInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 22;
    setScore(score + investableAssets[selectId].value)
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: investableAssets[selectId].key,
      level: (newAdvisor.level + investableAssets[selectId].value) * 1
    })
  }
console.log(score)
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

  let cList = []

  const cfpInput = event => {cList.push("CFP")}
  const aifInput = event => {cList.push("AIF")}
  const pfsInput = event => {cList.push("PFS")}
  const chfcInput = event => {cList.push("CHFC")}
  const napfaInput = event => {cList.push("NAPFA")}
  const fpaInput = event => {cList.push("FPA")}

  const handleIndependentTrue = event => {
    let newList = cList.toString()
    setNewAdvisor({
      ...newAdvisor,
      independent: "true",
      certifications: newList
    });
}

  const handleIndependentFalse = event => {
    let newList = cList.toString()
    setNewAdvisor({
      ...newAdvisor,
      independent: "false",
      certifications: newList
    })
  }

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
      handleIndependentTrue={handleIndependentTrue}
      handleIndependentFalse={handleIndependentFalse}
      cfpInput={cfpInput}
      aifInput={aifInput}
      pfsInput={pfsInput}
      chfcInput={chfcInput}
      napfaInput={napfaInput}
      fpaInput={fpaInput} />
  )
}

      export default AdvisorFormContainer
