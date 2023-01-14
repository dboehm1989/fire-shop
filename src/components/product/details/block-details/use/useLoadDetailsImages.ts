import { IProductDetails, IProductDetailsData } from '@/interface/product.i';
import { useProductStore } from '@/stores/product';

export function useLoadDetailsImages(props: { type: string; category: string; productDetails?: IProductDetails }) {
  const $product = useProductStore();

  const detailImg = computed(() => $product.getItem?.medias?.find(media => media.targetAttr == props.type)?.path);

  // such dynamic import is important for vite build process!
  function setIconsFullPath(el: IProductDetailsData) {
    const { title, text, sortOrder } = el;
    const path = new URL(`/src/assets/icon/icon-${sortOrder}.png`, import.meta.url).href;
    return { title, text, path };
  }

  return {
    detailImgSrc: computed(() => new URL(`/src/assets/img/${detailImg.value}`, import.meta.url).href),
    detailsIconsWithFullPath: computed(() => props.productDetails?.data.map(setIconsFullPath)),
  };
}
