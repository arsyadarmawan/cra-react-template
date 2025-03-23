import * as React from "react";
import { useRouteMatch } from 'react-router-dom';
import {getInvoiceByOrderId} from "../../api/invoice";
import { LayoutOne, Text, Table } from 'upkit';
import TopBar from '../../components/topbar';
import BounceLoader from 'react-spinners/BounceLoader';
import config from "../../config";
import StatusLabel from "../../components/statuslabel";
import {formatRupiahCurrency} from "../../utils/currency";

export default function Invoice(){
    let [invoice, setInvoice] = React.useState(null);
    let [error, setError] = React.useState('');
    let [status, setStatus] = React.useState('process');
    let { params } = useRouteMatch();

    React.useEffect(() => {
        getInvoiceByOrderId(params?.order_id)
            .then((data) => {
                if (data?.error){
                    setError(data.message || "Sedang terjadi perbaikan system");
                }
                setInvoice(data);
                console.log("invoice data", data);
            }).finally(() => {setStatus('process');
            });

    }, [params]);

    console.log("invoice STATUS", invoice);
    if(error.length){
        return (
            <LayoutOne>
                <TopBar/>
                <Text as="h3">Terjadi Kesalahan</Text>
                {error}
            </LayoutOne>
        )
    }
    if(status === 'process'){
        return (
            <LayoutOne>
                <TopBar/>
                <Text as="h3"> Invoice </Text>
                <div className="text-center py-10">
                    <div className="inline-block">
                        <BounceLoader color="red"/>
                    </div>
                </div>

                <br/>
                <Table
                    showPagination={false}
                    items={[
                        {label: 'Status', value: <StatusLabel status={invoice?.data?.payment_status}/>},
                        {label: 'Order ID', value: '#' + invoice?.data?.order?.order_number},
                        {label: 'Total amount', value: formatRupiahCurrency(invoice?.data?.total)},
                        {
                            label: 'Billed to', value: <div>
                                {/*{invoice.data}*/}
                                <b>{invoice?.data?.user?.full_name} </b> <br/>
                                {invoice?.data?.user?.email} <br/> <br/>
                                {invoice?.data?.delivery_address?.detail} <br/>
                                {invoice?.data?.delivery_address?.kelurahan},
                                {invoice?.data?.delivery_address?.kecamatan} <br/>
                                {invoice?.data?.delivery_address?.kabupaten} <br/>
                                {invoice?.data?.delivery_address?.provinsi}
                            </div>
                        },
                        {
                            label: 'Payment to', value: <div>
                                {config.owner} <br/>
                                {config.contact} <br/>
                                {config.billing.account_no} <br/>
                                {config.billing.bank_name}
                            </div>
                        },
                    ]}
                    columns={[
                        {Header: 'Invoice', accessor: 'label'},
                        {Header: '', accessor: 'value'},
                    ]}
                />
            </LayoutOne>
        )
    }

    return <div/>
}