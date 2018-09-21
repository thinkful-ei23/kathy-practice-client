import React from 'react';

import './add-card.css';
import './add-list.css';
import './card.css';
import './class-list.css';
import './classManager.css';
import './edit.css';
import './list.css';
import './nav-bar.css';
import './onBoardingT.css';
import './title-listT.css';

export default function OnBoardingT(props) {

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
		<main id="teacherOnBoard">
			<section className="onBoard2">
				<div className="card">
					<h3 className="title">Sample of the first row of a chart</h3>

					<ul className="cardT">
						<div className="list">
							<button aria-label="click to expand and collapse row" onClick={handleToggle} className="collapsible">Your assignment here</button>
							<div className="content">
								<textarea aria-label="add additional assignment to row" className="edit" type="text" rows="4">This area is for extended explanation of your assignment</textarea>
							</div>
						</div>
					</ul>



				</div>
				<form className="addList" >

					<label
						id="label-addList"
						htmlFor="input-addList">Row Title:</label>

					<p>Type in new skill or topic</p>

					<input id="input-addList"
						className="input-addList" type="text" />

					<div className="row-addList">
						<button
							className="btn btn-addList"
							type="button"
							onClick={() => this.setEditing(false)}
							aria-label="click to add another row">Add row</button>

						<button
							className="btn"
							type="button"
							onClick={() => this.setEditing(false)}
							aria-label="click to save the paractice chart">Save practice chart</button>
					</div>
				</form>

			</section>

			<section className="onBoard1">
				<form className="addCard" >

					<label
						id="label-addCard"
						htmlFor="titleAddCard">Title:</label>

					<p>Name your chart before you click to add it</p>

					<input id="titleAddCard"
						className="input-AddCard "
						type="text" />

					<button

						className="btn btn-addCard"
						type="button"
						aria-label="click to add another practice chart">Add chart</button>
				</form>
				<div className="after">These are the directions for using this component of the Practice Partner App</div>
			</section>
			{/* //=========== */}

			<section className="onBoard3">
				<div className="card" >
					<h3 className="title">Sample Practice Chart</h3>
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
			</section>
			{/* //=========== */}
			<section className="classManager onBoard4">

				<div id="managerWrapper">

					<form id="classManager">
						<div id="classList">
							<h3 className="classTitle">Student List</h3>
							<ul className="classRoom">
								<li className="student">Dakota</li>
								<li className="student">Amanda</li>
								<li className="student">Kate</li>
								<li className="student">Jason</li>
								<li className="student">Ray</li>
								<li className="student">Gracie</li>
								<li className="student">Beau</li>
								<li className="student">Shelby</li>
							</ul>
						</div>

						<div id="titleList">
							<h3 className="title">Saved Practice Charts</h3>
							<ul>
								<li className="sub-title">Book 1</li>
								<li className="sub-title">Book 2</li>
								<li className="sub-title">EE2000 pages 16 - 20</li>
								<li className="sub-title">Year 1.1</li>
								<li className="sub-title">Year 1.2</li>
							</ul>
						</div>
					</form>

					<div className="btn-wrapper">
						<button
							id="managerBtn"
							type="submit"
							aria-label="click to assign student to practice chart"
							onSubmit={() => this.save()}>
							Assign </button >
					</div >
				</div>
			</section>
			{/* //=========== */}


		</main >
	);
};
