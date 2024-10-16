const Pchase_Con = () => {
    return (
        <div className="w-full flex md:flex-row sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl lg:justify-center lg:items-center md:justify-center md:items-center">
            <img src='/assets/img/section1_logo.png' className='w-[168px] h-[168px] block'></img>
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-4 h-8">
                    <div className="px-2 rounded bg-pinkColor font-bold text-lg text-white min-w-[88px]">
                        <span className="sm:block md:block md:text-[14px]  sm:text-[13px]">AUG 22-23</span>
                    </div>
                    <div className="px-2 rounded border-2 border-yellowColor  font-bold text-lg text-yellowColor">SOCCER</div>
                </div>

                <div className="text-4xl leading-[36px] text-grayWhiteColor font-semibold lg:block">Battle of Bloggers - Show</div>

                <div className="text-[26px] leading-[24px] font-normal text-grayColor lg:block">Real Madrid - Barcelond</div>

                <a href="https://coinfest.asid" className="text-[22px] leading-[24px] font-normal text-blueTextColor">coinfest.asid</a>
            </div>
        </div>
    )
}

export default Pchase_Con;