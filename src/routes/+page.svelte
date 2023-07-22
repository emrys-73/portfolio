<script>
	// @ts-nocheck
	import { Avatar } from '@skeletonlabs/skeleton';
	import { GlassCard, Button, NavItem } from '$lib/components';
	import { useChat } from "ai/svelte";

	const { messages, handleSubmit, input } = useChat({
        api: "/chat",
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
			"duration": "2 years",
			"skills": ["Creative Thinking", "TDD", "Adaptability"],
			"img": "/astralta_ss.png",
			"link": "https://horyzn.org/"
		},
		
	]


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