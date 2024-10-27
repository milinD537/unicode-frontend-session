import { Textanimation } from "@/components/textanimation"

export default function Home() {
	return (
		<>
			<div className="min-h-svh p-6 grid place-items-center">
				<section className="Hero | grid place-items-center w-full h-full rounded-xl px-4">
					<div>
						<Textanimation name="how-to layout?" />
						<p className="lg:text-xl text-center mt-4 opacity-0 -translate-y-full animate-[text-animation_700ms_forwards]">
							Welcome to the{" "}
							<code className="bg-white/20 p-1 rounded-md">
								design replication
							</code>{" "}
							seminar by{" "}
							<span className="underline underline-offset-4">
								Milind Pithadia
							</span>
						</p>
					</div>
				</section>
			</div>

			<div className="min-h-svh grid place-items-center">
				<div className="card | max-w-screen-md flex items-start gap-4">
					<div className="accordion-grid | bg-text text-background py-4 px-6 grid grid-rows-[auto_0fr] has-[~#accordion:checked]:grid-rows-[auto_1fr] transition-[grid-template-rows] rounded-md">
						<h2 className="text-3xl font-semibold">Inspiration</h2>
						<p className="text-lg overflow-hidden">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Rem magnam suscipit corporis officia
							distinctio odio alias, ipsa quis ipsam, qui
							repellendus inventore ea, necessitatibus delectus?
						</p>
					</div>
					<input
						type="checkbox"
						name=""
						id="accordion"
						className="hidden"
					/>
					{/* can also use radio buttons similarly for multiple cards */}
					{/* kept visible for demo */}
					<label
						htmlFor="accordion"
						className="accordionClick bg-red-400 px-6 py-3 rounded-md hover:cursor-pointer"
					>
						click
					</label>
				</div>
			</div>
		</>
	)
}
