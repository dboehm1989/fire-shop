import { useProductStore } from '@/stores/product';
import { IMedia } from '@/interface/product.i';

export function useLoadImages() {
  const $product = useProductStore();

  const gallery = computed(() => $product.getItem?.medias?.filter(media => media.targetAttr === 'gallery'));
  const galleryWithFullpath = computed(() => gallery.value?.map(setGalleryFullPath));

  const selectedIdx = ref(0);
  const isActive = (idx: number) => selectedIdx.value === idx;
  const selectedImg = computed(() => galleryWithFullpath.value?.find((_, idx) => isActive(idx))?.path);

  // such dynamic import is important for vite build process!
  function setGalleryFullPath(media: IMedia) {
    media.preview = new URL(`/src/assets/img/thumb_${media.path}`, import.meta.url).href;
    media.path = new URL(`/src/assets/img/${media.path}`, import.meta.url).href;
    return media;
  }

  return {
    isActive,
    selectedIdx,
    selectedImg,
    galleryWithFullpath,
  };
}
