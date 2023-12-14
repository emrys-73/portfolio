<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import 'iconify-icon'
	import { animate } from '../stores';


	const menu = [
		{
			"name": "Home",
			"icon": "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
			"url": "/#intro",
			"active": true,
		},
		{
			"name": "About",
			"icon": "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
			"url": "/#about",
			"active": true,
		},
		{
			"name": "Projects",
			"icon": "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
			"url": "/projects",
			"active": false,
		},
		{
			"name": "Stack",
			"icon": "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
			"url": "/stack",
			"active": false,
		},
		{
			"name": "CV",
			"icon": "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
			"url": "/cv",
			"active": false,
		},
		{
			"name": "Blog",
			"icon": "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
			"url": "/media",
			"active": false,
		},
		{
			"name": "Ask Anything",
			"icon": "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
			"url": "/#ai",
			"active": true,
		},
	]
	
	const socials = [
		{
			"name": "Linkdin",
			"link": "https://www.linkedin.com/in/adrianm1701/",
			"url": "/socials/linkdin.png",			
		},
		{
			"name": "Instagram",
			"link": "https://www.instagram.com/adrianmontoya00/",
			"url": "/socials/insta.png",			
		},
		{
			"name": "EMail",
			"link": "mailto:montoya@astralta.com",
			"url": "/socials/email.png",			
		},
	]

	
</script>


<AppShell class="bg-[url('/bg_25.png')] bg-image text-white">
	
	<div class="sm:hidden h-20 p-4 px-6 backdrop-blur-lg z-20 justify-between flex flex-row fixed top-0 w-full">
		<div class="flex flex-row gap-2 justify-center items-center">
			<img src="/me.png" class=" w-12 rounded-full altashadow" alt="">
			<!-- <span class="text-4xl font-semibold tracking-wide">
				Adrian
			</span> -->
		</div>

		<a href="mailto:montoya@astralta.com" class="{$animate} altashadow text-center bg-black rounded-full bg-opacity-40 flex justify-center px-4 flex-row items-center gap-1 opacity-60 hover:opacity-100">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 justify-center flex-col items-center flex">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
			  </svg>
			  
			<span class=" justify-center flex-col items-center text-sm lg:text-md">Get in touch</span>
			</a>
	</div>

	


	<svelte:fragment slot="sidebarLeft">
		<div class="hidden sm:flex sm:w-[200px] lg:w-[280px] h-full flex-col justify-start relative backdrop-blur-md bg-black bg-opacity-0">
			<!-- Profile Picture & Mail -->
			<section class=" py-12 flex flex-col justify-center items-center gap-4">
				<img src="/me.png" class=" w-3/4 rounded-full altashadow" alt="">
				<a href="mailto:montoya@astralta.com" class="{$animate} altashadow text-center bg-black rounded-full bg-opacity-40 py-1 flex justify-center px-4 flex-row items-center gap-1 opacity-60 hover:opacity-100 hover:px-6">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 justify-center flex-col items-center flex">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
					  </svg>
					  
					<span class=" justify-center flex-col items-center text-sm lg:text-md">Get in touch</span>
					</a>
			</section>
			<!-- Menu -->
			<section class="w-full px-4 flex flex-col gap-2">
				{#each menu as m}	
					{#if m.active}
					<a href={m.url} class="{$animate} bg-black bg-opacity-0 rounded-xl opacity-60 hover:opacity-100 py-2 w-full flex flex-row gap-2 justify-start items-center px-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 flex">
							<path stroke-linecap="round" stroke-linejoin="round" d={m.icon} />
						  </svg>		
						<span class="flex">
							{m.name}
						</span>
					</a>
					{/if}
				{/each}
			</section>

			<!-- Socials -->
			<section class="absolute bottom-4 h-10 w-full flex flex-row justify-evenly">
				{#each socials as s}	
					<a href={s.link} class="opacity-60 hover:opacity-100 {$animate}">
						<img src={s.url} class="{$animate} w-6 h-6 hover:w-8 hover:h-8 altashadow" alt={s.name}>
					</a>
				{/each}
			</section>
		</div>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="w-full flex justify-center text-white opacity-60 h-16 items-center">
			<span class="text-sm">
				Copyright © 2023 Astralta. All rights reserved.
			</span>
		</div>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>