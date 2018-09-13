import React from 'react';


import './boardT.css';

import Edit from './edit.js';
import TitleList from './title-listT.js';
import ClassList from './class-list.js';

export default function BoardT(props) {

	return (
		<section className="dash">

			<div className="edit">
				<Edit />
			</div>

			<div className="flex" >

				<TitleList className="titleList" />

				<ClassList className="classList" />
			</div>

		</section>
	);

};


