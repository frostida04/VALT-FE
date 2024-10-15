import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();

    const Addeventbutton = () => {
      // Navigate to "/about" when the button is clicked
      navigate('/addevent');
    };
    return (
        <div className="w-full flex flex-col">

            <div className="w-full border border-grayColor border-x-[0px]  text-gray-500 ">
                <div className="w-full md:py-[39px] lg:py-[39px] sm:py-[18px] px-[16px] md:px-[39px] lg:px-[160px] flex md:flex-row  sm:flex-col sm:items-center sm:gap-y-[21px] justify-between ">
                    <div className="flex flex-row sm:flex-col sm:items-center lg:items-center md:items-center  sm:gap-y-[21px] ">
                        <img src="/assets/img/Logo.png" className="w-[72px] h-[60px]" alt="logo"></img>
                        <div className="flex flex-row gap-[24px] pl-[64px] sm:pl-0  sm:justify-between ">
                        <button className="flex">
                            <p className="text-[14px] font-bold text-grayColor">FAQ</p>
                        </button>
                        <button className="flex">
                            <p className="text-[14px] font-bold text-grayColor">Support</p>
                        </button >
                        <button className="flex">
                            <p className="text-[14px] font-bold text-grayColor">Contact</p>
                        </button>
                        <button className="flex">
                            <p className="text-[14px] font-bold text-grayColor">About</p>
                        </button>
                    </div>
                    </div>
                    <button onClick={Addeventbutton} className="w-[160px] flex justify-center items-center border-[2px] border-grayColor rounded-full text-white text-[16px] font-bold cursor-pointer
                    hover:bg-[#252b3b] active:bg-[#232e3b]">
                        Add event
                    </button>
                </div>

            </div>

             <div className=" py-[24px] flex justify-between items-start md:flex-wrap px-[16px] md:px-[39px] lg:px-[160px]">
                <div className="w-full flex sm:flex-col md:flex-row lg:flex-row md:justify-between">
                    {
                        
                        ['© 2024 Tavo Limited, Hong Kong', 'Terms and conditions', 'Privacy policy',].map((item, index) =>
                        <p
                            key={index}
                            className="text-[12px] font-normal text-grayColor mr-[90px] mb-4 text-left"
                        >
                            {item}
                        </p>
                    )}
                </div>
                <div className="flex justify-start items-center md:w-full gap-[24px]">
                    <a href="https://t.me/valt_coin">
                        <img src="/assets/img/telegram_icon.png" className="w-[24px] h-[24px]"></img>
                    </a>
                    <a href="https://www.linkedin.com/company/valt-coin/">
                        <img src="/assets/img/linkedin_icon.png" className="w-[24px] h-[24px]"></img>
                    </a>
                    <a href="https://x.com/valt_coin">
                        <img src="/assets/img/twitter_icon.png" className="w-[24px] h-[24px]"></img>
                    </a>
                </div>
            </div>

        </div>
    )
};

export default Footer;


