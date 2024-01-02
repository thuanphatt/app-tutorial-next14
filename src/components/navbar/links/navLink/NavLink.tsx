"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }: { item: any }) => {
	const pathName = usePathname();
	return (
		<Link
			href={item.path}
			key={item.title}
			className={clsx(
				pathName === item.path
					? "bg-textSoft text-main min-w-[100px] px-2 py-1 rounded-lg text-center font-bold"
					: "text-textSoft min-w-[100px] px-2 py-1 rounded-full text-center font-bold"
			)}
		>
			{item.title}
		</Link>
	);
};
export default NavLink;
