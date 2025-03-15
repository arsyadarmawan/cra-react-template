import * as React from 'react';
import TopBar from "../../components/topbar";
import {useAddress} from "../../hooks/address";
import { LayoutOne, Text, Table, Button } from 'upkit';
import { Link } from "react-router-dom";

const columns = [
    {Header: 'Nama', accessor: 'nama'},
    {Header: 'Detail', accessor: alamat => {
            return <div>
                {alamat.provinsi}, {alamat.kabupaten}, {alamat.kecamatan}, {alamat.kelurahan} <br/>
                {alamat.detail}
            </div>
        }}
];
export default function UserAddress(){
    let { data,
        limit,
        page,
        status,
        count,
        setPage
    } = useAddress();

    return (
        <LayoutOne size="large">
            <div>
                <TopBar/>
                <Text as="h3"> Alamat pengiriman </Text>
                <br />
                <div>
                    <Link to="alamat-pengiriman/tambah">
                        <Button>
                            Tambah Baru
                        </Button>
                    </Link>
                    <br />
                    <br />
                    <Table
                        items={data}
                        columns={columns}
                        totalItems={count}
                        page={page}
                        perPage={limit}
                        isLoading={status === 'process'}
                        onPageChange={page => setPage(page)}
                    />
                </div>
                {status === 'success' && !data.length ? <div className="text-center p-10">
                    Kamu belum menambahkan alamat pengiriman. <br/>
                    <Link to="/alamat-pengiriman/tambah">
                        <Button> Tambah Baru </Button>
                    </Link>
                </div> : null}

            </div>
        </LayoutOne>
    )
}