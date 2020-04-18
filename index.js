const form = document.getElementById('searchbar');

 form.innerHTML += `


 	<img src="julien_lepers.jpg" class="mt-3" style="height: 450px; width: 100%; object-fit: cover; border-top-right-radius: 15px; border-top-left-radius:15px">

        <form>

				<select class="form-control text-center" id="input" size="6">

					<optgroup label=">--Please choose an option--<">
				    <option value="10">10 questions</option>
				    <option value="20">20 questions</option>
				    <option value="30">30 questions</option>
				    <option value="40">40 questions</option>
				    <option value="50">50 questions -- GOD MODE</option>

				</select>

           		<button type="submit" id="submit_formulaire" class="btn btn-primary btn-lg btn-block mb-5">START</button>
        </form>
    `

const selectedValue = (e) => {
	const valeur = document.getElementById('input').value;
			form.setAttribute('hidden','')
			requestQuestions();	
	e.preventDefault();
}

document.getElementById('submit_formulaire').addEventListener("click", selectedValue);

anime({
  targets: 'div',
  translateX: {
    value: 0,
    duration: 800
  },
  rotate: {
    value: 360,
    duration: 1800,
    easing: 'easeInOutSine'
  },
  scale: {
    value: 1,
    duration: 1600,
    delay: 800,
    easing: 'easeInOutQuart'
  },
  delay: 250
});