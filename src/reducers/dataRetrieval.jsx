const initState = {
  currenty: [],
  dataRetrieval: [],
}

function reducer(state = initState, action) {
  switch (action.type) {

    case 'DATA_RETRIEVAL': {
      const dataset = action.payload.dataset
      return {
        ...state,
        dataRetrieval: dataset,
        currenty: dataset,
      }
    }

    case 'ADD_CURRENCY': {
      const currenty = [...state.currenty];
      const newCurrency = [...state.dataRetrieval];
      newCurrency.push(action.payload.currentys)
      return {
        ...state,
        dataRetrieval: newCurrency,
      }
    }
    case 'DELL_CURRENCY': {
      const Cur_Abbreviation = action.payload.Cur_Abbreviation;
      const newCurrency = [...state.dataRetrieval];
      const delCurrency = newCurrency.filter(item => item.Cur_Abbreviation !== Cur_Abbreviation)
      return {
        ...state,
        dataRetrieval: delCurrency,
      }
    }
    case 'FILTER_CURRENCY': {
      const newCurrency = [...state.dataRetrieval];
      const delCurrency = newCurrency.sort(newCurrency.Cur_Abbreviation)
      return {
        ...state,
        dataRetrieval: delCurrency,
      }
    }
    default: return state;
  }
}

export default reducer;