import './App.css';
import src from './korzina-internet-magazina.gif';
import {cartReducer, CartType} from './state/cartReducer';
import React, {useEffect, useReducer, useState} from "react";
export const Reducer = () => {

    const [addItemInput, setAddItemInput] = useState<string>('');
    const [removeItemInput, setRemoveItemInput] = useState<string>('');

    const [inputValue, setInputValue] = useState<string>('');

    const cart:CartType = {

        cartCount: 0,
        cartItem: []
    }

    const [state, dispatch] = useReducer(cartReducer, cart);
    const [cartItems, setCartItems] = useState<Array<string>>(cart.cartItem);
    const [cartItemsCount, setCartItemsCount] = useState<number>(cart.cartCount);
    const addHandler = () => {
         dispatch({type: 'BUY_ITEM', payload: addItemInput});

    }
    const removeHandler = () => {
        dispatch({type: 'REMOVE_ITEM', payload: removeItemInput});

    }

    useEffect(() => {
        setCartItems(state.cartItem);
        setCartItemsCount(state.cartCount);
    }, [state]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddItemInput(event.target.value);
    };

    const handleRemoveInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemoveItemInput(event.target.value);
    };

    return (
        <div>
            <h3>Корзина</h3>
            <div>
                <input type={'text'} onChange={handleInputChange} className={'inputItem'}/>
                <button className={'btn'} onClick={addHandler}>Положить товар в корзину</button>
            </div>
            <div className={'cart'}>
                <div className={'cart-items'}>{cartItems.join(', ')}</div>
            </div>
            <div>
                <input type={"text"} onChange={handleRemoveInputChange} className={'inputItem'}/>
                <button className={'btn'} onClick={removeHandler}>Убрать из корзины</button>
            </div>

            <div className={'cart'}>
                <div className={'cart-item'}>
                    <img src={src} alt="cart" className={'cart-gif'}/>
                    <div className={'cart-count'}>{cartItemsCount}</div>
                </div>
            </div>
        </div>
    )
}