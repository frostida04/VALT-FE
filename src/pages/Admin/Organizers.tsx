import Header from "../../layouts/Header";
import BackHeader from "../../layouts/BackHeader";
import Card from "../../Elements/card";
import TextSection from "../../Elements/TextSection";
import MainCpn from "../../Elements/MainCpn";
import Footer from "../../layouts/Footer";
import OrganizeEventlistbar from "../../layouts/Admin/OrganizeEventlistbar";
import Eventlist from "../../layouts/Admin/Eventlist";
import { useEffect } from "react";
const Organizers = () => {
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
            <OrganizeEventlistbar />
            <Eventlist />
            <Footer/>
        </>
    )
}

export default Organizers;