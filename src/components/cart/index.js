import * as React from 'react';
import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types';
import {
    CardItem,
    Button
} from 'upkit';
import FaArrowRight from '@meronex/icons/fa/FaArrowRight'
import config from '../../config';

export default function Cart({items, onItemInc, onItemDec, onCheckout}){
    return ( <div>
            <Button
                text="Checkout"
                fitContainer
                iconAfter={<FaArrowRight/>}
                disabled={!items.length}
                onClick={onCheckout}
            />
            {!items.length ? <div className="text-center text-sm text-red-900">
                No items in carts </div> : null}
            {items.map((item, index) => {
                return <div key={index} className="mb-2">
                    <CardItem
                        imgUrl={`${config.api_host}/upload/${item.image_url}`}
                        name={item.name}
                        qty={item.qty}
                        color="orange"
                        onInc={_ => onItemInc(item)}
                        onDec={_ => onItemDec(item)}
                    /> </div>
            })}
        </div>
    )
}

Cart.propTypes = {
    items: arrayOf(shape({
        _id: string.isRequired,
        name: string.isRequired,
        qty: oneOfType([string, number]).isRequired
    })),
    onItemInc: func,
    onItemDec: func,
    onCheckout: func
}