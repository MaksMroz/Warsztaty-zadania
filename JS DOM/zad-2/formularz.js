// let name = document.querySelector('[name="fname"]');
// let surname = document.querySelector('[name="lname"]');
// let submit = document.querySelector('[type="submit"]');

// submit.onclick = event => {
//     event.preventDefault();
//     console.log(name.value);
//     console.log(surname.value);
// }




let form = document.querySelector('form');

form.onsubmit = event => {
    event.preventDefault();
    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');

    console.log(fname.value, lname.value)
}