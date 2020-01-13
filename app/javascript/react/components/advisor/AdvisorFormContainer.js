import React, { useState } from 'react'
import AdvisorForm from "./AdvisorForm"

const AdvisorFormContainer = props => {
  let newAdvisor = props.newAdvisor;
  let setNewAdvisor = props.setNewAdvisor;
  const [clientNumber, setClientNumber] = useState(0)
  const [assets, setAssets] = useState(0)
  const [income, setIncome] = useState(0)

  const [cfpToggle, setCfpToggle] = useState(false);
  const [aifToggle, setAifToggle] = useState(false);
  const [pfsToggle, setPfsToggle] = useState(false);
  const [chfcToggle, setChfcToggle] = useState(false);
  const [napfaToggle, setNapfaToggle] = useState(false);
  const [fpaToggle, setFpaToggle] = useState(false);

  const [cfp, setCfp] = useState("")
  const [aif, setAif] = useState("")
  const [pfs, setPfs] = useState("")
  const [chfc, setChfc] = useState("")
  const [napfa, setNapfa] = useState("")
  const [fpa, setFpa] = useState("")
  const [certificationCount, setCertificationCount] = useState(0)

  const [equity, setEquity] = useState(<div></div>)
  const [four, setFour] = useState(<div></div>)
  const [stocks, setStocks] = useState(<div></div>)

  const clientAmount = [{key:"< 50", value:1}, {key:"50 - 100", value:3},{key:"100 <",value:5}]
  const investableAssets = [{key:"< $250,000", value:1},{key:"< $1,000,000", value:5},{key:"$1,000,000 <", value:10}]
  const combinedIncome = [{key:"< $200,000", value:1},{key:"$200,000 - $500,000", value:3},{key:"$500,000 - $1,000,000", value:5},{key:"$1,000,000 <", value:10}]
  const businessOwners = ["< 5%", "< 10%", "10% <"]

  const clientNumberInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 19;
    setNewAdvisor({
      ...newAdvisor,
      clientNumber: clientAmount[selectId].key
    });
    setClientNumber(clientAmount[selectId].value)
  }

  const investableAssetsInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 22;
      setNewAdvisor({
        ...newAdvisor,
        avgClientInvestableAssets: investableAssets[selectId].key
      });
      setAssets(investableAssets[selectId].value)
    }

  const clientIncomeInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 25;
      setNewAdvisor({
        ...newAdvisor,
        totalClientIncome: combinedIncome[selectId].key
      });
      setIncome(combinedIncome[selectId].value)
    }

  const businessOwnersInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 35;
    setNewAdvisor({
      ...newAdvisor,
      clientBusinessOwners: businessOwners[selectId]
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

  const isEven = function(number) {
    if(number % 2 === 0){
      return("false");
    } else {
      return("true");
    }
  }

  const cfpInput = event => {
    setCertificationCount(certificationCount + 1);
    if (cfpToggle === false) {
      setCfpToggle(true);
      setCfp("CFP");
    } else {
      setCfpToggle(false);
      setCfp("");
    }
  }

  const aifInput = event => {
    setCertificationCount(certificationCount + 1);
    if (aifToggle === false) {
      setAifToggle(true)
      setAif("AIF");
    } else {
      setAifToggle(false);
      setAif("");
    }
  }

  const pfsInput = event => {
    setCertificationCount(certificationCount + 1);
    if (pfsToggle === false) {
      setPfsToggle(true)
      setPfs("PFS");
    } else {
      setPfsToggle(false);
      setPfs("");
    }
  }

  const chfcInput = event => {
    setCertificationCount(certificationCount + 1);
    if (chfcToggle === false) {
      setChfcToggle(true)
      setChfc("CHFC");
    } else {
      setChfcToggle(false);
      setChfc("");
    }
  }

  const napfaInput = event => {
    setCertificationCount(certificationCount + 1);
    if (napfaToggle === false) {
      setNapfaToggle(true)
      setNapfa("NAPFA");
    } else {
      setNapfaToggle(false);
      setNapfa("");
    }
  }

  const fpaInput = event => {
    setCertificationCount(certificationCount + 1);
    if (fpaToggle === false) {
      setFpaToggle(true)
      setFpa("FPA");
    } else {
      setFpaToggle(false);
      setFpa("");
    }
  }

  let certificationsList = [cfp, aif, pfs, chfc, napfa, fpa]
  let newList = certificationsList.toString()

const handleScore = event => {
  let level
  let stocksBonds = 0
  let annuities = 0
  let certification = 0

  if (newAdvisor.stocksAndBonds === "true") {
    stocksBonds = 10
  }
  if (newAdvisor.moreThan10PercentAnnuitiesOrEmployerPensions === "true") {
    annuities = 10
  }
  if (certificationCount > 1) {
    certification = 10
  }

  let score = clientNumber + assets + income + stocksBonds + annuities + certification
  if (score < 25) {level = 1} else if (score > 24 && score < 45) {level = 2} else if (score > 44) {level = 3}

  setNewAdvisor({
    ...newAdvisor,
    level: level,
    score: score,
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
      handleRadioTrue={handleRadioTrue}
      handleRadioFalse={handleRadioFalse}
      clientNumberInput={clientNumberInput}
      investableAssetsInput={investableAssetsInput}
      clientIncomeInput={clientIncomeInput}
      businessOwnersInput={businessOwnersInput}
      cfpInput={cfpInput}
      aifInput={aifInput}
      pfsInput={pfsInput}
      chfcInput={chfcInput}
      napfaInput={napfaInput}
      fpaInput={fpaInput}
      handleScore={handleScore}
      cfpControl={cfpToggle}
      aifControl={aifToggle}
      pfsControl={pfsToggle}
      chfcControl={chfcToggle}
      napfaControl={napfaToggle}
      fpaControl={fpaToggle} />
  )
}

      export default AdvisorFormContainer
