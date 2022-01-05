
export function dataRetrievals(dataset) {
  return {
    type: 'DATA_RETRIEVAL',
    payload: { dataset }
  }
}
export function addCurrenty(currentys) {
  return {
    type: 'ADD_CURRENCY',
    payload: { currentys }
  }
}
export function dellCurently(Cur_Abbreviation) {
  return {
    type: 'DELL_CURRENCY',
    payload: { Cur_Abbreviation }
  }
}

export function sortCurently() {
  return {
    type: 'FILTER_CURRENCY',
    payload: {}
  }
}
