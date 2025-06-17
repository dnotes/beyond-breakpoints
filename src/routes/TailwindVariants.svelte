<script lang="ts">

  let cssfile = import.meta.glob('../app.css', { as: 'raw', eager: true });
  let variants = Object.values(cssfile)[0].replace(/^[\s\S]+?@custom-variant/dm, '@custom-variant').replace(/@layer[\s\S]+/, '');

</script>

<pre class="overflow-y-auto scrollbar
  desktop:wide:max-h-[calc(100vh-200px)]
  mobile:ultra:max-h-[calc(100vh-120px)]
  tablet:ultra:max-h-[calc(100vh-120px)]
"><code class="mp:!text-xs">{variants}</code></pre>
