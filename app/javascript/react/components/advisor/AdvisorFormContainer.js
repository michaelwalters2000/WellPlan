import React, { useState } from 'react'
import AdvisorForm from "./AdvisorForm"

const AdvisorFormContainer = props => {
  let newAdvisor = props.newAdvisor;
  let setNewAdvisor = props.setNewAdvisor;
  const [income, setIncome] = useState([])

  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)

  let income1 = "< $50,000"
  let income2 = "$50,000 - $100,000"
  let income3 = "$100,000 - $200,000"
  let income4 = "$200,000 <"

  return(
    <AdvisorForm
      newAdvisor={props.newAdvisor}
      handleAdvisorSubmit={props.handleAdvisorSubmit}
      handleFieldChange={props.handleFieldChange}
      handleSelectChange={props.handleSelectChange}
      handleSelectValue={props.handleSelectValue}
      selected={props.selected}
      handleRadioTrue={props.handleRadioTrue}
      handleRadioFalse={props.handleRadioFalse} />
  )
}

      export default AdvisorFormContainer
