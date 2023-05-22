import { atom } from "recoil";

export const subjectState = atom({
    key: 'subjectState',
    default : []
});


export const loadingState = atom({
    key: 'loadingState',
    default: false
})