import React, { useState } from 'react'
import ClientForm from "./ClientForm"

const ClientFormContainer = props => {
  let newClient = props.newClient;
  let setNewClient = props.setNewClient;
  const [income, setIncome] = useState([])

  const incomeValues = [{key:"< $50,000",value:1},{key:"$50,000 - $100,000",value:2},{key:"$100,000 - $200,000",value:3},{key:"$200,000 <",value:5}]

  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)

  const handleFieldChange = event => {
      setNewClient({
        ...newClient,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }

    const incomeInput = event => {
      let selectId = parseInt(event.currentTarget.id) - 3;
      setNewClient({
        ...newClient,
        [event.currentTarget.name]: incomeValues[selectId].key
      })
      incomeValue = incomeValues[selectId].value
    }

    const handleScore = event => {
      let age = 0
      let spouse = 0
      let home = 0
      let morethanOnehome = 0
      let incomeValue = 0
      if (newClient.age < 40) {
        age = 1
      } else if (newClient.age > 39 && newClient.age < 50) {
        age = 2
      } else {
        age = 5
      }
      if (newClient.spouse === "true") {
        spouse = 2
      }
      if (newClient.homeowner === "true") {
        home = 2
      }
      if (newClient.morethan1home === "true") {
        morethanOnehome = 5
      }
      let incomeIndex = incomeValues.findIndex(item => item.key === newClient.income);
      incomeValue = incomeValues[incomeIndex].value;
      setNewClient({
        ...newClient,
        score: age + spouse + home + morethanOnehome + incomeValue
      })
    }

  return(
    <ClientForm
      newClient={props.newClient}
      handleClientSubmit={props.handleClientSubmit}
      handleFieldChange={props.handleFieldChange}
      handleSelectChange={props.handleSelectChange}
      handleSelectValue={props.handleSelectValue}
      handleFieldChange={handleFieldChange}
      handleScore={handleScore}
      selected={props.selected}
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
