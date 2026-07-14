"use client"
import Tag from "@/components/Tag";
import {  useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You picked up $GOA on BNB or Arbitrum before liquidity dried up and things went quiet. Goaradio didn't stop. This airdrop is how we get you caught back up.`;
const words=text.split(" ")

export default function Introduction() {

    const scrollTarget=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({target:scrollTarget, offset:["start end", "end end"]});

    const [currentWord,setCurrentWord]=useState(0);

    const wordIndex=useTransform(scrollYProgress,[0,1],[0,words.length])


    useEffect(()=>{
            wordIndex.on("change",(latest)=>{
                setCurrentWord(latest)
            })
    },[wordIndex])


    return (
    <section className="py-28  lg:py-40">    
        <div className="container">
            <div className="sticky top-20 md:top-28">
                <div className="flex justify-center ">
                <Tag>The $GOA Airdrop</Tag>
                </div> 
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 lg:top-40">
                    <span className="">a lot's changed since you last checked in.</span> {" "}
                    <span className="">
                    {words.map((word,wordIndex)=>(
                        <span className={ twMerge("transition duration-500 text-white/15",wordIndex<currentWord && "text-white")} key={wordIndex}>{`${word} `}</span>
                    ))}
                    </span>
                    <span className="text-lime-400 block">Here's what $GOA does now</span>
                </div>
            </div>

            <div className="h-[150vh]" ref={scrollTarget} ></div>
        </div>
    </section>
    )
}
