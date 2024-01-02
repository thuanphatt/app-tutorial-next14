import Links from "./links/Links";

const Navbar = () => {
	return (
		<div className="flex h-[100px] items-center justify-between">
			<div className="font-bold text-[30px]">Logo</div>
			<div>
				<Links />
			</div>
		</div>
	);
};
export default Navbar;
