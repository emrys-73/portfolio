<script>
	// @ts-nocheck
	import { Avatar } from '@skeletonlabs/skeleton';
	import { GlassCard, Button, NavItem } from '$lib/components';
	import { useChat } from "ai/svelte";


	const { messages, handleSubmit, input } = useChat({
        api: "/chat",
		initialMessages: [{"role": "system", "content": "You are Adrian's personal AI assistant made by him and your goal is to inform anyone about him and answer to any questions about Adrian, his life and his projects. You will only talk about Adrian and your messages will always be short. Maximum one sentence. You will be polite like Jarvis from Iron Man,  This is your knowledge on Adrian: ''' Adrian (male) was born and raised in Lima, Peru. Throughout his childhood he had the main goal of exploring as much as possible despite his limited resources. His curiosity lead him to explore all activities he had at hand. He plays over 10 instruments, speaks german, english and Spanish fluently and has decent knowledge in french and Romanian. Adrian won the second place in the national mathematics olympiads when he was 11 years old and got a scholarship to attend the Humboldt School in Lima, Peru. Adrian started exploring his skills from an early age when he sold translations and graphic designs online being only 12 years old. He then developed an interest for photo and cinematography. He sold his works online as worked as a wedding photographer freelancer until the age of 17. He explored several business types including a 4-figure dropshipping store he built at 16 years old. Adrian volunteered for four years in several projects to raise money for building houses for people in need. In his last year in Peru he lead a team of volunteers to raise 10 000 dollars which they used to buy materials and build four houses by themselves for families in need in Peru. Adrian was always passionate about psychology, science and engineering. This lead him to conduct a research on the relationship between algorithmic thinking and psychology for enhancing the learning experience. Research that concluded in a workshop founded by his school to help the kids at his school learn in a more efficient way. After graduating school he decided to move to Germany to pursue a career in Computer Science. He moved to Germany in 2019 to study computer science at the Technical University of Munich. Adrian worked early on as a Tutor for discrete structures for the university where he ended up lecturing hundreds of students for a repetition class on the same topic. Adrian was always excited about mathematics and wanted to help his friends understand it better and in a more intuitive way so he wrote a 60 page book on discrete and continuous probability theory. Adrian worked for two years as a PLC Engineer at TUM Hyperloop performing a wide range of tasks from electrical engineering, to software architecture, conducting research and even graphic design for the team. Adrian worked for a semester at Horyzn aerospace where he supported the team as a software consultant. In 2021 Adrian started working at Isar Aerospace as a PLC engineer. He soon shifted to become a software developer at the company where he co-developed internal .NET applications for Test and Launch systems of the rocket. Adrian performed a wide variety of tasks during his time at Isar Aerospace. He conducted a market analysis and B2B negotiations with  GitLab, he designed the full interface of the 'Discovery' software - A tool to read time-series data with high accuracy and reliability; tool which he later co-developed. Adrian has experience in various programming languages such as Python, Java, C#, C++, C, Haskell, OCaml, amongst others. Adrian has designed over a dozen logos for Isar Aerospace products to be used during pitches with investors. Adrian designed and developed a software for his church to store and manage data about the songs they play and is currently developing a full website as well as working for the social media marketing of his church. In the beginning of 2023, Adrian started developing various AI-enhanced Software tools. He soon started developing custom-trained AI chatbots for service-based businesses and partnered up with Mino Lee - content creator with an audience of over one million followers - to develop custom AI software solutions. The grow of demand of this business lead Adrian to quit his job at Isar Aerospace and it gave birth to Astralta. Astralta offers a software solution that let's users seamlessly train AI Chatbots on their data and fine-tune them to their needs. Adrian is the founder and creator of Astralta. Astralta is used now worldwide helping businesses provide a natural interface with their customers. Adrian keeps building all the tools he can possibly imagine. He is a firm believer that little improvements can go a long way. He developed a Chrome Extension to easily look up and generate LaTeX code with AI. He built a website that provides bible verses for any given problem or topic the user talks about. Adrian is in partnership with the HoriZen marketing agency where he builds software to manage and overview bookings of hotels and restaurants. Adrian loves to play music and sing in his free time, as well as go to the gym or do sports. He is a passionate learner and curious inventor. Adrian believes in a world where he creates all the tools he dreams about to make life for everyone more enjoyable. ''''"}]
      });

      
    let message;

    input.subscribe((value) => message = value)
    const MAX_ROWS = 10;

	$: rows = message.length > 0 ? Math.min(Math.ceil(message.length / 80), MAX_ROWS) : 1;
    $: rounded = rows > 1 ? "rounded-lg" : "rounded-full";

	let expItem;
    $: expItem = 2;

	const navItems = [
		{
			"title": "TUM",
			"position": "Tutor for Discrete Structures",
			"duration": "6 months",
			"skills": ["Public Speaking", "Leadership", "Communication"],
			"img": "/astralta_ss.png",
			"link": "https://www.tum.de/"
		},
		{
			"title": "Isar Aerospace",
			"position": "Software / Avionics Engineer",
			"duration": "2 years",
			"skills": ["B2B Negotiation", "Agile Management", "Full-Stack Development", "UI/UX"],
			"img": "/astralta_ss.png",
			"link": "https://www.isaraerospace.com/"
		},
		{
			"title": "Astralta",
			"position": "Founder",
			"duration": "6 months",
			"skills": ["B2C Negotiation", "Marketing", "AI", "Prompt Engineering", "Sales", "Copywriting"],
			"img": "/astralta_ss.png",
			"link": "https://astralta.com/"
		},
		{
			"title": "TUM Hyperloop",
			"position": "PLC Engineer",
			"duration": "2 years",
			"skills": ["Software Architecture", "Graphic Design", "Team Work"],
			"img": "/astralta_ss.png",
			"link": "https://tumhyperloop.com/"
		},
		{
			"title": "Horyzn Aerospace",
			"position": "Software Consultant",
			"duration": "6 months",
			"skills": ["Creative Thinking", "TDD", "Adaptability"],
			"img": "/astralta_ss.png",
			"link": "https://horyzn.org/"
		},
		
	];


