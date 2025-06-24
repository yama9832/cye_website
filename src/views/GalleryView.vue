<template>
  <main class="page-content-wrapper">
    <AppBreadcrumb />

    <div class="gallery-container">
      <header class="page-header">
        <h1>建築ギャラリー</h1>
        <p class="header-description">
          やんまー帝国連邦の都市景観や、メンバーが作り上げた建築物をご覧ください。
        </p>
      </header>

      <div class="gallery-grid">
        <a v-for="item in images" :key="item.id" class="gallery-item" @click.prevent="openModal(item)" href="#">
          <div class="gallery-image-container">
            <img :src="getImageUrl(item.files[0])" :alt="item.alt" loading="lazy" @error="imageLoadError">
            <div class="gallery-item-overlay">
              <div class="overlay-content">
                <span class="material-icons">zoom_in</span>
                <!-- [変更] authors配列を結合して表示 -->
                <p>作者: {{ item.authors.join(', ') }}</p>
              </div>
            </div>
            <div v-if="item.files.length > 1" class="multiple-images-indicator">
              <span class="material-icons">collections</span>
            </div>
          </div>
          <div class="gallery-caption">
            <p>{{ item.alt }}</p>
          </div>
        </a>
      </div>
    </div>

    <!-- Modal for displaying full image -->
    <div v-if="selectedItem" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-image-container">
          <button v-if="selectedItem.files.length > 1" class="modal-nav prev" @click.stop="prevImage">
            <span class="material-icons">arrow_back_ios</span>
          </button>
          
          <img :src="getImageUrl(selectedItem.files[currentImageIndex])" :alt="selectedItem.alt">
          
          <button v-if="selectedItem.files.length > 1" class="modal-nav next" @click.stop="nextImage">
            <span class="material-icons">arrow_forward_ios</span>
          </button>
        </div>
        
        <div v-if="selectedItem.files.length > 1" class="modal-thumbnails">
          <img 
            v-for="(file, index) in selectedItem.files" 
            :key="index"
            :src="getImageUrl(file)"
            :class="{ active: index === currentImageIndex }"
            @click.stop="currentImageIndex = index"
            :alt="`${selectedItem.alt} ${index + 1}`"
          >
        </div>
        
        <button @click="closeModal" class="modal-close-button" aria-label="閉じる">
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>

  </main>
</template>

<script>
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';

export default {
  name: 'GalleryView',
  components: {
    AppBreadcrumb
  },
  data() {
    return {
      selectedItem: null,
      currentImageIndex: 0,
      // [変更] authorプロパティを 'authors' 配列に変更
      images: [
        { 
          id: 1, 
          files: [
            'mizusaki_ichisyou_1.webp', 
            'mizusaki_ichisyou_2.webp', 
            'mizusaki_ichisyou_3.webp',
            'mizusaki_ichisyou_4.webp',
          ], 
          alt: '水咲市立豊出第一小学校',
          authors: ['共同建築'] 
        },
        { 
          id: 2, 
          files: [
            'mizusaki_ichichuu_1.webp', 
            'mizusaki_ichichuu_2.webp', 
            'mizusaki_ichichuu_3.webp', 
          ], 
          alt: '水咲市立豊出第一中学校',
          authors: ['共同建築'] 
        },
      ]
    };
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
      this.currentImageIndex = 0;
    },
    closeModal() {
      this.selectedItem = null;
    },
    prevImage() {
      const totalImages = this.selectedItem.files.length;
      this.currentImageIndex = (this.currentImageIndex - 1 + totalImages) % totalImages;
    },
    nextImage() {
      const totalImages = this.selectedItem.files.length;
      this.currentImageIndex = (this.currentImageIndex + 1) % totalImages;
    },
    getImageUrl(fileName) {
      if (!fileName) {
        return 'https://placehold.co/640x360/e0e0e0/6c757d?text=File+Not+Found';
      }
      try {
        return require(`@/assets/gallery/${fileName}`);
      } catch (e) {
        console.error(`Image not found in @/assets/gallery/${fileName}`);
        return 'https://placehold.co/640x360/e0e0e0/6c757d?text=Image+Missing';
      }
    },
    imageLoadError(event) {
      event.target.src = 'https://placehold.co/640x360/e0e0e0/6c757d?text=Load+Error';
    }
  }
}
</script>

<style scoped>
/* Page Header */
.page-header {
  border-bottom: 2px solid #008037;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}
.page-header h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin: 0 0 0.5rem 0;
}
.header-description {
  font-size: 1.1rem;
  color: #6c757d;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.gallery-item {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.gallery-image-container {
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: #e9ecef;
  overflow: hidden;
}
.gallery-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.gallery-item:hover .gallery-image-container img {
  transform: scale(1.1);
}

.gallery-caption {
  padding: 0.75rem 1rem;
  background-color: #fff;
  text-align: center;
}
.gallery-caption p {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #343a40;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gallery-item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gallery-item:hover .gallery-item-overlay {
  opacity: 1;
}
.overlay-content {
  text-align: center;
  padding: 1rem;
}
.overlay-content .material-icons {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.overlay-content p {
  margin: 0;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.multiple-images-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 4px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.multiple-images-indicator .material-icons {
  font-size: 18px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.modal-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content img {
  max-width: 90vw;
  max-height: 75vh;
  display: block;
  border-radius: 8px;
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
}
.modal-nav:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.modal-nav.prev {
  left: 10px;
}
.modal-nav.next {
  right: 10px;
}
.modal-nav .material-icons {
  font-size: 24px;
}

.modal-thumbnails {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.modal-thumbnails img {
  width: 80px;
  height: 45px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.2s;
}
.modal-thumbnails img.active {
  border-color: #fff;
}

.modal-close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}
.modal-close-button:hover {
  transform: scale(1.1);
}
.modal-close-button .material-icons {
  color: #333;
}
</style>
