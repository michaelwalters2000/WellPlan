import React, { useState } from 'react'
import ClientForm from "./ClientForm"

const ClientFormContainer = props => {
  let newClient = props.newClient;
  let setNewClient = props.setNewClient;
  const [income, setIncome] = useState([])

  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)

  let income1 = "< $50,000"
  let income2 = "$50,000 - $100,000"
  let income3 = "$100,000 - $200,000"
  let income4 = "$200,000 <"

  return(
    <ClientForm
      newClient={props.newClient}
      handleClientSubmit={props.handleClientSubmit}
      handleFieldChange={props.handleFieldChange}
      handleRadioTrue={props.handleRadioTrue}
      handleRadioFalse={props.handleRadioFalse}
      equityInput={props.equityInput}
      incomeInput={props.incomeInput}
      spouseIncomeInput={props.spouseIncomeInput}
      inputOf401kValue={props.inputOf401kValue}
      stocksBondsInput={props.stocksBondsInput} />
  )
}

      export default ClientFormContainer
