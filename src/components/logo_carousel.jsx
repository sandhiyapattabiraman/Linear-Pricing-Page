import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = [
  "https://www.drupal.org/files/vercel-logotype-dark.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png",
  "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/773abf09-47fc-466d-8da3-369bf62c120b.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg",
  "https://cdn.freelogovectors.net/wp-content/uploads/2022/10/scale-logo-freelogovectors.net_.png",
  "https://fs.hubspotusercontent00.net/hubfs/7405301/email%20marketing/New%20Branded%20Logos/RemoteLogo_H_white.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Runway_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Retool_logo.svg/2560px-Retool_logo.svg.png",
  "https://www.kenility.com/sites/default/files/2024-10/LogosNotas-04.png"
];

function LogoCarousel() {
  return (
    <div className="w-full flex justify-center items-center px-4 relative">
      <div className="w-full max-w-4xl mx-auto relative group">
        {/* Overlay button, hidden by default, shown on hover */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-6 py-2 rounded-full bg-zinc-800 text-white font-semibold text-lg shadow">
            Meet our customers &rarr;
          </button>
        </div>
        {/* Carousel, blurred on hover */}
        <div className="transition-all duration-300 group-hover:blur-sm">
          <Marquee gradient={false} speed={50} pauseOnHover={false} pauseOnClick={false}>
            {logos.map((src, idx) => (
              <div key={idx} className="flex justify-center items-center mx-8">
                <img src={src} alt="logo" className="invert h-[30px] mx-auto" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel; 