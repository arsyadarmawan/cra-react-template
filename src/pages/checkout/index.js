import * as React from "react";
import {
    LayoutOne,
    Text,
    Steps,
    Table,
    Button,
    Responsive
} from 'upkit';
import FaCartPlus from '@meronex/icons/fa/FaCartPlus';
import FaAddressCard from '@meronex/icons/fa/FaAddressCard';
import FaInfoCircle from '@meronex/icons/fa/FaInfoCircle';
import FaArrowLeft from '@meronex/icons/fa/FaArrowLeft';
import FaRegCheckCircle from '@meronex/icons/fa/FaRegCheckCircle';
import TopBar from "../../components/topbar";
import { useSelector, useDispatch } from 'react-redux';
import config from "../../config";
import {formatRupiahCurrency} from "../../utils/currency";
import {sumPrice} from "../../features/cart/actions";
import FaArrowRight from '@meronex/icons/fa/FaArrowRight';
import {useAddress} from "../../hooks/address";
import { Link, useHistory,Redirect } from 'react-router-dom';
import {createOrder} from "../../api/order";
import {clearItems} from "../../features/cart/actions";



const columns = [
    {
        Header: 'Product Name',
        accessor: item => <div className="flex items-center">
            <img src={`${config.api_host}/upload/${item.image_url}`} width={48} alt={item.name}/>
            {item.name}
        </div>
    }, {
        Header: 'Quantity',
        accessor: 'qty'
    },
    {
        Header: 'Price',
        id: 'price',
        accessor: item => <span> @ {formatRupiahCurrency(item.price)} </span>
    }, {
        Header: 'Sub Total',
        id: 'subtotal',
        accessor: item => {
            return <div>
                { formatRupiahCurrency(item.price * item.qty)}
            </div>
        } }
];

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

const addressColumns = [
    {
        Header: 'Address',
        accessor: alamat => {
            return <div>
                {alamat.nama} <br/>
                <small>
                    {alamat.provinsi}, {alamat.kabupaten}, {alamat.kecamatan},
                    {alamat.kelurahan} <br/>
                    {alamat.detail}
                </small>
            </div>
        }
    }
];

export default function Checkout(){
    let [ activeStep, setActiveStep ] = React.useState(0);
    let cart = useSelector(state => state.cart);
    let [ selectedAddress, setSelectedAddress ] = React.useState(null);

    let { data,
        status,
        limit,
        page,
        count,
        setPage
    } = useAddress();
    let history = useHistory();
    let dispatch = useDispatch();

    // create function handle create order
    const handleCreateOrder = async () => {
        let payload = {
            delivery_fee: config.global_ongkir,
            delivery_address: selectedAddress._id
        }


        let { data } = await createOrder(payload);
        if(data?.error) return;
        history.push(`/invoice/${data._id}`);
        dispatch(clearItems());
    }

    if(!cart.length) {
        return <Redirect to="/" />
    }

    return (
        <LayoutOne>
            <TopBar/>
            <Text as="h3">Checkout</Text>
            <Steps
                steps={[
                    {label: 'Alamat Pengiriman', active: true},
                    {label: 'Pembayaran'},
                    {label: 'Selesai'}
                ]}>
                steps={steps}
                activeStep={activeStep}
            </Steps>


            {activeStep === 0 ? <div>
                <br/>
                <br/>
                <Table
                    items={cart}
                    columns={columns}
                    perPage={cart.length}
                    showPagination={false}
                />
                <br/>
                <div className="text-right">
                    <Text as="h3">
                        Subtotal: {formatRupiahCurrency(sumPrice(cart))}
                    </Text>

                    <br/>
                    <Button
                        onClick={_ => setActiveStep(activeStep + 1)}
                        color="red"
                        iconAfter={<FaArrowRight/>}
                    > Next </Button>
                </div>
            </div> : null}

            {
                activeStep === 1 ? <div>
                    <br/><br/>
                    <Table
                        items={data}
                        columns={addressColumns}
                        perPage={limit}
                        page={page}
                        onPageChange={page => setPage(page)}
                        totalItems={count}
                        isLoading={status === 'process'}
                        selectable
                        primaryKey={'_id'}
                        selectedRow={selectedAddress}
                        onSelectRow={item => setSelectedAddress(item)}
                    />

                    {data && !data.length && status === 'success' ?
                        <div className="text-center my-10">
                            <Link to="/alamat-pengiriman/tambah">
                                Kamu belum memiliki alamat pengiriman <br/> <br/>
                                <Button> Tambah alamat </Button>
                            </Link>
                        </div>
                        : null
                    }

                    <br/><br/>
                    <Responsive desktop={2} tablet={2} mobile={2}>
                        <div>
                            <Button
                                onClick={_ => setActiveStep(activeStep - 1)}
                                color="gray"
                                iconBefore={<FaArrowLeft/>}>
                                Previous
                            </Button>
                        </div>

                        <div className="text-right">
                            <Button
                                onClick={_ => setActiveStep(activeStep + 1)}
                                disabled={!selectedAddress}
                                color="red"
                                iconAfter={<FaArrowRight/>}>
                                Next
                            </Button>
                        </div>
                    </Responsive>
                </div> : null
            }
            { activeStep === 2 ?
                <div>
                    <Table
                        columns={[
                            {
                                Header: '',
                                accessor: 'label',
                            },
                            {
                                Header: '',
                                accessor: 'value'
                            }
                        ]}
                        items={[
                            {label: 'Alamat', value: <div>
                                    {selectedAddress.nama} <br/>
                                    {selectedAddress.provinsi}, {selectedAddress.kabupaten}, {selectedAddress.kecamatan}, {selectedAddress.kelurahan} <br/>
                                    {selectedAddress.detail}

                                </div>},
                            {label: 'Subtotal', value: formatRupiahCurrency(sumPrice(cart))},
                            {label: 'Ongkir', value: formatRupiahCurrency(config.global_ongkir)},
                            {label: 'Total', value: <b>{formatRupiahCurrency(sumPrice(cart) + parseInt(config.global_ongkir))}</b>},
                        ]}
                        showPagination={false}
                    />
                    <br />
                    <Responsive desktop={2} tablet={2} mobile={2}>
                        <div>
                            <Button
                                onClick={_ =>  setActiveStep(activeStep - 1)}
                                color="gray"
                                iconBefore={<FaArrowLeft/>}>
                                Sebelumnya
                            </Button>
                        </div>
                        <div className="text-right">
                            <Button
                                onClick={handleCreateOrder}
                                color="red"
                                size="large"
                                iconBefore={<FaRegCheckCircle/>}
                            >
                                Bayar
                            </Button>
                        </div>
                    </Responsive>
                </div>
                : null}


        </LayoutOne>
)
;
}