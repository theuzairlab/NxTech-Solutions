"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(
  () => import("@/components/ui/whatsapp-button").then((m) => ({ default: m.WhatsAppButton })),
  { ssr: false, loading: () => null }
);

const LiveChatWidget = dynamic(
  () => import("@/components/ui/live-chat-widget").then((m) => ({ default: m.LiveChatWidget })),
  { ssr: false, loading: () => null }
);

export function LazyWidgets() {
  return (
    <>
      <WhatsAppButton />
      <LiveChatWidget />
    </>
  );
}
