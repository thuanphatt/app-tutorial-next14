import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="flex gap-[100px]">
			<div className="flex-1 flex flex-col gap-8">
				<h1 className="font-bold text-blue-500 text-2xl">About Agency</h1>
				<h3 className="font-bold text-white max-w-[480px] text-4xl">
					We create digital ideals that are bigger, bolder, braver and bester.
				</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem unde nulla minus voluptatibus tempora pariatur
					fugit adipisci fugiat itaque, iste aperiam perferendis, atque molestiae exercitationem voluptate quo a
					sapiente maxime!
				</p>
				<div className="flex justify-between">
					<div className="flex flex-col gap-2">
						<span className="text-2xl font-bold text-blue-500">10 K+</span>
						<span>Year of experience</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-2xl font-bold text-blue-500">234 K+</span>
						<span>People reached</span>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-2xl font-bold text-blue-500">5 K+</span>
						<span>Service and plugin</span>
					</div>
				</div>
			</div>
			<div className="flex-1 relative md:h-[400px]">
				<Image src={"/about.png"} alt="about" fill className="object-contain" />
			</div>
		</div>
	);
};
export default AboutPage;
