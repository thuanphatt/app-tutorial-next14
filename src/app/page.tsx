import Image from "next/image";

export default function Home() {
	return (
		<div className="flex gap-[100px]">
			<div className="flex-1 flex flex-col gap-[50px]">
				<h1 className="text-6xl font-bold max-w-[200px]">Creative Thoughts Agency.</h1>
				<p className="text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat magni ullam. Laboriosam in a maxime
					vitae, esse excepturi inventore.
				</p>
				<div className="flex gap-[20px]">
					<button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px] bg-btn text-textSoft">
						Learn more
					</button>
					<button className="p-[20px] min-w-[120px] cursor-pointer bg-white text-main rounded-[5px]">Contact</button>
				</div>
				<div className="w-[500px] h-[50px] relative grayscale-[1]">
					<Image src="/brands.png" alt="brands" fill />
				</div>
			</div>
			<div className="flex-1 relative">
				<Image src="/hero.gif" alt="hero" fill className="object-contain" />
			</div>
		</div>
	);
}
