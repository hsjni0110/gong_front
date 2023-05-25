import { atom } from "recoil";

export const subjectState = atom({
    key: 'subjectState',
    default : []
});

export const loadingState = atom({
    key: 'loadingState',
    default: false
});

export const modalState = atom({
    key: 'modalState',
    default: false
});

export const sortBySugang = atom({
    key: 'sortBySugang',
    default: false
})

export const sortByLike = atom({
    key: 'sortByLike',
    default: false
})