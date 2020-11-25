const width = window.outerWidth

export function getDim() {

  let screenDim;

  if (width < 576) {
    screenDim = 'xs'
  } else if (width >= 576 && width < 768) {
    screenDim = 'sm'
  } else if (width >= 568 && width < 992) {
    screenDim = 'md'
  } else if (width >= 992 && width < 1200) {
    screenDim = 'lg'
  } else {
    screenDim = 'xl'
  }

  return screenDim
}