import _ from 'lodash'
import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'





const Option = ({ optionData, setOption, optionName }) => {

  const stateOptions = optionData.map((state, index) => ({
    key: index,
    text: state,
    value: state
  }))

  const onChangeHandler = (data) => {
    setOption(data.target.innerText) ;
  }
  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Label>{optionName}</Label>
    <Dropdown selection scrolling style={{ height : "fit-content" }} placeholder='전체' search options={stateOptions} lazyLoad onChange={(data) => onChangeHandler(data)}/>
    </div>
  )
}

export default Option;