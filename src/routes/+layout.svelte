<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import 'iconify-icon'
	import { Button } from '$lib/components';
	
	
</script>


<AppShell class="bg-[url('/home_2.png')] bg-image text-white">
	<!-- (header) -->
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class=" backdrop-blur-sm absolute top-0 z-50 w-full">
			<svelte:fragment slot="lead">
				
				<img src="/favicon.png" alt="logo" class="max-h-8"/>
			</svelte:fragment>
				<!-- <div class="text-center text-2xl xl:text-3xl text-true-white font-bold uppercase">
					<a href="/story">
						<button class="btn bg-black bg-opacity-20 p-4 backdrop-blur-xl hover:bg-opacity-20 hover:bg-gray-300 rounded-full text-true-white font-semibold btn-sm md:text-md md:h-[2rem] border-none normal-case drop-shadow-2xl">
							the Story
						</button>
					</a>
					<a href="/chat">
						<button class="btn bg-black bg-opacity-20 p-4 backdrop-blur-xl hover:bg-opacity-20 hover:bg-gray-300 rounded-full text-true-white font-semibold btn-sm md:text-md md:h-[2rem] border-none normal-case drop-shadow-2xl">
							<iconify-icon icon="mi:message"></iconify-icon>
						</button>
					</a>
				</div> -->
			<svelte:fragment slot="trail">
				
	
				<div class="flex-row flex">
					<a href="mailto:montoya@astralta.com">
						<div class="">
							<div class="hover:-translate-y-0.5 transition ease-in-out md:mt-0.5">
								<Button>
									Get in touch
								</Button>
							</div>
						</div>
					</a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	
	<slot />
	
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div class="w-full flex justify-center text-white backdrop-blur-lg h-16 items-center">
			<span class="text-sm">
				Copyright © 2023 Astralta. All rights reserved.
			</span>
		</div>
	</svelte:fragment>
	<!-- (footer) -->
</AppShell>