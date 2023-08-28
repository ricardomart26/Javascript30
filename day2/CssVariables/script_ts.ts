
function handleUpdates(): void
{
    const suffix: string = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

const input: NodeListOf<Element> = document.querySelectorAll('.controls input') as NodeListOf<Element>;

input.forEach((input: Element) => {
    input.addEventListener('change', handleUpdates);
    input.addEventListener('mouseover', handleUpdates);
});