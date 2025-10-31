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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [devMessage, setDevMessage] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validateField = (fieldName: string, value: string) => {
    let errorMessage = "";
    
    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          errorMessage = "Name is required";
        } else if (value.trim().length < 2) {
          errorMessage = "Name must be at least 2 characters";
        } else if (value.trim().length > 50) {
          errorMessage = "Name must be less than 50 characters";
        }
        break;
        
      case "email":
        if (!value.trim()) {
          errorMessage = "Email is required";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            errorMessage = "Please enter a valid email address";
          }
        }
        break;
        
      case "subject":
        if (!value.trim()) {
          errorMessage = "Subject is required";
        } else if (value.trim().length < 3) {
          errorMessage = "Subject must be at least 3 characters";
        } else if (value.trim().length > 100) {
          errorMessage = "Subject must be less than 100 characters";
        }
        break;
        
      case "message":
        if (!value.trim()) {
          errorMessage = "Message is required";
        } else if (value.trim().length < 10) {
          errorMessage = "Message must be at least 10 characters";
        } else if (value.trim().length > 1000) {
          errorMessage = "Message must be less than 1000 characters";
        }
        break;
    }
    
    setFieldErrors((prev) => ({ ...prev, [fieldName]: errorMessage }));
    return errorMessage === "";
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    let isValid = true;
    
    // Validate all fields
    Object.keys(formState).forEach((fieldName) => {
      const value = formState[fieldName as keyof typeof formState];
      if (!validateField(fieldName, value)) {
        isValid = false;
      }
    });
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    if (!isValid) {
      setError("Please fix the errors above before submitting.");
    }
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message");
      // If server indicates dev fallback, surface a clearer message in the UI
      if (data?.dev) {
        setDevMessage(data.message || "Message saved locally (development fallback).");
      } else {
        setDevMessage(null);
      }
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Let's discuss your next project or collaboration. I'm always excited to hear about new opportunities.
        </p>
      </div>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Send a Message</h2>
            {isSubmitted ? (
              <div className="card p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-800/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Thank you for reaching out. I'll get back to you within 24-32 hours.
                </p>
                {devMessage && (
                  <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-yellow-800 dark:text-yellow-300">
                    <strong>Note:</strong> {devMessage}
                  </div>
                )}
                <Button className="text-lg px-6 py-3" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-600 dark:text-red-400 text-lg">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="text-lg py-3"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="text-lg py-3"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="subject" className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="text-lg py-3"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="text-lg py-3 min-h-[120px]"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg py-3 bg-emerald-600 hover:bg-emerald-700"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h2>
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
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Connect with me</h3>
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com/leandre000" ariaLabel="GitHub">
                    <Github />
                  </SocialLink>
                </div>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Availability</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Available for freelance work and new opportunities. I typically respond within 24–32 hours.
                </p>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-emerald-500 rounded-full mr-3"></span>
                  <span className="text-lg text-slate-700 dark:text-slate-300">Open to new projects</span>
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
      <div className="bg-slate-100 dark:bg-slate-800 w-14 h-14 rounded-lg flex items-center justify-center mr-4">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 text-slate-600 dark:text-slate-400"
        })}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">{label}</h3>
        {link ? (
          <a
            href={link}
            className="text-lg text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            {display}
          </a>
        ) : (
          <p className="text-lg text-slate-600 dark:text-slate-400">{display}</p>
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
      className="bg-slate-100 dark:bg-slate-800 w-14 h-14 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
    >
      {React.cloneElement(children as React.ReactElement, {
        className: "w-7 h-7 text-slate-600 dark:text-slate-400"
      })}
    </a>
  );
}
