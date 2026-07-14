import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import { Wallet, ScanSearch, BadgeCheck } from "lucide-react";


const features = [
    "BNB Chain",
    "Arbitrum",
    "Instant Check",
    "No Wallet Connect Needed",
    "Snapshot Based",
    "OG Registry",
];

export default function Features() {
    return (
    <section className="py-24 ">
        <div className="container ">
            <div className="flex justify-center ">
                <Tag>How It Works</Tag>
            </div>
                <h2 className="text-6xl font-medium text-center mt-6">check, register, {" "}
                    <span className="text-lime-400">get ready to claim</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8  ">

                    <FeatureCard
                         title="Paste Your Wallet" 
                         description="Drop the address that held $GOA on BNB Chain or Arbitrum. No wallet connect, no signature needed."
                         className="md:col-span-2 lg:col-span-1 group"
                         >
                        <div className="aspect-video flex items-center justify-center">
                            <Wallet className="size-16 text-lime-400 group-hover:scale-110 transition duration-500" strokeWidth={1.5} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="We Check Both Chains"
                        description="Your address gets checked against the $GOA contract on BNB Chain and Arbitrum for any historical balance."
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center relative">
                            <ScanSearch className="size-16 text-lime-400 group-hover:scale-110 transition duration-500" strokeWidth={1.5} />
                        </div>
                    </FeatureCard>


                    <FeatureCard
                         title="Get Registered" 
                         description="Held any amount on either chain? You're registered as an OG and locked in for the next steps toward claiming."
                         className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                         >

                            <div className="aspect-video flex items-center justify-center gap-4">
                                <BadgeCheck className="size-16 text-lime-400 group-hover:scale-110 transition duration-500" strokeWidth={1.5} />
                            </div>
                    </FeatureCard>

                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(feature=> 
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038; </span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    )}
                </div>
        </div>
    </section>
    )
}
