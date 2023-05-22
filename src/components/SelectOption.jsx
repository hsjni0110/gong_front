import React from 'react'
import { Checkbox, Message } from 'semantic-ui-react'

const SelectOption = () => {
    return (
        <div style={{ margin: "2em"}}>
            <Message>
                <Message.Header>선택 옵션</Message.Header>
                <div style={{ display: "flex", gap: "2em", justifyContent : "center", margin: "1em"}}>
                <Checkbox label='수강 신청 순' />
                <Checkbox label="좋아요 순"/>
                </div>
            </Message>
        </div>
    )
}

export default SelectOption