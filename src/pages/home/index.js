import * as React from 'react';
import { SideNav, LayoutSidebar, Responsive, CardProduct } from 'upkit';
import menus from './menus';
import TopBar from "../../components/topbar";
import { useDispatch, useSelector } from 'react-redux';

export default function Home(){
    let products = useSelector(state => state.products);
    return (
        <div>
            <LayoutSidebar
                sidebar={<SideNav items={menus} verticalAlign="top"/>}
                content={
                    <div className="md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen">
                        <div className="w-full md:w-3/4 pl-5 pb-10">
                            <TopBar/>
                        </div>
                        <div className="w-full md:w-1/4 h-full shadow-lg border-rborder-white bg-black-100">
                            Keranjang belanja di sini
                        </div>

                    </div>
                }
                sidebarSize={80}
            />

        </div>
        );
                }