"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    searchParams.get("error") === "not_configured"
      ? "ยังไม่ได้ตั้ง ADMIN_PASSWORD และ ADMIN_SESSION_SECRET ใน .env.local"
      : null,
  );
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "เข้าสู่ระบบไม่สำเร็จ");
        return;
      }
      router.replace(searchParams.get("next") || "/admin");
      router.refresh();
    } catch {
      setError("เชื่อมต่อเซิร์ฟเวอร์ไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a73e8] text-sm font-bold text-white">
          PS
        </div>
        <h1 className="text-2xl font-normal text-[#202124]">เข้าสู่ระบบ Admin</h1>
        <p className="mt-2 text-sm text-[#5f6368]">
          แดชบอร์ด Search Console ภายในของ PhuketSEO
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-[#dadce0] bg-white p-6 shadow-sm"
      >
        <label className="block text-sm font-medium text-[#3c4043]">
          รหัสผ่าน
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[#dadce0] px-3 py-2.5 text-[#202124] outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20"
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="text-sm text-[#d93025]">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#1a73e8] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1765cc] disabled:opacity-60"
        >
          {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>
    </div>
  );
}
