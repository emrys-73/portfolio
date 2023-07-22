<script>
    import { Button } from ".";
</script>

<div class="my-4 bg-black backdrop-blur-md bg-opacity-30 drop-shadow-xl text-true-white p-4 px-6 rounded-2xl">
    <!-- <div class="col-span1 p-2 max-h-[20vh] max-w-[30vh] mr-10 h-full items-center flex justify-center">
        <slot name="img"/>
    </div> -->
    <div class=" max-w-[30vh]">
        <h3 class="text-white text-left font-bold text-2xl py-2">
            <slot name="title"/>
        </h3>
        <h4 class=" text-opacity-70 text-white text-left text-sm">
            <slot name="subtitle"/>
        </h4>
        
        <div class=" text-left">

            <slot name="duration"/>
        </div>
        
        <slot />
    </div>
</div>