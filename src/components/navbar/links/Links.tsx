"use client";
import { useState } from "react";
import NavLink from "./navLink/NavLink";
const links = [
	{ path: "/", title: "Home" },
	{ path: "/about", title: "About" },
	{ path: "/contact", title: "Contact" },
	{ path: "/blog", title: "Blog" },
];
const Links = () => {
	const [open, setOpen] = useState(false);

	const session = true;
	const isAdmin = true;

	return (
		<div className="container">
			<div className="sm:flex hidden items-center gap-3 ">
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
						<button className="p-[10px] cursor-pointer bg-textSoft text-main px-2 py-1 font-bold">Logout</button>
					</>
				) : (
					<NavLink item={{ path: "/login", title: "Login" }} />
				)}
			</div>
			<button
				onClick={() => {
					setOpen((prev) => !prev);
				}}
				className="sm:hidden block cursor-pointer"
			>
				Menu
			</button>
			{open && (
				<div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-black flex flex-col items-center justify-center gap-[10px]">
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};
export default Links;
