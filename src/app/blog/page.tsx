import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<div className="w-full lg:w-[30%] md:w-[45%]">
				<PostCard />
			</div>
			<div className="w-full lg:w-[30%] md:w-[45%]">
				<PostCard />
			</div>
			<div className="w-full lg:w-[30%] md:w-[45%]">
				<PostCard />
			</div>
			<div className="w-full lg:w-[30%] md:w-[45%]">
				<PostCard />
			</div>
		</div>
	);
};
export default BlogPage;
