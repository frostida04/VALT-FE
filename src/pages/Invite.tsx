import BackHeader from "../layouts/BackHeader";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ConfirmInv from "../layouts/ConfirmInv";
import { useEffect } from "react";
const Invite = () => {
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);
    return (
        <div>
            <Header/>
            <BackHeader/>
            <ConfirmInv />
            <Footer />
        </div>
    )
}

export default Invite;