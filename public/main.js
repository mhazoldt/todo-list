function convertCheckboxData() {
    let formCheckboxes = document.querySelectorAll("#checkboxForm input[type='checkbox']")
    let formHidden = document.querySelector("#checkboxForm input[type='hidden']")
    console.log(formHidden)
    
    formCheckboxes.forEach((checkbox, idx) => {
        console.log("forEach - " + checkbox.value + " - " + idx)
        if( idx === (formCheckboxes.length - 1) ){
            formHidden.value += checkbox.checked.toString()
        } else {
            formHidden.value += checkbox.checked.toString() + ","
        }
        

    })
    
    document.querySelector("#checkboxForm").submit()

}

