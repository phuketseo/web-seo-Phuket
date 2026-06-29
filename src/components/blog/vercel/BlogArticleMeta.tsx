import { Clock } from "lucide-react";

type Props = {
  readingTime: string;
};

export function BlogArticleMeta({ readingTime }: Props) {
  return (
    <div className="mt-8 pt-8 border-t border-slate-200 text-sm text-slate-500">
      <div className="flex items-center justify-center gap-1.5">
        <Clock size={14} className="text-indigo-500" aria-hidden />
        <span>{readingTime} อ่าน</span>
      </div>
    </div>
  );
}
