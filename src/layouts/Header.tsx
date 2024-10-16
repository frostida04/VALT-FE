import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        // Navigate to "/about" when the button is clicked
        navigate('/');
    };

    return (
        <>
            <div className="relative justify-center text-white w-full lg:py-[20px] lg:px-[80px] sm:py-[24px] sm:px-[32px] md:py-[24px] md:px-[32px] flex flex-row gap-9 items-center border-grayBackgroundColor border-x-0 border-y-2">
                <button onClick={handleClick}><img src="/assets/img/Logo.png" className="w-[72px] h-[60px]" alt="Logo"></img></button>
                <div className="border border-grayBackgroundColor h-[50px] sm:hidden"></div>
                <div className="flex flex-wrap-reverse justify-between w-full items-center gap-x-0 gap-y-3">

                    <div className="flex flex-row items-center sm:hidden md:order-1">
                        <img src="/assets/img/valt.png" className="w-10 h-10" alt="VALT"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$VALT</p>
                        <p className="pl-6 text-[20px] md:text-[14px] font-semibold">1.00</p>
                    </div>
                    <div className="flex flex-row items-center sm:hidden">
                        <img src="/assets/img/USDT.png" className="w-10 h-10" alt="USDT"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$USDT</p>
                        <p className="pl-6  text-[18px] md:text-[12px] font-semibold">18.00</p>
                    </div>

                    <div className="flex flex-row items-center sm:hidden">
                        <img src="/assets/img/BTC.png" className="w-10 h-10" alt="BTC"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$BtC</p>
                        <p className="pl-6  text-[18px] md:text-[12px] font-semibold">N/A</p>
                    </div>

                    <div className="flex flex-row items-center sm:hidden">
                        <img src="/assets/img/Eth.png" className="w-10 h-10" alt="ETH"></img>
                        <p className="ml-[10px] text-[12px] font-bold text-greyfont">$ETH</p>
                        <p className="pl-6  text-[18px] md:text-[12px] font-semibold">N/A</p>
                    </div>

                </div>

                {/* Add flex-shrink-0 to prevent shrinking */}
                {/* <button className="sm:absolute md:hidden border-2 rounded-full py-[12px] px-[16px] w-[93px] h-10 flex-shrink-0 items-center flex justify-center border-grayColor">
                    En
                </button> */}
                <img src="/assets/img/Connect_metamask_Click.png" className="w-[172px] h-[33px] md:hidden sm:hidden" alt="Connect Metamask"></img>
                <div className="hidden sm:block w-[21.3px] h-[10.6px] border-y-2 border-grayBackgroundColor  flex-shrink-0 "></div>

            </div>
            <div className="flex flex-row gap-9 mt-5 px-[32px] text-white float-right">

                {/* <button className="rounded-full border-2 py-[12px] px-[16px] w-[93px] h-10 items-center flex justify-center border-grayColor xl:hidden sm:hidden lg:hidden">
                    En
                </button> */}
                <img src="/assets/img/Connect_metamask_Click.png" className="w-[172px] h-[33px] xl:hidden sm:hidden lg:hidden" alt="Connect Metamask"></img>
            </div>
        </>
    )
}

export default Header
