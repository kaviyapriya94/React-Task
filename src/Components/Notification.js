import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import NotificationBadge from 'react-notification-badge';
import { Effect } from "react-notification-badge";
import { useSelector } from "react-redux";

export default function Notifications({handleCartPage}){
    const count = useSelector(
        (state) => state.countReducer
      );
    console.log(count);
    return(
        <button className="notification btn bg-transparent border-transparent text-white" onClick={handleCartPage}>
            <NotificationBadge className="badge" count={count.count} effect={[Effect.SCALE]} />
            <FontAwesomeIcon icon={faShoppingCart} className="shoppingcart color-white" />
            
        </button>
    )
}