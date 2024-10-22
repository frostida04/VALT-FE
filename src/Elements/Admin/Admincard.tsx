import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
// import { Tooltip, Button } from "@material-tailwind/react";

const AdminCard = ({_id, eventname, country,city, www, date, offerdate, type ,On_offline, gen_invvalt} : any) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const handleClick = () => {
      // Navigate to "/about" when the button is clicked
    //   navigate('/detail');
    };
    const handletooltip = () => {
        // Navigate to "/about" when the button is clicked
      //   navigate('/detail');
       if(isOpen)  setIsOpen(false);
       if(!isOpen)  setIsOpen(true);
      };
    return (
        <div className='flex w-full'>
            <button  className="w-full justify-normal items-start my-4 rounded-3xl focus:outline-none focus:ring focus:ring-greenColor" onClick={handleClick}>
                <div className="w-full sm:px-[16px] flex sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-darkgrayBackgroundColor justify-between
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
                                <div className="px-2 rounded border-2 border-yellowColor  font-bold text-lg text-yellowColor">{type}</div>
                                <div className="px-2 rounded border-2 border-redColor  font-bold text-lg text-redColor">{On_offline}</div>
                            </div>

                            <div className="text-4xl leading-[36px] text-grayWhiteColor font-semibold lg:block">{eventname}</div>

                            <div className="text-[26px] leading-[24px] font-normal text-grayColor lg:block">{city} - {country}</div>

                            <a href={www} className="text-[22px] leading-[24px] font-normal text-blueTextColor">{www}</a>
                        </div>
                    </div>
                    <div className="bg-transparent flex rounded-3xl w-8 sm:w-full flex-col sm:flex-row justify-between">
                        <div className='flex sm:px-9'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5993 9.4547C26.6132 8.41324 26.2228 7.36739 25.4281 6.57272C24.6334 5.77806 23.5876 5.38765 22.5461 5.40151C22.5457 5.40151 22.5465 5.4015 22.5461 5.40151C21.9705 5.40934 21.3951 5.54067 20.8653 5.7955C20.6755 5.88682 20.4914 5.994 20.3149 6.11705C20.247 6.16443 20.1595 6.17524 20.083 6.14351C20.0066 6.11181 19.9523 6.04232 19.9378 5.96083C19.9001 5.74907 19.8456 5.54308 19.776 5.34426C19.5816 4.7895 19.2684 4.29058 18.8669 3.87802C18.8666 3.87773 18.8672 3.8783 18.8669 3.87802C18.1403 3.13179 17.1239 2.66748 16 2.66748C14.8762 2.66748 13.8606 3.13095 13.134 3.87717C13.1337 3.87745 13.1343 3.87689 13.134 3.87717C12.7325 4.28973 12.4185 4.78949 12.2241 5.34426C12.1544 5.54308 12.1 5.74907 12.0622 5.96083C12.0477 6.04232 11.9935 6.11181 11.917 6.14351C11.8405 6.17524 11.7531 6.16443 11.6851 6.11704C11.5087 5.994 11.3246 5.88682 11.1347 5.7955C10.605 5.54067 10.0307 5.40935 9.45508 5.40152C9.45469 5.40152 9.45547 5.40153 9.45508 5.40152C8.41362 5.38767 7.3666 5.77805 6.57193 6.57272C5.77726 7.36739 5.38686 8.41323 5.40072 9.4547C5.40071 9.45431 5.40072 9.45509 5.40072 9.4547C5.40854 10.0303 5.53988 10.6058 5.7947 11.1355C5.88602 11.3253 5.9932 11.5095 6.11625 11.6859C6.16364 11.7538 6.17445 11.8413 6.14272 11.9178C6.11101 11.9943 6.04152 12.0485 5.96004 12.063C5.74827 12.1008 5.54227 12.1552 5.34345 12.2249C4.78869 12.4193 4.28978 12.7325 3.87722 13.134C3.87694 13.1342 3.8775 13.1337 3.87722 13.134C3.131 13.8606 2.66669 14.877 2.66669 16.0008C2.66669 17.1246 3.13015 18.1402 3.87638 18.8668C3.8761 18.8666 3.87666 18.8671 3.87638 18.8668C4.28893 19.2683 4.78869 19.5824 5.34345 19.7768C5.54227 19.8464 5.74827 19.9008 5.96004 19.9386C6.04152 19.9531 6.11101 20.0074 6.14272 20.0838C6.17445 20.1603 6.16364 20.2478 6.11625 20.3157C5.9932 20.4922 5.88602 20.6763 5.7947 20.8661C5.53988 21.3959 5.40856 21.9701 5.40073 22.5458C5.40073 22.5461 5.40074 22.5454 5.40073 22.5458C5.38688 23.5872 5.77726 24.6342 6.57193 25.4289C7.3666 26.2236 8.41244 26.614 9.45391 26.6001C9.45351 26.6001 9.4543 26.6001 9.45391 26.6001C10.0295 26.5923 10.6049 26.461 11.1347 26.2061C11.3245 26.1148 11.5087 26.0076 11.6851 25.8846C11.753 25.8372 11.8405 25.8264 11.917 25.8581C11.9935 25.8898 12.0477 25.9593 12.0622 26.0408C12.1 26.2526 12.1544 26.4586 12.2241 26.6574C12.4185 27.2122 12.7317 27.7111 13.1332 28.1236C13.1329 28.1233 13.1334 28.1239 13.1332 28.1236C13.8598 28.8698 14.8762 29.3341 16 29.3341C17.1239 29.3341 18.1394 28.8707 18.8661 28.1245C18.8658 28.1247 18.8663 28.1242 18.8661 28.1245C19.2675 27.7119 19.5816 27.2121 19.776 26.6574C19.8456 26.4586 19.9 26.2526 19.9378 26.0408C19.9523 25.9593 20.0066 25.8898 20.083 25.8581C20.1595 25.8264 20.247 25.8372 20.3149 25.8846C20.4914 26.0076 20.6755 26.1148 20.8654 26.2062C21.3951 26.461 21.9694 26.5923 22.545 26.6001C22.5446 26.6001 22.5454 26.6001 22.545 26.6001C23.5864 26.614 24.6334 26.2236 25.4281 25.4289C26.2228 24.6342 26.6132 23.5884 26.5993 22.5469C26.5993 22.5465 26.5993 22.5473 26.5993 22.5469C26.5915 21.9713 26.4602 21.3959 26.2053 20.8661C26.114 20.6763 26.0068 20.4922 25.8838 20.3157C25.8364 20.2478 25.8256 20.1603 25.8573 20.0838C25.889 20.0074 25.9585 19.9531 26.04 19.9386C26.2518 19.9008 26.4578 19.8464 26.6566 19.7768C27.2114 19.5824 27.7103 19.2692 28.1228 18.8677C28.1225 18.8679 28.1231 18.8674 28.1228 18.8677C28.869 18.141 29.3334 17.1246 29.3334 16.0008C29.3334 14.877 28.8699 13.8614 28.1237 13.1348C28.1234 13.1345 28.1239 13.1351 28.1237 13.1348C27.7111 12.7333 27.2114 12.4193 26.6566 12.2249C26.4578 12.1552 26.2518 12.1008 26.04 12.063C25.9585 12.0485 25.889 11.9943 25.8573 11.9178C25.8256 11.8413 25.8364 11.7538 25.8838 11.6859C26.0068 11.5095 26.114 11.3253 26.2054 11.1355C26.4602 10.6057 26.5915 10.0303 26.5993 9.4547C26.5993 9.45431 26.5993 9.45509 26.5993 9.4547ZM23.5425 8.45834C23.0806 7.99645 22.3588 7.94273 21.8404 8.3043C21.0538 8.85287 20.0093 8.99977 19.0616 8.60679C18.1163 8.21483 17.481 7.37394 17.3125 6.4288C17.2016 5.80654 16.6532 5.33415 16 5.33415C15.3468 5.33415 14.7984 5.80654 14.6875 6.42879C14.5191 7.37393 13.8837 8.21482 12.9385 8.60679C11.9908 8.99977 10.9462 8.85287 10.1597 8.3043C9.64122 7.94273 8.91944 7.99645 8.45755 8.45834C7.99566 8.92023 7.94194 9.64201 8.30351 10.1604C8.85208 10.947 8.99898 11.9916 8.606 12.9393C8.21403 13.8845 7.37314 14.5199 6.428 14.6883C5.80574 14.7992 5.33335 15.3476 5.33335 16.0008C5.33335 16.654 5.80574 17.2024 6.428 17.3133C7.37314 17.4818 8.21403 18.1171 8.606 19.0624C8.99898 20.01 8.85208 21.0546 8.30351 21.8412C7.94194 22.3596 7.99566 23.0814 8.45755 23.5433C8.91944 24.0052 9.64122 24.0589 10.1596 23.6973C10.9462 23.1488 11.9908 23.0019 12.9385 23.3948C13.8837 23.7868 14.5191 24.6277 14.6875 25.5728C14.7985 26.1951 15.3468 26.6675 16 26.6675C16.6532 26.6675 17.2016 26.1951 17.3125 25.5728C17.481 24.6277 18.1163 23.7868 19.0615 23.3948C20.0093 23.0018 21.0538 23.1488 21.8404 23.6973C22.3588 24.0589 23.0806 24.0052 23.5425 23.5433C24.0044 23.0814 24.0581 22.3596 23.6965 21.8412C23.148 21.0546 23.0011 20.0101 23.394 19.0624C23.786 18.1171 24.6269 17.4818 25.572 17.3133C26.1943 17.2024 26.6667 16.654 26.6667 16.0008C26.6667 15.3476 26.1943 14.7992 25.572 14.6883C24.6269 14.5199 23.786 13.8845 23.394 12.9393C23.0011 11.9916 23.148 10.947 23.6965 10.1604C24.0581 9.64201 24.0044 8.92024 23.5425 8.45834Z" fill="#777E91"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 18.6675C17.4728 18.6675 18.6667 17.4736 18.6667 16.0008C18.6667 14.5281 17.4728 13.3341 16 13.3341C14.5273 13.3341 13.3334 14.5281 13.3334 16.0008C13.3334 17.4736 14.5273 18.6675 16 18.6675ZM16 21.3341C18.9455 21.3341 21.3334 18.9463 21.3334 16.0008C21.3334 13.0553 18.9455 10.6675 16 10.6675C13.0545 10.6675 10.6667 13.0553 10.6667 16.0008C10.6667 18.9463 13.0545 21.3341 16 21.3341Z" fill="#777E91"/>
                            </svg>
                        </div>
                        <div id="my-tooltip" className='flex sm:px-9'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.4 6.60205H24C24.8832 6.60205 25.6 7.31885 25.6 8.20205V27.4021C25.6 28.2853 24.8832 29.0021 24 29.0021H6.40005C5.51685 29.0021 4.80005 28.2853 4.80005 27.4021V8.20205C4.80005 7.31885 5.51685 6.60205 6.40005 6.60205H8.00005" stroke="#777E90" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.6 4.19971H12.8V8.99971H17.6V4.19971Z" stroke="#777E90" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.6001 14.6021H20.8001" stroke="#777E90" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.6001 21.002H20.8001" stroke="#777E90" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        
                        <a data-tooltip-id="my-tooltip"  data-tooltip-content="Click me!" onClick={handletooltip}>
                            <div className='flex sm:px-9'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 29.1875C22.731 29.1875 28.1875 23.731 28.1875 17C28.1875 10.269 22.731 4.8125 16 4.8125C9.26903 4.8125 3.8125 10.269 3.8125 17C3.8125 23.731 9.26903 29.1875 16 29.1875Z" stroke="#777E91" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 13C17.1046 13 18 12.1046 18 11C18 9.89543 17.1046 9 16 9C14.8954 9 14 9.89543 14 11C14 12.1046 14.8954 13 16 13Z" fill="#777E91"/>
                                    <path d="M16 24L16 16" stroke="#777E91" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </a>
                        <Tooltip id='my-tooltip'/>
                        
                    </div>
                    
                </div>
            </button>
        </div>
    )
}

export default AdminCard;