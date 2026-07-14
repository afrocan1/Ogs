import Image from "next/image";
const productLinks = [
    { href: "https://goaradio.org", label: "Web App" },
    { href: "https://app.goaradio.org", label: "Mobile App" },
    { href: "https://artists.goaradio.org", label: "For Artists" },
];
const footerLinks = [
    {
      href: "https://goaradio.org/",
      label: "Contact",
      target: "_blank",
      rel: "noopener noreferrer",   
    },
    { href: "https://goaradio.org/", label: "Privacy Policy",
        target: "_blank",
        rel: "noopener noreferrer"   },
    { href: "https://goaradio.org/", label: "Terms & Conditions",
        target: "_blank",
        rel: "noopener noreferrer",  },
  ];
export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-row  items-center md:justify-between   gap-6">
                <div>
                <Image 
                            src="/Goaradio.png" 
                            alt="Logo" 
                            width={130} 
                            height={40} 
                            priority
                        />
                </div>
                <div>
                    <nav className="flex gap-6">
                        {productLinks.map((link,index)=>(
                            <a key={index} href={link.href} target="_blank"
                            rel="noopener noreferrer" className="text-white/50 text-sm">{link.label}</a>
                        ))}
                    </nav>
                </div>
                <div>
                    <nav className="flex gap-6">
                        {footerLinks.map((link,index)=>(
                            <a key={index} href={link.href} target={link.target || "_self"}
                            rel={link.rel || "noopener noreferrer"} className="text-white/50 text-sm">{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>
}
