"use client"
import Image from "next/image";
import React, { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Arbitrum", image: "/images/arb-removebg-preview.png" },
  { name: "BNB", image: "/images/bnb-removebg-preview.png" },
  { name: "GOA", image: "/images/goa-removebg-preview.png" },
];


export default function LogoTicker() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
      
        <h3 className="text-center text-white/50 text-xl">
          Checking balances across
        </h3>
        <div className=" flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                <Image
                src={logo.image}
                key={logo.name}
                alt={logo.name}
                loading="lazy"
                width={200} 
                height={100}
              />
              
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
