import Image from "next/image";
import { siteImages } from "@/lib/images";

type Props = {
  name: string;
  role: string;
};

export function BlogAuthorBox({ name, role }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 mt-8">
      <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-200 bg-white">
        <Image
          src={siteImages.team.somchai.src}
          alt=""
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>
    </div>
  );
}
