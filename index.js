const form = document.getElementById('searchbar');

 form.innerHTML += `

        <form>

				<select class="col-12 mt-5 mb-3 form-control" id="input" size="5">

					<optgroup label=">--Please choose an option--<">
				    <option value="10">10</option>
				    <option value="20">20</option>
				    <option value="30">30</option>
				    <option value="40">40</option>
				    <option value="50">50</option>

				</select>

           		<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">Submit</button>
        </form>
    `

const selectedValue = (e) => {
	const valeur = document.getElementById('input').value;
			form.setAttribute('hidden','')
			requestQuestions();	
	e.preventDefault();
}

document.getElementById('submit_formulaire').addEventListener("click", selectedValue);



const animeObject = window.anime({
  targets: '.card',
  translateX: {
    value: 250,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 2,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250 // All properties except 'scale' inherit 250ms delay
});