<template>
  <div class="hero-slideshow">
    <div class="slides-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="slide in slides" :key="slide.id" class="slide">
        <img :src="slide.src" :alt="slide.alt">
      </div>
    </div>
    <button @click="prevSlide" class="nav-button prev" aria-label="前のスライドへ">&#10094;</button>
    <button @click="nextSlide" class="nav-button next" aria-label="次のスライドへ">&#10095;</button>
    <div class="dots-container">
      <span
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentIndex: 0,
      slides: [
        { id: 1, src: require('@/assets/slide1.webp'), alt: 'スライド1' },
        { id: 2, src: require('@/assets/slide2.webp'), alt: 'スライド2' },
        { id: 3, src: require('@/assets/slide3.webp'), alt: 'スライド3' },
      ],
      timer: null,
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.resetAutoPlay();
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.resetAutoPlay();
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.resetAutoPlay();
    },
    startAutoPlay() {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoPlay() {
      clearInterval(this.timer);
    },
    resetAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    },
  },
};
</script>

<style scoped>
.hero-slideshow {
  position: relative;
  width: 100%;
  height: 60vh;
  max-height: 37.5rem;
  overflow: hidden;
  background-color: #a7c5a8;
}
.slides-container {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}
.slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}
.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.prev { left: 1rem; }
.next { right: 1rem; }
.dots-container {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}
.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}
.dot.active {
  background-color: white;
}
@media (max-width: 768px) {
  .hero-slideshow { height: 40vh; }
}
</style>
