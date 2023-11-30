<script>
  import "../app.css";
</script>

<head>
  <meta name="description" content={"is a powerful tool crafted for to refine and enhance your tweets"} />
  <meta property="og:title" content={"Tweet Enhancer"} />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={"is a powerful tool crafted for to refine and enhance your tweets"}/>
  <meta name="theme-color" content="#1da0f1" />
  <meta name="robots" content="all" />
  <title>Tweet Enhancer</title>
</head>

<div class="flex flex-row items-center bg-black border-b border-b-gray-600 p-4">
  <img src="/favicon.png" alt="nav-icon" height="32px" width="32px">
  <div class="mx-4 w-full">
    <a href="/" class="text-xl md:text-2xl font-mono text-white pr-16">Tweet Enhancer</a>
    <!-- <a href="/about" class="button text-white">About</a> -->
  </div>
</div>

<slot />