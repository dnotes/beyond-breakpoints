<script lang="ts">

  let showJar = false;

  setTimeout(() => {
    showJar = true;
  }, 20000);

</script>

<a
  href="https://paypal.me/dnotesllc"
  target="_blank"
  rel="noopener noreferrer"
  class="tip-jar-link relative text-right
    flex items-center justify-end gap-3 px-6 py-1
    rounded-full bg-cyan-100 dark:bg-cyan-900
    text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800
    transition-all duration-200 text-xl
    ml:w-16 ml:medium:w-auto
    {showJar ? 'pl-20 ml:pl-6 ml:medium:pl-20' : ''}"
>
  {#if showJar}
    <span class="tip-icon absolute right-28 ml:right-1 ml:medium:right-30 {showJar ? 'opacity-100' : 'opacity-0'}" style="transition: opacity 2s ease-in-out">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" d="M17 14v4c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-4Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path><mask id="lineMdCoffeeHalfEmptyTwotoneLoop0"><path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"/></path></mask><rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeHalfEmptyTwotoneLoop0)"><animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"/><animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"/></rect></g></svg>
    </span>
  {:else}
    <span class="hidden ml:block ml:medium:hidden absolute left-1/2 -translate-x-1/2">
      tips
    </span>
  {/if}
  <span class="text-3xl whitespace-nowrap overflow-hidden ml:w-0 ml:medium:w-auto">tip jar!</span>
</a>
