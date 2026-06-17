import { Clock } from "lucide-react";

type Props = {
  readingTime: string;
};

export function BlogArticleMeta({ readingTime }: Props) {
  return (
    <div className="mt-8 pt-8 border-t border-neutral-200/80 text-sm text-neutral-500">
      <div className="flex items-center gap-1.5">
        <Clock size={14} className="text-neutral-400" aria-hidden />
        <span>{readingTime} อ่าน</span>
      </div>
    </div>
  );
}
