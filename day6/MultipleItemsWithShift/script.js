
let firstItemSelected;
let lastItemSelected;

const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheckbox(e)
{
    let firstChecked = false;

    if (this.checked && e.shiftKey)
    {
        if (!firstItemSelected)
        {
            firstItemSelected = this;
            return ;
        }
        lastItemSelected = this;
        checkboxs.forEach((checkbox) => {
            if (firstChecked)
                checkbox.checked = true;
            if (checkbox === firstItemSelected || checkbox === lastItemSelected)
            {
                firstChecked = !firstChecked;
                checkbox.checked = true;
            }
        });
        firstItemSelected = null;
        lastItemSelected = null;
    }
}


checkboxs.forEach((checkbox) => checkbox.addEventListener('click', handleCheckbox));

