import Link from "next/link";

const Links = () => {
	const links = [
		{ path: "/", title: "Home" },
		{ path: "/about", title: "About" },
		{ path: "/contact", title: "Contact" },
		{ path: "/blog", title: "Blog" },
	];
	return (
		<div>
			{links.map((link) => (
				<Link href={link.path} key={link.title}>
					{link.title}
				</Link>
			))}
		</div>
	);
};
export default Links;
