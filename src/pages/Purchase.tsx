import BackHeader from "../layouts/BackHeader";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ConfirmPch from "../layouts/ConfirmPch";

const Purchase = () => {
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