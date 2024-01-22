export type CartType = {
   cartCount : number,
   cartItem: Array<string>
}

export type CartActionType = {

   type: string,
   [key:string] : string,
   payload: string
}
//cartReducer с маленькой буквы
export const cartReducer = (state: CartType, action: CartActionType): CartType => {

   switch (action.type) {

      case 'BUY_ITEM' :
         return {
            ...state,
            cartCount : state.cartCount + 1,
            cartItem: [...state.cartItem, action.payload]
         };

      case  'REMOVE_ITEM' :

         const itemNameToRemove = action.payload;

         const itemIndexToRemove = state.cartItem.findIndex(item => item === itemNameToRemove);
         if(itemIndexToRemove !== -1) {
            const newCartItems = [...state.cartItem.slice(0, itemIndexToRemove), ...state.cartItem.slice(itemIndexToRemove + 1)];

            return {
               ...state,
               cartCount: state.cartCount - 1,
               cartItem: newCartItems
            };
         } else {
            return state
         }
      default:
         return state;
   }

}

