import { useProductStore } from '@/stores/product';

export function useSliderOptions() {
  const $product = useProductStore();
  const items = computed(() => $product.getSortedRelatedPieces('max'));
  const counter = computed(() => (currentSlide.value + 1 > items.value.length ? 1 : currentSlide.value + 1));

  const currentSlide = ref(0);
  const settings = reactive({
    itemsToShow: 1,
    snapAlign: 'center',
  });

  const breakpoints = reactive({
    // 700px and up
    700: { itemsToShow: 3, snapAlign: 'center' },
    // 1024 and up
    1024: { itemsToShow: 4, snapAlign: 'start' },
  });

  return { items, counter, currentSlide, settings, breakpoints };
}
