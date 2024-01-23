import Image from "next/image";

const ContactPage = () => {
	return (
		<div className="flex">
			<div className="flex-1 relative">
				<Image src={"/contact.png"} alt="contact" fill className="object-contain" />
			</div>
			<div className="flex-1 flex flex-col gap-4">
				<input
					type="text"
					name="Name and Surname"
					placeholder="Name and Surname"
					className="px-1 py-2 text-gray-50 bg-[#2d2b42] rounded-md pl-4"
				/>
				<input
					type="email"
					name="Email address"
					placeholder="Email address"
					className="px-1 py-2 text-gray-50 bg-[#2d2b42] rounded-md pl-4"
				/>
				<input
					type="number"
					name="Phone number (Optional)"
					placeholder="Phone number (Optional)"
					className="px-1 py-2 text-gray-50 bg-[#2d2b42] rounded-md pl-4"
				/>
				<textarea
					name="Message"
					id=""
					cols={30}
					rows={10}
					placeholder="Message"
					className="p-1 py-2 text-gray-50 bg-[#2d2b42] rounded-md pl-4"
				></textarea>
				<button className="w-full text-white bg-blue-500 rounded-md px-1 py-2 pl-4">Send</button>
			</div>
		</div>
	);
};
export default ContactPage;
