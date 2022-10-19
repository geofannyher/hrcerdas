import React from "react";
import CardBigFive from "../../components/Cards/User/CardBigFive";
import CardInterest from "../../components/Cards/User/CardInterest";
import PhotoProfileAnalytic from "../../components/Cards/User/CardPhotosAnalytic";
import CardScore from "../../components/Cards/User/CardScore";
import Chart from "../../components/Cards/User/CardSentiment";
import CardSosialMedia from "../../components/Cards/User/CardSosialMedia";
import CardTolerant from "../../components/Cards/User/CardTolerant";


export default function Analytic() {
    return (
        <>
            <div className="flex flex-wrap px-12">
                <div className="w-full mb-12 px-2 xl:w-4/12 items-center">
                    <PhotoProfileAnalytic />
                </div>
                <div className="w-full mb-12 px-12 xl:w-4/12 items-center">
                    <CardScore />
                </div>
                <div className="w-full mb-12 px-4 xl:w-4/12">
                    <CardSosialMedia />
                </div>
                <div className="w-full mb-12 px-4 xl:w-8/12">
                    <Chart />
                </div>
                <div className="w-full mb-12 px-4 xl:w-4/12">
                    <CardTolerant />
                </div>
                <div className="w-full mb-12 px-4 xl:w-6/12">
                    <CardBigFive />
                </div>
                <div className="w-full mb-12 px-4 xl:w-6/12">
                    <CardInterest />
                </div>
            </div>
        </>
    )
}