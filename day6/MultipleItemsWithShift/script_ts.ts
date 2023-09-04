



const checkboxList: NodeListOf<HTMLInputElement> = document.querySelectorAll('.inbox input[type="checkbox"]');

let firstChecked: HTMLInputElement;
let lastChecked: HTMLInputElement; 


function handleCheckboxClicked(e: any) {

    let inBetween = false;

    if (e.shiftKey || this.checked) {
        if (!firstChecked)
        {
            firstChecked = this;
            return ;
        }
        lastChecked = this;
        checkboxList.forEach((checkbox) => {
            if (checkbox === firstChecked || checkbox === lastChecked)
            {
                checkbox.checked = true;
                inBetween = !inBetween;
            }
            if (inBetween)
                checkbox.checked = true;
        });
    }

}

checkboxList.forEach((checkbox) => checkbox.addEventListener('click', handleCheckboxClicked))
