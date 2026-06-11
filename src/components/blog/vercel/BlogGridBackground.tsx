/** Vercel-style article background — flat #FAFAFA */
export function BlogGridBackground({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#FAFAFA] text-neutral-900">{children}</div>;
}
