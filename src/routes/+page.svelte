<script>
// @ts-nocheck

	import { animate } from "../stores";
	import { useChat } from 'ai/svelte'

	const featuredProjects = [
		{
			"name": "Astralta",
			"img": "/media/a_studio.png",
			"description": "Astralta announces launch of 'Studio PRO' - the next iteration of their AI customisation software.",
			"link": "/",
			"tags": ["Web Development", "Startup"],
			"img-class": "bg-[url('/media/a_studio.png')]",
		},
		{
			"name": "Aivery",
			"img": "/media/tumai_old.JPG",
			"description": "Aivery reaches final phase at the TUM.AI Startup Accelerator.",
			"link": "/",
			"tags": ["Web Development", "Startup"],
			"img-class": "bg-[url('/media/tumai_old.JPG')]",
		},
	]

	const hoverblack = "hover:bg-black hover:bg-opacity-60"


	const { messages, handleSubmit, input } = useChat({
        api: "/chat",
		initialMessages: [{"role": "system", "content": "You are Adrian's personal AI assistant and you live inside his webpage. Your goal is to clear any questions anyone might have about Adrian and you will only talk about him. If you don't know something you will encourage them to contact Adrian personally. Here is your knowledge base on Adrian: Identity: Adrian, male, Lima, Peru. Childhood Goals: Exploration, overcoming resource limits. Skills: Multilingual (German, English, Spanish, French, Romanian), musical talent (10 instruments), graphic design, photography. Academics: National Mathematics Olympiads (2nd place, age 11), Humboldt School scholarship. Early Ventures: Online sales (translations, graphic designs), wedding photography. Business Experience: Dropshipping store (age 16), various entrepreneurial projects. Volunteering: House-building for needy, raised $10,000. Passions: Psychology, science, engineering. Research: Algorithmic thinking in education. Higher Education: Computer Science, Technical University of Munich. Teaching: Tutor, lecturer in discrete structures. Authorship: Book on probability theory. Professional Roles: PLC Engineer (TUM Hyperloop), Software Consultant (Horyzn aerospace), Software Developer (.NET, Isar Aerospace), diverse tasks including market analysis, B2B negotiations, and interface design. Programming Skills: Python, Java, C#, C++, C, Haskell, OCaml. Design Work: Logos for Isar Aerospace. Religious Affiliation: Christian. Church Contribution: Software for song management, website development, social media marketing. AI Ventures: AI-enhanced tools development, custom-trained AI chatbots, partnership with Mino Lee, founder of Astralta (Studio PRO, Astralta Infinity). Startup Involvement: TUM.AI Startup Accelerator, co-founder of Aivery. Ongoing Projects: AI software development, Chrome Extension for LaTeX, Bible verse website. Personal Life: Single, enjoys music, singing, gym, sports, passionate learner and inventor."}],
      });


</script>


