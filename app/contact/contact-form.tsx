"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

const businessOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "travels", label: "Vardaan Travels & Holidays" },
  { value: "furnishings", label: "Vardaan Furnishings" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedBusiness = searchParams.get("business") || "general";
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      business: preselectedBusiness as ContactFormData["business"],
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Frontend-only mode: no backend API submission.
    // Keep UX realistic with a short async delay.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.info("Contact form submission (frontend-only):", data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="py-12 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-accent" />
        <h3 className="mb-2 text-2xl font-semibold text-dark-900">
          Thank You!
        </h3>
        <p className="mb-6 text-dark-500">
          Your message has been received. Our team will get back to you within
          24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-dark-700">
            Full Name *
          </label>
          <Input
            {...register("name")}
            placeholder="Your full name"
            error={errors.name?.message}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-dark-700">
            Email Address *
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-dark-700">
            Phone Number *
          </label>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            error={errors.phone?.message}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-dark-700">
            Business Vertical *
          </label>
          <Select
            defaultValue={preselectedBusiness}
            onValueChange={(val) =>
              setValue("business", val as ContactFormData["business"])
            }
          >
            <SelectTrigger error={errors.business?.message}>
              <SelectValue placeholder="Select a business" />
            </SelectTrigger>
            <SelectContent>
              {businessOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-dark-700">
          Subject *
        </label>
        <Input
          {...register("subject")}
          placeholder="What is this regarding?"
          error={errors.subject?.message}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-dark-700">
          Message *
        </label>
        <Textarea
          {...register("message")}
          placeholder="Tell us about your requirements..."
          rows={5}
          error={errors.message?.message}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
