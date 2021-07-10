import { ScrollToTopButton } from './style'

const ScrollToTop = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <ScrollToTopButton onClick={scrollToTop}>
      ⬆
    </ScrollToTopButton>
  )
}

export default ScrollToTop;
