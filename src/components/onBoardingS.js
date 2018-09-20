import React from 'react';

import './onBoardingS.css';
export default function OnBoardingS(props) {

	function handleToggle(e) {
		e.preventDefault()
		e.currentTarget.classList.toggle("active");
		var content = e.currentTarget.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	}

	return (
		<div className="card" >
			<h4 className="title">Your First Practice Chart</h4>
			<ul>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Warm-ups</button>
					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">Stretch arms, neck, and shoulders for 2 minutes</textarea>
					</div>
				</div>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Bow exercises</button>

					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">10 times each: stirring, elevators, and windshield wipers. (Be careful of your thumb (bent out), pinkies (on tiptoes), and where you place them.)</textarea>
					</div>

				</div>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Scales - 1 oct F Major and 2 oct C Major</button>
					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">Sing one octave before playing, then sing inside your head to check your intonation</textarea>
					</div>
				</div>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Etude</button>
					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">pay attention to measures 16 - end, be sure to have independent fingers, even on the string crossings! ;-)</textarea>
					</div>
				</div>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Review Pieces</button>
					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">Choose 4 pieces from book 1 and 3 pieces from book 2. Remember to play through the entire book before repeating a review piece.</textarea>
					</div>
				</div>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">New Piece - Bach Double violin 2</button>
					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">Practice the recapitulation. Circle the differences between the recap and the exposition. Practice the circled areas slowly, then sew them to the measure before and after.  When the circles are sewn, only then play through one phrase at a time.</textarea>
					</div>
				</div>

				<div className="list">
					<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Fiddle / Jazz Tune </button>
					<div className="content">
						<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">Listen to one recording of your chosen tune. Outline or map the arrangement.</textarea>
					</div>
				</div>
			</ul>
		</div>

	);
}
