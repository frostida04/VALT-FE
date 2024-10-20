import { useNavigate } from 'react-router-dom';

const Card = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      // Navigate to "/about" when the button is clicked
    //   navigate('/detail');
    };
    return (
        <div className="w-full sm:px-[16px] flex md:flex-col sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-darkgrayBackgroundColor justify-between 
        hover:bg-[#252b3b] active:bg-[#232e3b] ">
            <div className="flex md:flex-row sm:flex-col gap-x-8 sm:gap-y-8">
                {/* <img src='/assets/img/section1_logo.png' className='w-[168px] h-[168px] hidden lg:block'></img> */}
                <img src='/assets/img/logo2.png' className='w-[168px] h-[168px] block'></img>
                <div className="flex flex-col gap-y-3 justify-start items-start">
                    <div className="flex flex-row gap-x-4 h-8">
                        <div className="px-2 rounded bg-pinkColor font-bold text-lg text-white min-w-[88px]">
                            {/* <span className="hidden lg:block">AUG 23, 18:00 (UTC)</span> */}
                            <span className="sm:block md:block md:text-[14px] sm:text-[13px]">AUG 22-23</span>
                        </div>
                        <div className="px-2 rounded border-2 border-yellowColor  font-bold text-lg text-yellowColor">SOCCER</div>
                        <div className="px-2 rounded border-2 border-redColor  font-bold text-lg text-redColor">ONLINE</div>
                    </div>

                    <div className="text-4xl leading-[36px] text-grayWhiteColor font-semibold lg:block">Battle of Bloggers - Show</div>

                    <div className="text-[26px] leading-[24px] font-normal text-grayColor lg:block">Real Madrid - Barcelond</div>

                    <a href="https://coinfest.asid" className="text-[22px] leading-[24px] font-normal text-blueTextColor">coinfest.asid</a>
                </div>
            </div>
            <button className="bg-grayBackgroundColor flex rounded-3xl lg:w-[370px] w-full flex-col pt-[42px] md:mt-8 hover:bg-darkgrayBackgroundColor active:bg-[#252b3b]"  onClick={handleClick}>
                <div className="w-full flex flex-row items-center justify-center rounded-3xl bg-transparent gap-1">
                    <img src="/assets/img/wallet_icon.png" className="w-[56px] h-[56px]" alt="wallet_icon"></img>
                    <div className="text-[38px] leading-[24px] font-semibold text-greenColor">500</div>
                </div>
                <div className="w-full flex items-center justify-center py-6">
                    <p className="text-[22px] sm:text-[18px] leading-[16px] font-bold text-white">BUY $VALT GET FREE INVITE</p>
                </div>
            </button>
        </div>
    )
}

export default Card;