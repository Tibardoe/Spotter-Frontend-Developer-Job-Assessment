import { cn } from "@/lib/cn";
import Link from "next/link";

type HeaderProps = {
  href: string;
  title: string;
  isCurrentPath: boolean;
  icon: React.ReactNode;
};

export default function HeaderLink({
  href,
  title,
  icon,
  isCurrentPath,
}: HeaderProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:bg-linkHover hover:border-white/25 hover:text-textHover transition-all duration-300",
        {
          "bg-fadedHoverBg text-textHover border-none": isCurrentPath,
        }
      )}
    >
      {icon}

      {title}
    </Link>
  );
}
