import Tag from "@/components/Tag";
import { AudioLines, Wallet, Ticket, Gift, HeartHandshake, Banknote } from "lucide-react";
import Integrationscolumn from "@/components/Integrationscolumn";



const integrations = [
    { name: "Stream2Earn", icon: AudioLines, description: "Earn $GOA in real time just by streaming on Goaradio." },
    { name: "In-App Payments", icon: Wallet, description: "Spend $GOA on subscriptions, features, and more inside the app." },
    { name: "Event Access", icon: Ticket, description: "Unlock ticketed events and drops with $GOA." },
    { name: "Merch & Gadgets", icon: Gift, description: "Trade $GOA for merch, tech gadgets, and exclusive experiences." },
    { name: "Direct Artist Support", icon: HeartHandshake, description: "Send $GOA straight to the artists you stream, no middleman." },
    { name: "Cash Out", icon: Banknote, description: "Redeem your $GOA balance in your local currency, anytime." },
];

export type IntegrationsType=typeof integrations;

export default function Integrations() {

    return (
        <section className="py-24 overflow-hidden ">
            <div className="container text-center">
                <Tag>Utilities</Tag>
<h2 className="text-6xl font-medium mt-6 ">What <span className="text-lime-400">$GOA</span> gets you</h2>
<p className="text-white/50 mt-4 text-lg">Beyond holding, $GOA is now a working token across Goaradio, powering how you earn, pay, and get in.</p>
                <div className="h-[400px] mt-8 overflow-hidden grid md:grid-cols-2 gap-4  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <Integrationscolumn integrations={integrations}/>
                <Integrationscolumn integrations={integrations.slice().reverse()} reverse  className="hidden md:flex"/>
                </div>
            </div>
        </section>
    )
}
