import { Clock } from "lucide-react";

type Props = {
  readingTime: string;
  date: string;
  dateISO: string;
};

export function BlogArticleMeta({ readingTime, date, dateISO }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 mt-8 pt-8 border-t border-neutral-200/80 text-sm text-neutral-500">
      <div className="flex items-center gap-1.5">
        <Clock size={14} className="text-neutral-400" aria-hidden />
        <span>{readingTime} อ่าน</span>
      </div>
      <time dateTime={dateISO}>{date}</time>
    </div>
  );
}
