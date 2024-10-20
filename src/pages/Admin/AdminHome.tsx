import Header from "../../layouts/Header";
import BackHeader from "../../layouts/BackHeader";
import Card from "../../Elements/card";
import TextSection from "../../Elements/TextSection";
import MainCpn from "../../Elements/MainCpn";
import Footer from "../../layouts/Footer";
import AdminEventlistbar from "../../layouts/Admin/AdminEventlistbar";
import Eventlist from "../../layouts/Admin/Eventlist";
import { useEffect } from "react";
const AdminHome = () => {
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return (
        <>
            {/* <Header/> */}
            <Header/>
            <AdminEventlistbar />
            <Eventlist />
            <Footer/>
        </>
    )
}

export default AdminHome;