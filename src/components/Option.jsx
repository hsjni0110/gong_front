import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'





const Option = ({ optionData, setOption }) => {

  const stateOptions = optionData.map((state, index) => ({
    key: index,
    text: state,
    value: state
  }))

  const onChangeHandler = (data) => {
    setOption(data.target.innerText) ;
  }
  return (
    <Dropdown selection scrolling style={{ height : "fit-content" }} placeholder='전체' search options={stateOptions} lazyLoad onChange={(data) => onChangeHandler(data)}/>
  )
}

export default Option;