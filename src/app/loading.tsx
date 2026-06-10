export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-950 border-t-green-500 rounded-full animate-spin" />
        <p className="text-gray-500 text-sm">กำลังโหลด...</p>
      </div>
    </div>
  );
}
