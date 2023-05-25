import React, {useState} from 'react'
import { Checkbox, Message } from 'semantic-ui-react'
import {sortBySugang} from '../state/state'
import {sortByLike} from '../state/state'
import { useSetRecoilState } from 'recoil';

const SelectOption = () => {
    const [ sugangCheck, setSugangCheck ] = useState(false);
    const [ likeCheck, setLikeCheck ] = useState(false);
    const setSortBySugang = useSetRecoilState(sortBySugang);
    const setSortByLike = useSetRecoilState(sortByLike);

    const sugangCheckboxChange = () => {
        setSugangCheck(!sugangCheck);
        setSortBySugang(!sugangCheck);
        !sugangCheck ? setLikeCheck(false) : setLikeCheck(likeCheck);
        !sugangCheck ? setSortByLike(false) : setSortByLike(likeCheck);
    };

    const likeCheckboxChange = () => {
        setLikeCheck(!likeCheck);
        setSortByLike(!likeCheck);
        !likeCheck ? setSugangCheck(false) : setSugangCheck(sugangCheck);
        !likeCheck ? setSortBySugang(false) : setSortBySugang(sugangCheck);
    };

    return (
        <div style={{ margin: "2em"}}>
            <Message>
                <Message.Header>선택 옵션</Message.Header>
                <div style={{ display: "flex", gap: "2em", justifyContent : "center", margin: "1em"}}>
                <Checkbox label='수강 신청 순' checked={sugangCheck} onChange={sugangCheckboxChange}/>
                <Checkbox label='좋아요 순' checked={likeCheck} onChange={likeCheckboxChange} />
                </div>
            </Message>
        </div>
    )
}

export default SelectOption