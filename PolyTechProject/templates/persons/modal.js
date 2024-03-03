const titles = document.getElementsByClassName('person__title');
const titlesArray = Array.from(titles);
const modalWindow = document.querySelector('.describe')
console.log(titles);

titlesArray.forEach(element => {
    element.addEventListener('mouseover', openModal)
    element.addEventListener('mouseout', closeModal)
});

function openModal(){
    console.log("true");
    modalWindow.style.display="block";
}

function closeModal(){;
    modalWindow.style.display="none";
}