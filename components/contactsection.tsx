"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!form.current) return false;

    const formData = new FormData(form.current);

    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const message = formData.get("message") as string;

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!message || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message.");
        },
      );
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm text-muted-foreground">Contact</p>

        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Get In Touch</h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5" />
            <span>sameertaramu1@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5" />
            <span>9806941067</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5" />
            <span>Nepal</span>
          </div>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div>
            <Label>Name</Label>

            <Input name="user_name" placeholder="Your Name" />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <Label>Email</Label>

            <Input name="user_email" type="email" placeholder="Your Email" />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <Label>Message</Label>

            <Textarea name="message" placeholder="Your Message" />

            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
