import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  eventName: string;
  date: string;
  localTime: string;
  country: string;
  city: string;
  www: string;
  type: string;
  active: string;
  onlineOffline: string;
  link: string;
  organizerId: string;
  description: string;
  invitationstitle: string;
  invitationsnumber: string;
  invitationslimit: string;
  invitationsvalt: string;
  endOfOfferDate: string;
  endOfOfferTime: string;
}



const Addevents: React.FC = () =>  {

    const [formData, setFormData] = useState<FormData>({
        eventName: '',
        date: '',
        localTime: '',
        country: '',
        city: '',
        www: '',
        type: '',
        active: '',
        onlineOffline: '',
        link: '',
        organizerId: '23e4234e234234',
        description: '',
        invitationsnumber: '',
        invitationstitle: '',
        invitationslimit:'',
        invitationsvalt:'',
        endOfOfferDate: '',
        endOfOfferTime: '',
      });
    
      const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
    //   const handleInvitationChange = (index: number, field: keyof Invitation) => (event: ChangeEvent<HTMLInputElement>) => {
    //     // const newInvitations = formData.invitations.map((invitation, i) => {
    //     //   if (i === index) {
    //     //     return { ...invitation, [field]: event.target.value };
    //     //   }
    //     //   return invitation;
    //     // });
    //     // setFormData(prevState => ({
    //     //   ...prevState,
    //     //   invitations: newInvitations
    //     // }));
    //   };
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };
    return (
        <div className="flex w-full py-6">
            <div className="flex w-full py-5 lg:px-40">
                <div className="flex flex-col w-full bg-darkDarkColor rounded-md p-10 sm:px-4">
                    <div className=" flex w-full justify-center items-center">
                        <p className="text-[36px] leading-[24px] sm:text-[28px] font-Poppins text-whiteTextColor">Add event</p>
                    </div>
                    <div className="flex flex-col lg:px-[104px] lg:pt-[65px]">
                        <div className="flex sm:flex-col py-10 justify-center items-center gap-8">
                            <div className="block w-[256px] sm:w-full pr-15">
                                <div className="w-[196px] sm:w-[196px] h-[196px] p-5 flex border-dashed border-greenColor border-2 items-center rounded-[12px] bg-transparent justify-end">
                                    <div className="w-full h-full flex  gap-8 rounded-2xl bg-grayColor">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-8">
                                <div className="flex flex-col gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Event name</p>
                                    <input className="px-4 text-[24px] leading-[24px] font-Poppins text-whiteTextColor h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </input>
                                </div>
                                <div className="flex flex-row sm:flex-col gap-8">
                                    <div className="flex flex-col w-full gap-3">
                                        <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Date</p>
                                        <input
                                            type="date"
                                            name="date"
                                            placeholder="Date"
                                            className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full gap-3">
                                        <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Local time</p>
                                        <input
                                            type="time"
                                            name="localTime"
                                            placeholder="Local time"
                                            className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                            value={formData.localTime}
                                            onChange={handleChange}
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center gap-8">
                            <div className="grid grid-flow-row w-full gap-8 grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                <div className="flex flex-col w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Country</p>
                                    <select name="country" className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" value={formData.country} onChange={handleChange}>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Canada</option>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>US</option>
                                    </select>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">City</p>
                                    <select name="country" className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" value={formData.country} onChange={handleChange}>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Washinton</option>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>New York</option>
                                    </select>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">WWW</p>
                    
                                    <input
                                        type="text"
                                        name="link"
                                        placeholder="Link"
                                        className="h-12 px-5 text-whiteTextColor text-[24px] leading-[24px] w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent"
                                        value={formData.link}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Type</p>
                                    <select name="country" className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" value={formData.country} onChange={handleChange}>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Soccer</option>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Concert</option>
                                    </select>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Active</p>
                                    <select name="country" className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" value={formData.country} onChange={handleChange}>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Active</option>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Inactive</option>
                                    </select>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Online/Offline</p>
                                    <select name="country" className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" value={formData.country} onChange={handleChange}>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Online</option>
                                        <option value="" className='text-grayTextColor text-[24px] leading-[24px]'>Offline</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full gap-8 py-8">
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Link</p>
                                <input
                                    type="text"
                                    name="link"
                                    placeholder="Link"
                                    className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                    value={formData.link}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Organizer Id</p>
                                <input
                                    type="text"
                                    name="organizerId"
                                    placeholder="Organizer id"
                                    className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                    value={formData.organizerId}
                                    onChange={handleChange}
                                    readOnly
                                />

                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Description</p>
                                <textarea
                                    name="description"
                                    // placeholder="Description"
                                    className="w-full flex ring-2 ring-inset p-5 ring-greenColor items-center rounded-[12px] bg-transparent text-whiteTextColor text-[24px] leading-[24px] h-32"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center">
                            <div className="grid grid-flow-row w-full gap-x-8 gap-y-4 grid-cols-10 sm:grid-cols-1">
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Invitation title</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationstitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Number of invitations</p>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsnumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Limit in one hands</p>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationslimit}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">$VALT</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsvalt}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Invitation title</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationstitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Number of invitations</p>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsnumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Limit in one hands</p>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationslimit}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">$VALT</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsvalt}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Invitation title</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationstitle}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Number of invitations</p>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsnumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Limit in one hands</p>
                                    <input
                                        type="number"
                                        placeholder=""
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationslimit}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">$VALT</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsvalt}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-8 py-8">
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">End of offer date</p>
                                <input
                                    type="date"
                                    name="endOfOfferDate"
                                    placeholder="End of offer date"
                                    className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                    value={formData.endOfOfferDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Local time</p>
                                <input
                                    type="time"
                                    name="endOfOfferTime"
                                    placeholder="Local time"
                                    className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                    value={formData.endOfOfferTime}
                                    onChange={handleChange}
                                />
                                        
                            </div>
                            <div className="flex flex-col w-full gap-3">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="flex w-full p-4 justify-center items-center">
                            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" >DONE</button>
                        </div>
                        <div className="flex w-full p-4 justify-center items-center">
                            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-transparent flex justify-center items-center text-[16px] font-bold text-grayTextColor" >CANCEL</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addevents;