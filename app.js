const inputs = document.querySelectorAll('.controls input');

inputs.forEach( input => {
    input.addEventListener('change', e => handleChange(e.target));
    input.addEventListener('mousemove', e => handleChange(e.target));
})

let handleChange = (input) => {
    const root = document.querySelector(':root');
    let name = input.getAttribute('name');
    let suffix = input.getAttribute('data-suffix') || '';
    root.style.setProperty(`--${name}`, `${input.value}${suffix}`);
}

