import { atom } from "recoil";

export const searchState = atom({
    key: "searchState",
    default: false
})
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
});

export const sortByLike = atom({
    key: 'sortByLike',
    default: false
});

export const gyoGong = atom({
    key: 'gyoGong',
    default: 0
});

export const gyoHak = atom({
    key: 'gyoHak',
    default: 0
});

export const gyoIl = atom({
    key: 'gyoIl',
    default: 0
});

export const gyoJun = atom({
    key: 'gyoJun',
    default: 0
});

export const junGi = atom({
    key: 'junGi',
    default: 0
});

export const junHak = atom({
    key: 'junHak',
    default: 0
});

export const junSim = atom({
    key: 'junSim',
    default: 0
});

export const ilSun = atom({
    key: 'ilSun',
    default: 0
});

export const miSulsang = atom({
    key: 'miSulsang',
    default: 0
});