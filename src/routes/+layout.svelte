<script>
  import "../app.css";
</script>

<div class="flex flex-row items-center bg-black border-b border-b-gray-600 p-4">
  <img src="/favicon.png" alt="nav-icon" height="32px" width="32px">
  <div class="mx-4">
    <a href="/" class="text-2xl font-mono text-white pr-16">Tweet Enhancer</a>
    <a href="/about" class="button text-white">About</a>
  </div>
</div>

<slot />