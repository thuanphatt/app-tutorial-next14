import NavLink from "./navLink/NavLink";

const Links = () => {
	const links = [
		{ path: "/", title: "Home" },
		{ path: "/about", title: "About" },
		{ path: "/contact", title: "Contact" },
		{ path: "/blog", title: "Blog" },
	];
	const session = true;
	const isAdmin = true;

	return (
		<div className="flex items-center gap-3">
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
	);
};
export default Links;
