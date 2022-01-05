import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import NotificationBadge from 'react-notification-badge';
import { Effect } from "react-notification-badge";
import { useSelector } from "react-redux";

export default function Notifications(){
    const count = useSelector(
        (state) => state.countReducer
      );
    console.log(count);
    return(
        <div className="notification">
            <NotificationBadge className="badge" count={count.count} effect={[Effect.SCALE]} />
            <FontAwesomeIcon icon={faShoppingCart} className="shoppingcart color-white" />
            
        </div>
    )
}