"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offices = [
  {
    id: 1,
    name: "Headquarters",
    address: "Building 40C Office 07, 4th Floor, Main Khayaban-e-Bukhari, DHA Phase 6, Karachi",
    city: "Karachi, Pakistan",
    phone: process.env.NEXT_PUBLIC_USER_PHONE|| "",
    email: process.env.NEXT_PUBLIC_USER_EMAIL|| "",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM PKT",
    timezone: "PKT",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5012.291232314648!2d67.05960709522539!3d24.793725274135653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ce94e2c599f%3A0x575c37514a65ffcf!2s40%20Khayaban-e-Bukhari%2C%20D.H.A%20Phase%206%20Bukhari%20Commercial%20Area%20Phase%206%20Defence%20Housing%20Authority%2C%20Karachi%2C%2075500%2C%20Pakistan!5e1!3m2!1sen!2s!4v1765565438641!5m2!1sen!2s",
    image: "https://images.unsplash.com/photo-1617373743747-3bb331fd4e8d?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "London Office",
    address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
    city: "London, UK",
    phone: "+44 757 588 8810",
    email: "info@nxflight.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    timezone: "GMT",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.304074452422!2d-0.12769792360081022!3d51.51521677963758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d29dd5%3A0x42350ff228f06a30!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e1!3m2!1sen!2s!4v1765565438641!5m2!1sen!2s",
    image: "https://images.unsplash.com/photo-1580097808007-84cc45c04471?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export function OfficeLocations() {
  return (
    <section id="office-locations" className="relative py-24 overflow-hidden -mt-32 pt-40 rounded-b-[50px] sm:rounded-b-[100px] md:rounded-b-[150px] bg-linear-to-b from-white via-[#f0f9ff] to-white z-2">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[480px] h-[480px] bg-primary/8 blur-3xl" />
      </div>

      <div className="container relative z-3 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary">OUR OFFICES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">
              Visit Our Offices
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We have offices around the world to serve you better
          </p>
        </motion.div>

        <div className="space-y-12">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <Card className="border-2 border-border shadow-lg overflow-hidden py-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={office.image}
                    alt={office.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 pt-0">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    {office.name}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium">{office.address}</div>
                        <div className="text-muted-foreground">{office.city}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-foreground hover:text-primary transition-colors">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-foreground hover:text-primary transition-colors">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <div className="font-medium">{office.hours}</div>
                        <div className="text-sm text-muted-foreground">{office.timezone}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <iframe
                  src={office.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ minHeight: "400px", border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={office.name}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

