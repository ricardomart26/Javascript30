const panels = document.querySelectorAll('.panel');
console.log(panels);

function toggleOpen()
{
    console.log("toggleOpen");
    this.classList.toggle('open');
}

function togglefinish(e)
{
    console.log("toggleFinish");
    if (e.propertyName.includes('flex'))
        this.classList.toggle('open-active');
}

panels.forEach((panel) => {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', togglefinish);
})
