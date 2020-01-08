import React, { useState } from 'react'
import HiddenQuestions from "./HiddenQuestions"

const ClientFormContainer = props => {
  let newClient = props.newClient;
  let setNewClient = props.setNewClient;

  const incomeValues = [{key:"< $50,000",value:1},{key:"$50,000 - $100,000",value:2},{key:"$100,000 - $200,000",value:3},{key:"$200,000 <",value:5}]
  const equityValues = [{key:"< $0",value:0},{key:"$0 - $200,000",value:3},{key:"$200,000 <",value:5}]
  const stocks401kValues = [{key:"< $250,000",value:1},{key:"$250,000 - $500,000",value:3},{key:"$500,000 - $1,000,000",value:5},{key:"$1,000,000 <",value:10}]

  const [income, setIncome] = useState(0)
  const [spouseIncome, setSpouseIncome] = useState(0)
  const [equity, setEquity] = useState(0)
  const [four, setFour] = useState(0)
  const [stocks, setStocks] = useState(0)
  const [pension, setPension] = useState(0)
  const [kidsOne, setKidsOne] = useState(0)

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

  const handleFieldChange = event => {
      setNewClient({
        ...newClient,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }

  const handleKids = event => {
    setNewClient({
      ...newClient,
      kids: "true"
    });
  }

  const handleSelectChange = event => {
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
      setIncome(incomeValues[selectId].value)
    }

    const spouseIncomeInput = event => {
      let selectId = parseInt(event.currentTarget.id) - 7;
      setNewClient({
        ...newClient,
        [event.currentTarget.name]: incomeValues[selectId].key,
        spouse: "true"
      })
      setSpouseIncome(incomeValues[selectId].value)
    }

    const equityInput = event => {
      let selectId = parseInt(event.currentTarget.id);
      setNewClient({
        ...newClient,
        [event.currentTarget.name]: equityValues[selectId].key
      })
      setEquity(equityValues[selectId].value)
    }

    const handle401kBoolean = event => {
      let selectId = parseInt(event.currentTarget.id);
      let answer
      if (selectId === 50) {answer = "true"} else if (selectId === 51) {answer = "false"; setFour(0)}
      setNewClient({
        ...newClient,
        [event.currentTarget.name]: answer
      })
    }

    const inputOf401kValue = event => {
      let selectId = parseInt(event.currentTarget.id) - 11;
      setNewClient({
        ...newClient,
        retirementamount: stocks401kValues[selectId].key
      })
      setFour(stocks401kValues[selectId].value)
    }

    const handleStocksBoolean = event => {
      let selectId = parseInt(event.currentTarget.id);
      let answer
      if (selectId === 52) {answer = "true"} else if (selectId === 53) {answer = "false"; setStocks(0)}
      setNewClient({
        ...newClient,
        stocksbonds: answer
      })
    }

    const stocksBondsInput = event => {
      let selectId = parseInt(event.currentTarget.id) - 15;
      setNewClient({
        ...newClient,
        stocksbondsamount: stocks401kValues[selectId].key
      })
      setStocks(stocks401kValues[selectId].value)
    }

    const handlePensionInput = event => {
      let selectId = parseInt(event.currentTarget.id);
      let answer
      if (selectId === 54) {answer = "true"; setPension(10)} else if (selectId === 55) {answer = "false"}
      setNewClient({
        ...newClient,
        pension: answer
      })
    }

    const handleScore = event => {
      let level
      let age = 0
      let spouse = 0
      let home = 0
      let morethanOnehome = 0

      if (newClient.age < 40) {
        age = 1
      }
      if (newClient.age > 39 && newClient.age < 50) {
        age = 2
      }
      if (newClient.age > 49) {
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

      let score = age + spouse + home + morethanOnehome + income + spouseIncome + equity + four + stocks + pension
      if (score < 20) {level = 1} else if (score > 19 && score < 45) {level = 2} else if (score > 44) {level = 3}

      setNewClient({
        ...newClient,
        level: level,
        kidsNumber: "Kids (0-5) - " + kidsOne,
        score: score
      })
    }

  return(
    <HiddenQuestions
      newClient={newClient}
      setNewClient={setNewClient}
      handleClientSubmit={props.handleClientSubmit}
      handleSelectChange={props.handleSelectChange}
      handleSelectValue={props.handleSelectValue}
      handleFieldChange={handleFieldChange}
      handleScore={handleScore}
      selected={props.selected}
      handleRadioTrue={handleRadioTrue}
      handleRadioFalse={handleRadioFalse}
      incomeInput={incomeInput}
      spouseIncomeInput={spouseIncomeInput}
      equityInput={equityInput}
      handle401kBoolean={handle401kBoolean}
      inputOf401kValue={inputOf401kValue}
      handleStocksBoolean={handleStocksBoolean}
      stocksBondsInput={stocksBondsInput}
      handlePensionInput={handlePensionInput}
      handleKids={handleKids} />
  )
}

      export default ClientFormContainer
