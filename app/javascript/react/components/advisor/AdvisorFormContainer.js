import React, { useState } from 'react'
import AdvisorForm from "./AdvisorForm"

const AdvisorFormContainer = props => {
  let newAdvisor = props.newAdvisor;
  let setNewAdvisor = props.setNewAdvisor;
  const [score, setScore] = useState(0)
  const [clientTally, setClientTally] = useState(0)
  const [assetTally, setAssetTally] = useState(0)
  const [incomeTally, setIncomeTally] = useState(0)
  const [annuitiesTally, setAnnuitiesTally] = useState(0)
  const [stocksTally, setStocksTally] = useState(0)

  const [lastValue, setLastValue] = useState()
  const [lastValueTwo, setLastValueTwo] = useState()
  const [lastValueThree, setLastValueThree] = useState()
  const [lastValueFour, setLastValueFour] = useState()

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
    setClientTally(clientTally + 1);
    if (clientTally < 1) {
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: clientAmount[selectId].key,
      score: (newAdvisor.score + clientAmount[selectId].value) * 1
    });
    setLastValue(clientAmount[selectId].value)
  } else {
      setNewAdvisor({
        ...newAdvisor,
        [event.currentTarget.name]: clientAmount[selectId].key,
        score: (newAdvisor.score - lastValue + clientAmount[selectId].value) * 1
      });
      setLastValue(clientAmount[selectId].value)
    }
  }

  const investableAssetsInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 22;
    setAssetTally(assetTally + 1);
    if (assetTally < 1) {
      setNewAdvisor({
        ...newAdvisor,
        [event.currentTarget.name]: investableAssets[selectId].key,
        score: (newAdvisor.score + investableAssets[selectId].value) * 1
      });
      setLastValueTwo(investableAssets[selectId].value)
    } else {
      setNewAdvisor({
        ...newAdvisor,
        [event.currentTarget.name]: investableAssets[selectId].key,
        score: (newAdvisor.score - lastValueTwo + investableAssets[selectId].value) * 1
      });
      setLastValueTwo(investableAssets[selectId].value)
    }
  }

  const clientIncomeInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 25;
    setIncomeTally(incomeTally + 1);
    if (incomeTally < 1) {
      setNewAdvisor({
        ...newAdvisor,
        [event.currentTarget.name]: combinedIncome[selectId].key,
        score: (newAdvisor.score + combinedIncome[selectId].value) * 1
      });
      setLastValueThree(combinedIncome[selectId].value)
    } else {
      setNewAdvisor({
        ...newAdvisor,
        [event.currentTarget.name]: combinedIncome[selectId].key,
        score: (newAdvisor.score - lastValueThree + combinedIncome[selectId].value) * 1
      });
      setLastValueThree(combinedIncome[selectId].value)
    }
  }

  const businessOwnersInput = event => {
    let selectId = parseInt(event.currentTarget.id) - 35;
    setNewAdvisor({
      ...newAdvisor,
      [event.currentTarget.name]: businessOwners[selectId]
    })
  }

    const stocksAndBondsBoolean = event => {
      let stocksAnswer
      let selectId = parseInt(event.currentTarget.id);
      if (selectId === 36) {
        stocksAnswer = "true";
        setStocksTally(stocksTally + 1);
        setNewAdvisor({
          ...newAdvisor,
          stocksAndBonds: stocksAnswer,
          score: newAdvisor.score + 10
        })
      } else if (selectId === 37) {
        stocksAnswer = "false";
        if (stocksTally > 0) {
          setNewAdvisor({
            ...newAdvisor,
            score: newAdvisor.score - 10,
            stocksAndBonds: stocksAnswer
          })
        } else {
          setNewAdvisor({
            ...newAdvisor,
            stocksAndBonds: stocksAnswer
          })
        }
      }
    }

  const annuitiesOrEmployerPensions = event => {
    let annuitiesAnswer
    let selectId = parseInt(event.currentTarget.id);
    if (selectId === 40) {
      annuitiesAnswer = "true";
      setAnnuitiesTally(annuitiesTally + 1);
      setNewAdvisor({
        ...newAdvisor,
        moreThan10PercentAnnuitiesOrEmployerPensions: annuitiesAnswer,
        score: newAdvisor.score + 10
      })
  } else if (selectId === 41) {
    annuitiesAnswer = "false";
    if (annuitiesTally > 0) {
      setNewAdvisor({
        ...newAdvisor,
        score: newAdvisor.score - 10,
        moreThan10PercentAnnuitiesOrEmployerPensions: annuitiesAnswer
      })
    } else {
      setNewAdvisor({
        ...newAdvisor,
        moreThan10PercentAnnuitiesOrEmployerPensions: annuitiesAnswer
      })
    }
  }
}

  const cfpInput = event => {setCfp("CFP"); setCertificationCount(certificationCount + 1)}
  const aifInput = event => {setAif("AIF"); setCertificationCount(certificationCount + 1)}
  const pfsInput = event => {setPfs("PFS"); setCertificationCount(certificationCount + 1)}
  const chfcInput = event => {setChfc("CHFC"); setCertificationCount(certificationCount + 1)}
  const napfaInput = event => {setNapfa("NAPFA"); setCertificationCount(certificationCount + 1)}
  const fpaInput = event => {setFpa("FPA"); setCertificationCount(certificationCount + 1)}

  let certificationsList = [cfp, aif, pfs, chfc, napfa, fpa]
  let newList = certificationsList.toString()

  const handleIndependentAnswer = event => {
    let independentAnswer
    let selectId = parseInt(event.currentTarget.id);
    if (selectId === 48) {independentAnswer = "true"} else if (selectId === 49) {independentAnswer = "false"};
    if (certificationCount > 1) {
      setNewAdvisor({
        ...newAdvisor,
        independent: independentAnswer,
        certifications: newList,
        score: newAdvisor.score + 10
      })
    } else {
      setNewAdvisor({
        ...newAdvisor,
        independent: independentAnswer,
        certifications: newList,
    })
  }
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
      annuitiesOrEmployerPensions={annuitiesOrEmployerPensions}
      handleIndependentAnswer={handleIndependentAnswer}
      stocksAndBondsBoolean={stocksAndBondsBoolean}
      cfpInput={cfpInput}
      aifInput={aifInput}
      pfsInput={pfsInput}
      chfcInput={chfcInput}
      napfaInput={napfaInput}
      fpaInput={fpaInput} />
  )
}

      export default AdvisorFormContainer
