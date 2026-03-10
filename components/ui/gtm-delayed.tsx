"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-PK589K8Z";

export function GTMDelayed() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = false;
    let fallbackId: ReturnType<typeof setTimeout>;
    const load = () => {
      if (loaded) return;
      loaded = true;
      clearTimeout(fallbackId);
      setReady(true);
    };
    const onInteraction = () => load();
    window.addEventListener("scroll", onInteraction, { once: true, passive: true });
    window.addEventListener("click", onInteraction, { once: true });
    window.addEventListener("keydown", onInteraction, { once: true });
    fallbackId = setTimeout(load, 4000);
    return () => {
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      clearTimeout(fallbackId);
    };
  }, []);

  return (
    <Script id="gtm-delayed" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
