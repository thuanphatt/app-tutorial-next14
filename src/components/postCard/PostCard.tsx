import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
	return (
		<div className="flex flex-col gap-4 mb-5">
			<div className="flex gap-4 justify-between">
				<div className="w-[90%] h-[400px] relative">
					<Image
						fill
						src="https://images.pexels.com/photos/19421454/pexels-photo-19421454/free-photo-of-a-street-light-is-on-a-building-next-to-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="postCard"
						className="object-cover"
					/>
				</div>
				<span className="text-xs rotate-[270deg] w-[10%] m-auto">01.01.2024</span>
			</div>
			<div>
				<h1 className="text-xl mb-5 font-semibold">Title</h1>
				<p className="text-gray-500 mb-5 w-[90%] text-justify">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo accusantium ex consequuntur adipisci corrupti
					odio doloremque a sint, reiciendis quam, id dicta repellendus, magni quisquam! Inventore laboriosam rerum
					consequuntur dolore?
				</p>
				<Link href="/blog/post">READ MORE</Link>
			</div>
		</div>
	);
};

export default PostCard;
