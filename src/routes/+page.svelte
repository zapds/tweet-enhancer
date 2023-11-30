<script>
  import MultiSelect from 'svelte-multiselect'

  let tweet;
  let selected = [];
  let inclEmoji = false;
  let inclHashtags = false;
  let loading = false;
  let promise;

  const moodsArray = [
  { value: 'inspirational', label: '🌟 Inspirational' },
  { value: 'humorous', label: '😄 Humorous' },
  { value: 'serious', label: '😐 Serious' },
  { value: 'formal', label: '👔 Formal' },
  { value: 'casual', label: '😎 Casual' },
  { value: 'excited', label: '🎉 Excited' },
  { value: 'thoughtful', label: '🤔 Thoughtful' },
  { value: 'playful', label: '🤪 Playful' },
  { value: 'sarcastic', label: '😏 Sarcastic' },
  { value: 'motivational', label: '💪 Motivational' },
  { value: 'reflective', label: '🤔 Reflective' },
  { value: 'optimistic', label: '😊 Optimistic' },
  { value: 'candid', label: '😃 Candid' },
  { value: 'informative', label: '📚 Informative' },
  { value: 'witty', label: '😜 Witty' },
  { value: 'enthusiastic', label: '🔥 Enthusiastic' },
  { value: 'mysterious', label: '🕵️ Mysterious' },
  { value: 'grateful', label: '🙏 Grateful' },
  { value: 'assertive', label: '💼 Assertive' },
  { value: 'relaxed', label: '😌 Relaxed' }
  ];
  
  async function enhance() {
    loading = true;

    const resp = await fetch('/enhance', {
      method: "POST",
      body: JSON.stringify({
        tweet: tweet,
        mood: selected,
        inclEmoji: inclEmoji,
        inclHashtag: inclHashtags}),
			headers: {
				'content-type': 'application/json'
      },
      });

    const data = await resp.json();
    loading = false;
    const elem = document.getElementById("result");
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    return data;

  }

  function handleClick() {
    promise = enhance();
  }

</script>



<div class="flex flex-col h-screen items-start py-4 px-4 md:px-32 gap-4">
    <h1 class="text-2xl text-white">Enhance your tweet!</h1>
    <textarea class="px-4 py-2 w-[100%] h-[50%] focus:outline-none focus:border focus:border-blue-400 rounded-md bg-accent border placeholder:text-gray-500 text-white" type="text" bind:value={tweet} placeholder="Tweet to improve..." name="tweet" id="tweet"/>
    <MultiSelect bind:selected name="mood" allowUserOptions options={moodsArray} id="mood" placeholder="Select mood" --sms-placeholder-color="text-grey-500" --sms-text-color="white" ulOptionsClass="text-accent" liSelectedClass="border border-white rounded-md" inputClass="focus:outline-none rounded-md bg-white border placeholder:text-gray-500 text-white">
    </MultiSelect>
    <div class="inline-flex gap-2">
    <input name="inclEmoji" id="inclEmoji" bind:checked={inclEmoji} type="checkbox" title="include emojis">
    <label for="inclEmoji" class="text-white">Include emojis</label>
    </div>
    <div class="inline-flex gap-2">
    <input name="inclHashtag" id="inclHashtag" bind:checked={inclHashtags} type="checkbox" title="include hashtags">
    <label for="inclHashtag" class="text-white">Add hashtags</label>
    </div>

    <button class="bg-white text-accent px-4 py-2 rounded-md disabled:bg-black disabled:text-white inline-flex gap-2" disabled={(loading)} on:click={handleClick}>
    {#if loading}
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; display: block;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="84" cy="50" r="10" fill="#ffffff">
    <animate attributeName="r" repeatCount="indefinite" dur="0.5102040816326531s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
    <animate attributeName="fill" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#ffffff;#ffffff;#ffffff;#ffffff;#ffffff" begin="0s"></animate>
</circle><circle cx="16" cy="50" r="10" fill="#ffffff">
  <animate attributeName="r" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
  <animate attributeName="cx" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
</circle><circle cx="50" cy="50" r="10" fill="#ffffff">
  <animate attributeName="r" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5102040816326531s"></animate>
  <animate attributeName="cx" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5102040816326531s"></animate>
</circle><circle cx="84" cy="50" r="10" fill="#ffffff">
  <animate attributeName="r" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.0204081632653061s"></animate>
  <animate attributeName="cx" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.0204081632653061s"></animate>
</circle><circle cx="16" cy="50" r="10" fill="#ffffff">
  <animate attributeName="r" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.530612244897959s"></animate>
  <animate attributeName="cx" repeatCount="indefinite" dur="2.0408163265306123s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.530612244897959s"></animate>
</circle>
</svg>
    {/if}
    <span>Enhance</span></button>
    
</div>

<div class="flex flex-col" id="result">
{#if promise != null}
  {#await promise then data}
    <p class="text-white text-center">{data.result}</p>
  {:catch error}
    <p class="text-white">error {error.message}</p>
  {/await}
{/if}
</div>