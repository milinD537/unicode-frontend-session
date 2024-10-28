export default function Textanimation({ name }: { name: string }) {
	return name.split(" ").map((item, index) => (
		<h1
			key={index}
			className="clamp font-bold uppercase text-center leading-none overflow-hidden"
		>
			{item.split("").map((item, index) => (
				<span
					className={`inline-block translate-y-full opacity-0 animate-[text-animation_700ms_forwards]`}
					style={{ animationDelay: `${index * 0.05}s` }}
					key={index}
				>
					{item}
				</span>
			))}
		</h1>
	))
}
