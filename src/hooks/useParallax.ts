export default function useParallax() {
  const startBlock = function () {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    let element = document.querySelector(".name") as HTMLElement;
    let block = document.querySelector(".books__wrapper") as HTMLElement;
    let myBooks = document.querySelector(".books__placement") as HTMLElement;
    let description = document.querySelector(
      ".books__wrapper .description p",
    ) as HTMLElement;
    if (!element || !block) {
      setTimeout(startBlock, 100);
      return;
    }
    const startSize = 44; // начальный размер элемента
    const endSize = 120; // конечный размер элемента
    const scrollStart = 0; // начальная позиция скролла
    const scrollEnd = 100; // конечная позиция скролла
    const scrollHeight = scrollEnd - scrollStart; // высота прокрутки
    const sizeDiff = endSize - startSize; // разница в размере
    document.addEventListener("scroll", () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = Math.min(scrollPosition / scrollHeight, 1);
      const newSize = startSize + sizeDiff * scrollPercent;
      if (element.style.fontSize == null) {
        element.style.fontSize = "44px";
        description.style.fontSize = "13px";
      }
      myBooks.style.width = String(newSize * 0.5 * newSize + "px");
      element.style.fontSize = newSize + "px";
      description.style.fontSize = newSize * 0.39 + "px";
      block.style.opacity = String(1 - (newSize - 44) / 70);
      element.style.transition = "height 0.3s ease-out"; //
    });
  };
  const selectedElement = function () {
    let element = document.querySelector(".hope__wrapper img") as HTMLElement;
    let block = document.querySelector(".hope__wrapper") as HTMLElement;
    if (!element || !block) {
      setTimeout(selectedElement, 100);
      return;
    }
    const startSize = 0; // начальный размер элемента
    const endSize = 512; // конечный размер элемента
    const scrollStart = 100; // начальная позиция скролла
    const scrollEnd = 200; // конечная позиция скролла
    const scrollHeight = scrollEnd - scrollStart; // высота прокрутки
    const sizeDiff = endSize - startSize; // разница в размере
    document.addEventListener("scroll", () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = Math.min(scrollPosition / scrollHeight, 1);
      const newSize = startSize + sizeDiff * scrollPercent - 300;
      if (newSize < 44) {
        element.style.width = "0px";
        element.style.height = "0px";
      } else {
        element.style.width = newSize + "px";
        element.style.height = newSize + "px";
      }
      block.style.opacity = String(
        Number(element.style.width.slice(0, 2)) / 60,
      );
      element.style.transition = "ease-out"; // добавление CSS-анимации
    });
  };
  return { startBlock, selectedElement };
}
