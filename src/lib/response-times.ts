/** มาตรฐานเวลาตอบกลับ — ใช้ทุกหน้าให้ตรงกัน */
export const RESPONSE_TIMES = {
  contactReply: "1 วันทำการ",
  auditReport: "7 วันทำการ",
} as const;

export const responseTimeCopy = {
  contactReply: `ติดต่อกลับภายใน ${RESPONSE_TIMES.contactReply}`,
  contactReplyThankYou: `เราจะติดต่อกลับภายใน ${RESPONSE_TIMES.contactReply}`,
  auditReport: `ส่งรายงาน SEO Audit ภายใน ${RESPONSE_TIMES.auditReport}`,
  auditReportThankYou: `เราจะส่งรายงาน SEO Audit ให้ภายใน ${RESPONSE_TIMES.auditReport}`,
  auditFormIntro: `ยืนยันคำขอภายใน ${RESPONSE_TIMES.contactReply} · ส่งรายงาน Audit ภายใน ${RESPONSE_TIMES.auditReport}`,
  contactMeta: `ติดต่อกลับภายใน ${RESPONSE_TIMES.contactReply}`,
} as const;

export function isAuditLead(service?: string | null) {
  return Boolean(service?.toLowerCase().includes("audit"));
}
