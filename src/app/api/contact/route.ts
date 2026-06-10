import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const body = await req.json();
    const { name, email, phone, business, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "กรุณากรอกข้อมูลให้ครบถ้วน" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "รูปแบบ Email ไม่ถูกต้อง" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "PhuketSEO <noreply@phuketseo.com>",
      to: [process.env.CONTACT_EMAIL ?? "phuketseo369@gmail.com"],
      subject: `Lead ใหม่: ${name} — ${business ?? "ไม่ระบุธุรกิจ"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #25D366; padding-bottom: 8px;">
            Lead ใหม่จาก PhuketSEO
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">ชื่อ-นามสกุล</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">เบอร์โทร</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">ชื่อธุรกิจ</td><td style="padding: 8px 0;">${business ?? "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">บริการที่สนใจ</td><td style="padding: 8px 0;">${service ?? "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">ข้อความ</td><td style="padding: 8px 0;">${message ?? "—"}</td></tr>
          </table>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
            ส่งจากแบบฟอร์มบน phuketseo.com — ${new Date().toLocaleString("th-TH")}
          </p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "PhuketSEO <noreply@phuketseo.com>",
      to: [email],
      subject: "ขอบคุณที่ติดต่อ PhuketSEO — เราจะติดต่อกลับเร็วๆ นี้",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">สวัสดีคุณ ${name} 👋</h2>
          <p>ขอบคุณที่ส่งข้อความมาหา PhuketSEO ครับ</p>
          <p>เราได้รับข้อมูลของคุณแล้วและจะติดต่อกลับภายใน <strong>1 วันทำการ</strong></p>
          <p style="margin-top: 24px;">หากต้องการติดต่อด่วน สามารถ LINE มาได้เลยที่ <strong>${process.env.NEXT_PUBLIC_LINE_OA ?? "@phuketseo"}</strong></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #6b7280; font-size: 12px;">PhuketSEO — Digital Marketing Agency ภูเก็ต</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" },
      { status: 500 }
    );
  }
}
