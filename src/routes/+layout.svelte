<script lang="ts">
	import TipJar from './TipJar.svelte';
	import '../app.css';

	let { children } = $props();
</script>


<div class="flex flex-col tl:flex-row ml:flex-row w-screen h-screen max-w-screen max-h-screen overflow-hidden bg-stone-50 dark:bg-stone-950">

  <main class="flex-scroll flex-grow flex-col p-5 gap-5 items-center
    desktop:wide:flex-wrap mobile:ultra:flex-wrap tablet:ultra:flex-wrap ultra:px-[calc(50vw-900px)]">

		{@render children()}

	</main>

  <footer class="flex-container flex-shrink-0 items-center h-20 px-5 py-2 bg-stone-300 dark:bg-stone-800
    ml:flex-col ml:h-full ml:px-2 ml:w-20 ml:medium:w-56
    tl:flex-col tl:h-full tl:px-5 tl:w-56
    desktop:!w-full
  ">

    <div class="chicklets flex-container flex-grow flex-wrap text-xs gap-2 items-center
      ml:flex-col ml:items-end ml:w-full
      tl:flex-col tl:items-end tl:w-full
    ">
      <h4 class="dark:text-stone-300 my-5">Formats:</h4>
      <a title="phone" class="mobile:!block">mobile</a>
      <a title="tablet" class="tablet:!block">tablet</a>
      <a title="desktop" class="desktop:!block">desktop</a>
      <a title="wide" class="medium:!block">medium</a>
      <a title="wide" class="wide:!block">wide</a>
      <a title="ultra" class="ultra:!block">ultra</a>
      <a title="mobile portrait" class="mp:!block">mp</a>
      <a title="mobile landscape" class="ml:!block">ml</a>
      <a title="tablet portrait" class="tp:!block">tp</a>
      <a title="tablet landscape" class="tl:!block">tl</a>
    </div>

    <TipJar />

  </footer>

</div>

<style lang="postcss">
  @reference 'tailwindcss';
  .chicklets a {
    @apply px-2 py-1 cursor-pointer hidden items-center text-center leading-none border border-transparent rounded-sm
    bg-stone-200 dark:bg-stone-700 text-cyan-500;
  }
</style>
