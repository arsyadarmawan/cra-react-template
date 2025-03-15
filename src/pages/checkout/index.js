import * as React from "react";
import {
    LayoutOne,
    Text,
    Steps
} from 'upkit';
import FaCartPlus from '@meronex/icons/fa/FaCartPlus';
import FaAddressCard from '@meronex/icons/fa/FaAddressCard';
import FaInfoCircle from '@meronex/icons/fa/FaInfoCircle';
import TopBar from "../../components/topbar";

const IconWrapper = ({children}) => {
    return <div className="text-3xl flex justify-center">
        {children}
    </div>
}

const steps = [
    {
        label: 'Item',
        icon: <IconWrapper><FaCartPlus/></IconWrapper>
    },
    {
        label: 'Alamat',
        icon: <IconWrapper><FaAddressCard/></IconWrapper>
    },
    {
        label: 'Konfirmasi',
        icon: <IconWrapper><FaInfoCircle/></IconWrapper>
    }
];

export default function Checkout(){
    return (
         <LayoutOne>
            <TopBar/>
            <Text as="h3">Checkout</Text>
            <Steps
                steps={[
                    {label: 'Alamat Pengiriman', active: true},
                    {label: 'Pembayaran'},
                    {label: 'Selesai'}
                ]}></Steps>
        </LayoutOne>
    );
}