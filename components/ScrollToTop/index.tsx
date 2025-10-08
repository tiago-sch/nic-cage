"use client"

const ScrollToTop = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button onClick={scrollToTop} className="btn btn-sm btn-neutral rounded fixed right-2 bottom-2">
      ⬆
    </button>
  )
}

export default ScrollToTop;
