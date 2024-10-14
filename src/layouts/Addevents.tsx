import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Invitation {
  title: string;
  number: string;
  limit: string;
  valt: string;
}

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
  invitations: Invitation[];
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
        invitations: [
          { title: '', number: '', limit: '', valt: '' },
          { title: '', number: '', limit: '', valt: '' },
          { title: '', number: '', limit: '', valt: '' },
        ],
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
    
      const handleInvitationChange = (index: number, field: keyof Invitation) => (event: ChangeEvent<HTMLInputElement>) => {
        const newInvitations = formData.invitations.map((invitation, i) => {
          if (i === index) {
            return { ...invitation, [field]: event.target.value };
          }
          return invitation;
        });
        setFormData(prevState => ({
          ...prevState,
          invitations: newInvitations
        }));
      };
    
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
                                    <input className="px-4 text-[20px] leading-[24px] font-Poppins text-whiteTextColor h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </input>
                                </div>
                                <div className="flex flex-row sm:flex-col gap-8">
                                    <div className="flex flex-col w-full gap-3">
                                        <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Date</p>
                                        <input
                                            type="date"
                                            name="date"
                                            placeholder="Date"
                                            className="w-1/2 bg-gray-800 border border-green-500 p-2 rounded"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                        <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full gap-3">
                                        <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Local time</p>
                                        <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center gap-8">
                            <div className="grid grid-flow-row w-full gap-8 grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                <div className="flex flex-col w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Country</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">City</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">WWW</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Type</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Active</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Online/Offline</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full gap-8 py-8">
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Link</p>
                                <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Organizer Id</p>
                                <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Description</p>
                                <div className="h-24 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center">
                            <div className="grid grid-flow-row w-full gap-x-8 gap-y-4 grid-cols-10 sm:grid-cols-1">
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Invitation title</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Number of invitations</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Limit in one hands</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">$VALT</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Invitation title</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Number of invitations</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Limit in one hands</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">$VALT</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Invitation title</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Number of invitations</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Limit in one hands</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">$VALT</p>
                                    <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-8 py-8">
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">End of offer date</p>
                                <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Local time</p>
                                <div className="h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-3">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="flex w-full p-4 justify-center items-center">
                            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark" >DONE</button>
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