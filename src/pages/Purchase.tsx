import BackHeader from "../layouts/BackHeader";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ConfirmPch from "../layouts/ConfirmPch";
import { useEffect } from "react";
const Purchase = () => {
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
            <ConfirmPch />
            <div className="mt-24"><Footer /></div>
        </div>
    )
}

export default Purchase;