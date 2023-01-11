export function useSliderSettings() {
  const settings = reactive({
    itemsToShow: 1,
    snapAlign: 'center',
  });

  const breakpoints = reactive({
    // 700px and up
    700: {
      itemsToShow: 3.5,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  });

  return { settings, breakpoints };
}