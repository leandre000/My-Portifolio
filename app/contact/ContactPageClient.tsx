"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Send
} from "lucide-react";

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      if (!res.ok) throw new Error("Failed to send message");
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
          <p className="text-xl text-black/70 dark:text-white/70">
            Let's discuss your next project or collaboration.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-black/70 dark:text-white/70">
                  Thank you for reaching out. I’ll get back to you shortly.
                </p>
                <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-400">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <ContactInfo
                icon={<Mail />}
                label="Email"
                link="mailto:Iamshemaleandre@gmail.com"
                display="Iamshemaleandre@gmail.com"
              />
              <ContactInfo
                icon={<MapPin />}
                label="Location"
                display="Kigali, Rwanda"
              />
              <div>
                <h3 className="font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com/leandre000" ariaLabel="GitHub">
                    <Github />
                  </SocialLink>
                </div>
              </div>
              <div className="bg-black/5 dark:bg-white/5 p-6 rounded-lg">
                <h3 className="font-medium mb-2">Availability</h3>
                <p className="text-black/70 dark:text-white/70 mb-4">
                  Available for freelance work. Response within 24–32 hours.
                </p>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm">Open to new projects</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Contact Info Block
function ContactInfo({
  icon,
  label,
  link,
  display
}: {
  icon: React.ReactNode;
  label: string;
  link?: string;
  display: string;
}) {
  return (
    <div className="flex items-start">
      <div className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-5 h-5 text-black dark:text-white"
        })}
      </div>
      <div>
        <h3 className="font-medium mb-1">{label}</h3>
        {link ? (
          <a
            href={link}
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
          >
            {display}
          </a>
        ) : (
          <p className="text-black/70 dark:text-white/70">{display}</p>
        )}
      </div>
    </div>
  );
}

// Social Icon Button
function SocialLink({
  href,
  ariaLabel,
  children
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black/5 dark:bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
    >
      {React.cloneElement(children as React.ReactElement, {
        className: "w-6 h-6 text-black dark:text-white"
      })}
    </a>
  );
}