<div class="w-full h-full px-8 lg:px-8 py-6 flex flex-col text-white z-10 pt-32 sm:pt-6">
	<!-- Introduction -->
	<section id="intro" class="w-full gap-1 flex flex-col py-10">
		<span class="text-4xl font-semibold tracking-wide">
			Hi, I'm Adrian
		</span>
		<span class="opacity-60 font-light">
			Computer Scientist / Founder
		</span>
		<div class="py-8 flex flex-row justify-start items-center gap-1">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
			  </svg>
			<span>
				Munich, Germany
			</span>			  
		</div>
	</section>


	<!-- Recent News -->
	<section id="news" class="w-full gap-1 flex flex-col py-10">
		<div class="py-4">
			<span class="text-2xl font-semibold ">
				Recent News
			</span>
		</div>
		<div class="w-full flex flex-col sm:flex-row justify-start items-center gap-8 sm:gap-4 md:gap-6 xl:gap-8 py-2">
			{#each featuredProjects as fp}	
				<div class="w-full rounded-2xl h-60 sm:h-80 lg:h-[450px] altashadow grid grid-rows-4 overflow-hidden relative ">
					<div class="h-full {fp["img-class"]} row-span-3 bg-image">
					</div>
					<div class="{$animate} absolute bottom-0 w-full row-span-1 backdrop-blur-lg flex flex-col gap-0 justify-start items-start p-4 overflow-auto h-20 sm:h-24 md:h-32 bg-black bg-opacity-60">
						<span class="text-lg font-semibold xl:text-xl">
							{fp.name}
						</span>
						<span class="text-sm opacity-80 xl:text-md">
							{fp.description}
						</span>
					</div>

				</div>
			{/each}

		</div>
	</section>


	<!-- About Me -->
	<section id="about" class="w-full gap-1 flex flex-col py-10">
		<div class="py-4">
			<span class="text-2xl font-semibold ">
				Get to know me
			</span>
		</div>
		<div class="w-full h-full flex flex-col gap-4">
			<div class="w-full h-80 gap-4 flex flex-row">
				<a href="https://www.astralta.com/" class="{$animate} w-1/2 h-full bg-[url('/bg/splash.png')] bg-image backdrop-blur-3xl rounded-xl flex flex-col p-4 altashadow justify-between {hoverblack}">
					<div class="text-2xl font-semibold flex flex-col">
						<div>
							Astralta
						</div>
						<div class=" font-light text-sm">
							<div class="bg-black bg-opacity-20 rounded-xl p-2 md:bg-opacity-0 sm:p-0 w-full ">
								Founder & CEO
							</div>
						</div>
					</div>
					<div class="font-light opacity-40 text-sm">
						Since December 2022
					</div>
				</a>
				<div class="w-1/2 flex flex-col gap-4">
					<a href="https://aivery.tech/" class="{$animate} backdrop-blur-3xl altashadow rounded-xl w-full h-full bg-image p-4 flex flex-col justify-between {hoverblack}">
						<div>
							<div class="text-2xl font-semibold">
								Aivery
							</div>
							<div class=" font-light text-sm">
								<div class="bg-black bg-opacity-20 rounded-xl p-2 md:bg-opacity-0 sm:p-0 w-full ">
									Co-Founder
							</div>
							</div>
						</div>
						<div class="font-light opacity-40 text-sm">
							Since October 2023
						</div>
					</a>
					<a href="https://www.isaraerospace.com/" class="{$animate} backdrop-blur-3xl altashadow rounded-xl w-full h-full bg-[url('/bg/isar_bg.png')] bg-image-r p-4 flex flex-col justify-between {hoverblack}">
						<div>
							<div class="text-xl sm:text-2xl font-semibold">
								Isar Aerospace
							</div>
							<div class=" font-light text-sm">
								<div class="bg-black bg-opacity-20 rounded-xl p-2 md:bg-opacity-0 sm:p-0 w-full ">
									Software & Avionics Engineer
								</div>
							</div>
						</div>
						<div class="font-light opacity-40 text-sm">
							2 years
						</div>
					</a>
				</div>
			</div>

			<div class="w-full h-36">
				<a href="https://tumhyperloop.com/" class="{$animate} bg-[url('/bg/hyper_bg.png')] bg-image-b-r backdrop-blur-3xl altashadow p-4 rounded-xl w-full h-full flex flex-col justify-between {hoverblack}">
					<div>
						<div class="text-2xl font-semibold">
							TUM Hyperloop
						</div>
						<div class=" font-light text-sm">
							<div class="bg-black bg-opacity-20 rounded-xl p-2 md:bg-opacity-0 sm:p-0 w-full ">
								PLC & Software Engineer
							</div>
						</div>
					</div>
					<div class="font-light opacity-40 text-sm">
						2 years
					</div>
				</a>

			</div>

			<!-- <div class="w-full h-32 flex flex-row gap-4">
				<div class="w-3/4 h-full bg-black rounded-xl">

				</div>
				<div class="h-full w-1/4 bg-black rounded-xl">

				</div>
			</div>

			<div class="w-full h-32">
				<div class="bg-transparent backdrop-blur-3xl altashadow px-4 md:px-6 rounded-xl w-full h-full">

				</div>

			</div> -->

		</div>

	</section>


	<!-- AI -->
	<section id="ai" class="w-full gap-1 flex flex-col py-10">
		<div class="py-4">
			<span class="text-2xl font-semibold ">
				Ask anything
			</span>
			<!-- <span>
				Talk to my AI assistant to clear out any questions you might have about me. For further inquiries feel free to reach out to me personally.
			</span> -->
		</div>

		<div class=" backdrop-blur-3xl altashadow rounded-xl  max-h-[400px] relative w-full overflow-hidden">

			<div class="overflow-auto max-h-[300px] min-h-[70px] pb-20 z-10">
				<ul>
					{#each $messages as message}
						{#if message.role == "user"}
							<li class="bg-white bg-opacity-10 px-4 py-2">{message.content}</li>
						{:else}
							{#if message.role == "assistant"}
								<li class="bg-black px-4 py-2 bg-opacity-40">{message.content}</li>
							{/if}
						{/if}
					{/each}
				</ul>

			</div>


			<div class="absolute bottom-0 w-full p-4 backdrop-blur-3xl bg-black bg-opacity-40 rounded-xl">
				<form on:submit={handleSubmit} class="flex flex-row gap-2 items-center">
					<input class="bg-black border-none bg-opacity-40 rounded-lg placeholder:text-opacity-40 placeholder:text-gray-100 placeholder:italic w-full" placeholder="Type your message here" bind:value={$input} />
					<button type="submit" class="jusitfy-center items-center text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="{$animate} w-6 h-6 opacity-40 hover:opacity-100">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
						  </svg>
						  
					</button>
				  </form>
			</div>
			
		</div>
	</section>
</div>