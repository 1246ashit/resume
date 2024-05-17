import Link from "next/link";

export default function HeaderbarItem({ title, className, href }) {
  return (
    <Link href={href} className={` ${className} cursor-pointer`}>
        <p className="text-center font-semibold">
          {title}
        </p>
    </Link>
  );
}
