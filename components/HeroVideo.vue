<template>
  <div
    class="hero-video relative h-screen w-[100%] overflow-hidden bg-orange-200"
  >
    <div class="absolute w-full flex justify-center i top-[30%] z-10">
      <div class="flex flex-col items-center">
        <img class="pb-6 w-[500px]" src="assets\logos\leif_logo.png" alt="" />
        <!-- <h1 class="homemade-apple text-red-600">leif's</h1>  -->
        <h2 class="homemade-apple text-green-600">buon appetito</h2>
      </div>
    </div>
    <div class="absolute inset-0">
      <iframe
        class="absolute top-0 left-0 min-w-full min-h-full max-w-none"
        src="https://player.vimeo.com/video/943978256?badge=0&amp;autoplay=1&amp;background=1&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="leifs_pizza"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.hero-video iframe {
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
