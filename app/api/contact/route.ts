import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// NOTE: Database operations require Prisma setup. The code below gracefully
// handles cases where the database is not yet configured.
// import prisma from "@/lib/services/prisma";
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validationResult.data;

    // Optional: Verify reCAPTCHA
    // if (data.recaptchaToken) {
    //   const recaptchaRes = await fetch(
    //     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
    //     { method: "POST" }
    //   );
    //   const recaptchaData = await recaptchaRes.json();
    //   if (!recaptchaData.success) {
    //     return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
    //   }
    // }

    // Store in database (uncomment when Prisma is set up)
    // const lead = await prisma.lead.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     business: data.business,
    //     subject: data.subject,
    //     message: data.message,
    //   },
    // });

    // Send email notification (uncomment when Resend is configured)
    // await resend.emails.send({
    //   from: "Vardaan Group <noreply@vardaangroup.com>",
    //   to: [process.env.CONTACT_EMAIL!],
    //   subject: `New Lead: ${data.subject} [${data.business}]`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Business:</strong> ${data.business}</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you soon!",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
