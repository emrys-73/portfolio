<script>
	import { animate } from "../stores";

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
					<div class="{$animate} absolute bottom-0 w-full row-span-1 backdrop-blur-lg flex flex-col gap-0 justify-start items-start p-4 overflow-auto h-20 sm:h-24 md:h-32 {hoverblack}">
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
	<!-- <section id="ai" class="w-full gap-1 flex flex-col py-10">


	</section> -->
</div>