import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="relative w-full h-[500px]">
			<Image src={"/about.png"} alt="about" fill />
		</div>
	);
};
export default AboutPage;
