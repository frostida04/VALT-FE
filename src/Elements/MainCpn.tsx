import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const MainCpn = ({gen_invvalt, vip_invvalt,vipb_invvalt} : any) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleClick = () => {
        // Navigate to "/about" when the button is clicked
        navigate(`/invite/${id}`);
      };

    return(
        <div className="w-full flex flex-col items-center sm:p-10 md:p-10 lg:py-10 lg:px-[152px] gap-8 rounded-2xl bg-darkGrayColor">
            <div className="w-full flex flex-col items-center justify-center rounded-3xl bg-darkgrayBackgroundColor sm:hidden md:hidden   p-6 gap-3">
                <img src="/assets/img/wallet_icon.png" className="w-[56px] h-[56px]" alt="wallet_icon"></img>
                <div className="text-2xl leading-[50px] font-semibold text-whiteTextColor">My wallet:</div>
                <div className="text-[42px] leading-[50px] font-semibold text-greenColor">3000</div>
            </div>
            <div className="flex w-full ">
                <div className="py-2 md:px-44 sm:px-2 flex flex-row justify-between items-center gap-6 sm:flex-col lg:flex-row  md:flex-col md:w-full w-full overflow-x-hidde sm:min-w-[200px] ">

                    <button className="relative w-[256px] md:w-full md:min-w-[256px] sm:w-full gap-3 h-[462px] bg-darkgrayBackgroundColor rounded-3xl flex items-center  flex-col p-6
                    hover:bg-[#252b3b] active:bg-[#232e3b] focus:outline-none focus:ring focus:ring-greenColor" onClick={handleClick}>
                        <img src="/assets/img/general_entrance.png" className="w-[48px] h-[48px]"></img>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">General</p>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">entrance</p>

                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">All options included in</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">the STANDARD ticket</p>

                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Lunch box (2 days)</p>

                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Video recordings of speeches</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">(Uminers and KuCoin stages)</p>
                        <div className="absolute bottom-[20px] text-[26px] leading-[24px] font-semibold text-greenColor">{gen_invvalt}</div>
                    </button>

                    <button className="relative w-[256px] md:w-full md:min-w-[256px] sm:w-full gap-3 h-[462px] bg-darkgrayBackgroundColor rounded-3xl flex items-center  flex-col p-6
                    hover:bg-[#252b3b] active:bg-[#232e3b] focus:outline-none focus:ring focus:ring-greenColor" onClick={handleClick}>
                        <img src="/assets/img/vip_icon.png" className="w-[48px] h-[48px]"></img>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">VIP entrance</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">VIP entrance</p>
                        
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">All options included in</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">the STANDARD ticket</p>
                        
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Lunch box (2 days)</p>
                        
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Video recordings of speeches</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">(Uminers and KuCoin stages)</p>
                        <div className="absolute bottom-[20px] text-[26px] leading-[24px] font-semibold text-greenColor">{vip_invvalt}</div>
                    </button>

                    <button className="relative w-[256px] md:w-full md:min-w-[256px] sm:w-full gap-3 h-[462px] bg-darkgrayBackgroundColor rounded-3xl flex items-center  flex-col p-6
                    hover:bg-[#252b3b] active:bg-[#232e3b] focus:outline-none focus:ring focus:ring-greenColor" onClick={handleClick}>
                        <img src="/assets/img/vip_icon2.png" className="w-[48px] h-[48px]"></img>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">VIP entrance</p>
                            <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">(BULL)</p>
                            <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">VIP entrance (BULL)</p>
                        
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">All options included in</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">the STANDARD ticket</p>
                        
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Lunch box (2 days)</p>
                        
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Video recordings of speeches</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">(Uminers and KuCoin stages)</p>
                        <div className="absolute bottom-[20px] text-[26px] leading-[24px] font-semibold text-greenColor">{vipb_invvalt}
                            <span className="text-whiteTextColor"> × 2</span>
                        </div>
                    </button>

                </div>
                
            </div>
            <p className="text-3xl font-medium text-whiteTextColor sm:hidden md:block lg:hidden">Total $VALT</p>
            <div className="w-full flex flex-row justify-center items-center gap-[18px] md:mt-[-36px]">
                <button className='rounded-full focus:outline-none focus:ring focus:ring-greenColor'><img src="/assets/img/minus_icon.png" className="w-[62px] min-w-[32px] "></img></button>
                <img src="/assets/img/wallet_icon.png" className="w-[62px] h-[62px]"></img>
                <p className="md:text-[96px] sm:text-[56px] font-bold text-greenColor">3000</p>
                <button className='rounded-full focus:outline-none focus:ring focus:ring-greenColor'><img src="/assets/img/plus_icon.png" className="w-[62px] min-w-[32px]"></img></button>
            </div >

            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" >CHANGE</button>

        </div>
    )
}

export default MainCpn