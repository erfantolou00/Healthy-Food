export const initialState = {
    foodCart: []
  };
  
  export const foodReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FOOD':
        const existingFood = state.foodCart.find(item => item.id === action.payload.id);
        if (existingFood) {
          return {
            ...state,
            foodCart: state.foodCart.map(item =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          };
        } else {
          return {
            ...state,
            foodCart: [...state.foodCart, { ...action.payload, count: 1 }]
          };
        }
  
      case 'REMOVE_FOOD':
        const foodToRemove = state.foodCart.find(item => item.id === action.payload.id);
        if (foodToRemove.count > 1) {
          return {
            ...state,
            foodCart: state.foodCart.map(item =>
              item.id === action.payload.id
                ? { ...item, count: item.count - 1 }
                : item
            )
          };
        } else {
          return {
            ...state,
            foodCart: state.foodCart.filter(item => item.id !== action.payload.id)
          };
        }
  
      default:
        return state;
    }
  };
  