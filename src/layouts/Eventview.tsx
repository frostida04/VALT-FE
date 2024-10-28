import Header from "../layouts/Header";
import BackHeader from "../layouts/BackHeader";
import Cardpre from "../Elements/card_pre";
import Footer from "../layouts/Footer";
import MainCpn from "../Elements/MainCpn";
import TextSection from "../Elements/TextSection";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Eventview = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    async function getCard() {
        // const response = await axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res)=>{
        const response = await axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res) => {
            setData(res.data);
        })
        console.log(response)
    }
    useEffect(() => {
        getCard();
    }, [])
    return (
        <div className="flex flex-col px-8 gap-8 md:px-16 lg:px-32">
            <Cardpre {...data} />
            <TextSection {...data} />
            <MainCpn  {...data} />
        </div>
    )
}

export default Eventview;
