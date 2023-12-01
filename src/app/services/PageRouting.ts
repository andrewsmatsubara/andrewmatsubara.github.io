export default function pageRouting(elementId: string): void {
  const { hash } = window.location;

  if (hash === `#${elementId}`) {
    scrollToElement(elementId);
  }
}

function scrollToElement(elementId: string): void {
  const element: HTMLElement | null = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};