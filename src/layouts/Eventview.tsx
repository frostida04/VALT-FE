import Header from "../layouts/Header";
import BackHeader from "../layouts/BackHeader";
import Cardpre from "../Elements/card_pre";
import Footer from "../layouts/Footer";
import MainCpn from "../Elements/MainCpn";
import TextSection from "../Elements/TextSection";

const Eventview = () => {

    return (
        <div className="flex flex-col">
            <div className="px-40 sm:px-4">
                <Cardpre />
            </div>
            <div className="px-40 sm:px-4 pt-8">
                <TextSection />
            </div>
            <div className="px-40 sm:px-4 pt-8">
                <MainCpn />
            </div>
        </div>
    )
}

export default Eventview;
