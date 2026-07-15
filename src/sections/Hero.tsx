"use client"
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import {motion,useAnimate } from "framer-motion"
import { useEffect, useState } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";



export default function Hero() {
    const [leftPointerScope,leftPointerAnimate]=useAnimate();
    const[rightPointerScope,rightPointerAnimate]=useAnimate();
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    type AirdropResult = {
      eligible: boolean;
      totalBalance: number;
      arbBalance: number;
      bnbBalance: number;
    };

    const [result, setResult] = useState<AirdropResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        leftPointerAnimate([
            [leftPointerScope.current,{opacity:1},{duration:0.5}],
            [leftPointerScope.current,{y:0,x:-100},{duration:0.5}],
            [leftPointerScope.current,{x:0, y:[0,16,0] },{duration:0.5,ease:"easeInOut"}] 
        ]);

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }]
        ])
        

    },[  leftPointerAnimate,
        rightPointerAnimate,
        leftPointerScope,
        rightPointerScope,])

    return <section id="checker" className="py-24 overflow-x-clip " style={{
        cursor:`url(${cursorYouImage.src}),auto`
     }}>
        <div className="container relative">
            <motion.div ref={leftPointerScope}  initial={{opacity:0, y:100,x:-200}}  className="absolute left-56 top-96 hidden lg:block">
                      <Pointer name="OG" color="blue" />
            </motion.div>
            {/* {Right side animation} */}
            <motion.div 
            ref={rightPointerScope}
            initial={{opacity:0,x:275,y:100}}
            className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Verified" color="red"/>
            </motion.div>
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full text-neutral-950 font-semibold ">
$GOA BNB &amp; Arbitrum OGs
</div>
            </div>
            <h1 className="text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl">
                You held $GOA. Now it&apos;s time to claim.
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto  ">
                $GOA now powers Stream2Earn, in-app payments, and event access on GOARadio. If you held $GOA on BNB or Arbitrum, check your wallet below to see your allocation.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                setResult(null);
                if (!address.trim()) return;
                setLoading(true);

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 20000); // hard 20s cap

                try {
                  const res = await fetch("https://airdropcheker.onrender.com/airdrop/check", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ address: address.trim() }),
                    signal: controller.signal,
                  });
                  const data = await res.json();
                  if (!res.ok) {
                    setError(data.message || "Something went wrong. Please try again.");
                  } else {
                    setResult(data);
                  }
                } catch (err) {
                  if (err instanceof Error && err.name === "AbortError") {
                    setError("This is taking longer than expected — the server may be waking up (Render free tier cold start). Please try again.");
                  } else {
                    setError("Could not reach the server. Please try again.");
                  }
                } finally {
                  clearTimeout(timeoutId);
                  setLoading(false);
                }
              }}
              className="flex border border-white/15 rounded-full p-2 mt-8 w-full max-w-lg mx-auto"
            >
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your BNB or Arbitrum wallet address"
                className="bg-transparent px-4 flex-1 min-w-0 w-full outline-none"
              />
              <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm" disabled={loading}>
                {loading ? "Checking..." : "Check eligibility"}
              </Button>
            </form>

            {error && (
              <div className="flex justify-center px-4 mt-6">
                <div className="flex items-center gap-3 max-w-md w-full sm:w-auto rounded-2xl border border-red-400/20 bg-red-400/[0.06] backdrop-blur-xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                  <svg className="w-5 h-5 shrink-0 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="12" y2="13" />
                    <circle cx="12" cy="16" r="0.5" fill="currentColor" />
                  </svg>
                  <p className="text-sm text-red-200/90">{error}</p>
                </div>
              </div>
            )}

            {result && (
              <div className="flex justify-center px-4 mt-6">
                <div
                  className={`flex items-start gap-3 max-w-md w-full sm:w-auto rounded-2xl border backdrop-blur-xl px-4 py-4 sm:px-6 sm:py-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${
                    result.eligible
                      ? "border-emerald-400/20 bg-emerald-400/[0.06]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
                      result.eligible ? "bg-emerald-400/15" : "bg-white/[0.06]"
                    }`}
                  >
                    {result.eligible ? (
                      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                        <polyline points="5 13 10 18 19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                        <line x1="7" y1="7" x2="17" y2="17" />
                        <line x1="17" y1="7" x2="7" y2="17" />
                      </svg>
                    )}
                  </span>

                  <div className="text-left">
                    <p className="text-sm sm:text-base font-medium text-white">
                      {result.eligible ? "Eligible" : "No $GOA found"}
                    </p>
                    <p className="text-xs sm:text-sm text-white/50 mt-0.5">
                      {result.eligible
                        ? `${result.totalBalance.toLocaleString()} $GOA — ARB ${result.arbBalance.toLocaleString()}, BNB ${result.bnbBalance.toLocaleString()}. You're registered — watch for claim instructions.`
                        : "This address held no $GOA on BNB or Arbitrum."}
                    </p>
                  </div>
                </div>
              </div>
            )}

        </div>
    </section>
}
