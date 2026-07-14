"use client"
import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
const faqs = [
    {
        question: "What is this airdrop for?",
        answer: "This is for early $GOA holders on BNB Chain and Arbitrum from before liquidity dried up on those chains. If you held $GOA there, this is how you check where you stand and get registered for the next steps.",
    },
    {
        question: "Which chains are eligible?",
        answer: "BNB Chain and Arbitrum. Those were the original $GOA deployments before we moved to BOT Chain. If you held $GOA on either, your wallet qualifies for a check.",
    },
    {
        question: "How do I check if I qualify?",
        answer: "Paste your wallet address above. We check your historical $GOA balance on both BNB Chain and Arbitrum. If you held any amount, you're registered automatically.",
    },
    {
        question: "What happened to $GOA on those chains?",
        answer: "Liquidity dropped and activity moved to BOT Chain, where Goaradio now runs its Listen2Earn and View2Earn systems. The old contracts on BNB and Arbitrum are still live, they're just not where the action is anymore.",
    },
    {
        question: "I checked and I'm not eligible, what now?",
        answer: "If our check doesn't find a $GOA balance on BNB Chain or Arbitrum for your address, there's nothing to register. You're welcome to check a different wallet if you held from another address.",
    },
    {
        question: "When can I claim?",
        answer: "Registration is step one. Once the snapshot closes, we'll reach out to registered wallets with claim details. There's no action needed beyond registering your address now.",
    },
];
export default function Faqs() {
    const [selectedIndex,setSelectedIndex]=useState(0)
    return (
    <section className="container">
        <div className="flex justify-center">
        <Tag>Airdrop FAQ</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
            Questions about the 
                <span className="text-lime-400"
                > airdrop</span></h2>
        <div className=" mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs.map((faq,faqIndex)=>(
                <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6 ">
                    <div className="flex justify-between items-center " onClick={()=>{setSelectedIndex(faqIndex)}}>
                        <h3 className="font-medium">{faq.question}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",selectedIndex===faqIndex && "rotate-45")} >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                         </svg>
                    </div>
                <AnimatePresence >
                        {selectedIndex===faqIndex && (
                        <motion.div
                         initial={{
                            height:0,
                            margin:0,   
                         }}
                         animate={{
                            height:"auto",
                            marginTop:24
                         }}
                         exit={{
                            height:0,
                            marginTop:0,
                         }}
                         className={twMerge(" overflow-hidden")}>
                            <p className="text-white/50">{faq.answer}</p>
                        </motion.div>
                        )}
                </AnimatePresence>
                   
                </div>
            ))}
        </div>
    </section>
    )
}
