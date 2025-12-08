"use client";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Wasim Raja",
    role: "Founder & CEO",
    department: "Executive Leadership",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Visionary leader with 15+ years in technology and business transformation.",
    linkedin: "https://linkedin.com/in/wasimraja",
    email: "wasim@nxtechsolutions.com",
  },
  {
    name: "Sarah Ahmed",
    role: "CTO",
    department: "Technology",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Expert in cloud architecture, AI systems, and scalable infrastructure.",
    linkedin: "https://linkedin.com/in/sarahahmed",
    email: "sarah@nxtechsolutions.com",
  },
  {
    name: "Michael Khan",
    role: "Head of Marketing",
    department: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Data-driven marketer specializing in growth strategies and brand development.",
    linkedin: "https://linkedin.com/in/michaelkhan",
    email: "michael@nxtechsolutions.com",
  },
  {
    name: "Emily Hassan",
    role: "Head of AI Solutions",
    department: "AI & Automation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "AI researcher and engineer focused on intelligent automation solutions.",
    linkedin: "https://linkedin.com/in/emilyhassan",
    email: "emily@nxtechsolutions.com",
  },
  {
    name: "David Malik",
    role: "Head of Development",
    department: "Software Development",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Full-stack developer and architect with expertise in modern web technologies.",
    linkedin: "https://linkedin.com/in/davidmalik",
    email: "david@nxtechsolutions.com",
  },
  {
    name: "Zara Ali",
    role: "Head of Operations",
    department: "Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Operations specialist ensuring seamless project delivery and client satisfaction.",
    linkedin: "https://linkedin.com/in/zaraali",
    email: "zara@nxtechsolutions.com",
  },
];

export function LeadershipTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the founders and department leads driving NxTech's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover p-2 rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs mb-4">
                  {member.department}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

