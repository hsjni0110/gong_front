import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'





const Option = ({ optionData: departmentInfo }) => {

  const stateOptions = departmentInfo.map((state, index) => ({
  key: index,
  text: state,
  value: state
  }))
  return (
    <Dropdown selection scrolling style={{ height : "fit-content" }} placeholder='전체' search options={stateOptions} lazyLoad />
  )
}

export default Option;