</script>

<div class="w-full h-full bg-black bg-opacity-40 z-10">

	<div class="w-full h-screen">
		<div class="h-full grid grid-cols-4 xl:px-64 sm:px-10 md:px-20 lg:px-32 px-6">
			<div class="col-span-2 justify-center items-center text-center flex flex-col">
				<div class="flex">
					<h1 class="w-full text-left px-20  xl:text-5xl lg:text-4xl md:text-2xl sm:text-lg font-bold font-sans drop-shadow-lg">
						Hi, I'm Adrian
					</h1>
				</div>
				<div class="flex">
					
					<span class="italic py-4">
						Computer scientist based in Munich
					</span>
					
				</div>
				<div class="flex">
					<a href="mailto:montoya@astralta.com">
						<Button>
							Get in touch
						</Button>
					</a>
				</div>
				
			</div>
			<div class="col-span-2">
				<div class="w-full h-full flex justify-center items-center">
					<Avatar src="/me.png" width="w-72" rounded="rounded-full" class=" drop-shadow-lg"/>
				</div>
	
			</div>
		</div>
		
		
	</div>

	<div class="h-[50vh]">
		<div class="px-40 text-center flex justify-center items-center content-center flex-col">
			<h2 class="font-bold text-4xl">
				Experience
			</h2>
			<GlassCard>
				<!-- {expItem} -->
				<div class="flex flex-row gap-3">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => {expItem = 0}} class="{expItem === 0 ? 'bg-white bg-opacity-60 rounded-full hover:text-black' : ''}">
						<Button>
							TUM
						</Button>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => {expItem = 1}} class="{expItem === 1 ? 'bg-white bg-opacity-60 rounded-full hover:text-black' : ''}">
						<Button>
							Isar Aerospace
						</Button>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => {expItem = 2}} class="{expItem === 2 ? 'bg-white bg-opacity-60 rounded-full hover:text-black' : ''}">
						<Button>
							Astralta
						</Button>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => {expItem = 3}} class="{expItem === 3 ? 'bg-white bg-opacity-60 rounded-full hover:text-black' : ''}">
						<Button>
							TUM Hyperloop
						</Button>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => {expItem = 4}} class="{expItem === 4 ? 'bg-white bg-opacity-60 rounded-full hover:text-black' : ''}">
						<Button>
							Horyzn Aerospace
						</Button>
					</div>

				</div>
			</GlassCard>
			<NavItem>
				
				<!-- <span slot="img" class="">
					<div class="justify-center flex items-center content-center">
						<img src={navItems[expItem].img} alt="img" class="rounded-2xl bg-cover justify-center"/>
					</div>
				</span> -->
				<span slot="title">
					<a href={navItems[expItem].link} alt="link">
						{navItems[expItem].title}
					</a>
				</span>
				<span slot="subtitle">
					{navItems[expItem].position}
				</span>
				<span slot="duration" class="btn bg-black bg-opacity-20 rounded-full btn-sm my-2">
					{navItems[expItem].duration}
				</span>
				
					<span class="text-white font-regular block text-left pb-2">
						Skills Acquired
					</span>
					<div class="text-left">
						{#each navItems[expItem].skills as skill}
							<span class="btn btn-sm bg-black bg-opacity-50 rounded-full mr-1 my-1">
								{skill}
							</span>
						{/each}
					</div>
			</NavItem>
		</div>

	</div>
	
	<!-- AI Chat -->
	<div class="w-full h-screen justify-center flex items-center">
		<div class="flex flex-col xl:px-64 sm:px-10 md:px-20 lg:px-32 px-6">
			<div class="items-center justify-center text-center">
				<h2 class="text-center text-3xl font-bold">
					Ask anything
				</h2>
				<p class="py-4">
					My personal AI assistant is here to quickly answer any questions you might have on me or my projects.
				</p>
				<div class="px-40">
					<GlassCard>
						<div class="max-h-[400px] overflow-y-auto py-4 ">

							<ul>
								{#each $messages as message}
								<li>
								  {#if message.role == 'user'}
								  <div class="text-left text-true-white text-md bg-black rounded-xl bg-opacity-10 backdrop-blur-xl my-2 drop-shadow-xl"><pre class="w-full p-2 px-4 overflow-auto whitespace-pre-wrap">{message.content}<pre/></div>
								  {:else if message.role == 'assistant'}
								  <div class="text-left text-true-white text-md bg-black rounded-xl bg-opacity-60 backdrop-blur-xl my-2 drop-shadow-xl">
									<pre class="w-full p-2 px-4 overflow-y-auto whitespace-pre-wrap">{message.content}</pre></div>
								  {:else}
								  <div class="text-left text-true-white text-md bg-black rounded-xl bg-opacity-60 backdrop-blur-xl my-2 drop-shadow-xl ">
									<h2 class="text-2xl text-true-white text-center">
									  System training:
									</h2>
									<pre class="w-full p-2 px-4 overflow-y-auto whitespace-pre-wrap">{message.content}</pre></div>
								  {/if}
								</li>
								{/each}
							  </ul>
						</div>
	
						<form on:submit={handleSubmit}>
							<div class="grid grid-cols-10">
							  <div class="col-span-9">
								<textarea rows={rows} name="message" class="{rounded} overflow-auto appearance-none touch-manipulation {message.length > 0 ? '' : 'breathe'} select-none resize-none min-h-[40px] 
								  s-apple-input bg-black bg-opacity-40 w-full font-regular force-opaque-sm text-[15px] hover:text-true-white hover:opacity-100 text-true-white
								   focus:bg-black focus:bg-opacity-40 focus:apple-input focus:force-opaque
									focus:border-none" placeholder="Send a message" bind:value={$input} on:keydown={(event) => {
									  if (event.key === 'Enter' && !event.shiftKey) {
										event.preventDefault();
										handleSubmit(event);
									  }}}></textarea>
							  </div>
							  <div class="col-span-1 px-1">
								<button class="btn bg-true-black text-xl bg-opacity-50 hover:bg-opacity-20 hover:bg-gray-300 rounded-full text-true-white font-semibold btn-sm md:text-md border-none normal-case drop-shadow-2xl h-[40px] apple-btn w-full" type="submit">
								  ➤
								</button>
							  </div>
							</div>
						  </form>
					</GlassCard>


					<h2 class="font-bold text-lg pt-8">
						Supercharged by <a href="https://astralta.com" class=" underline hover:opacity-75">Astralta</a>
					</h2>
				</div>
			</div>
		</div>
	</div>
</div>