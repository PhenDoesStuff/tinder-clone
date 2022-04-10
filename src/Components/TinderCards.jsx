import React, { useState, useEffect } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import database from '../firebase';

const TinderCards = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		database
			.collection('people')
			.onSnapshot(snapshot =>
				setPeople(
					snapshot.docs.map(doc =>
						doc.data()
					)
				)
			);
	}, []);

	return (
		<div className='tinderCards'>
			<h1>Tinder Cards</h1>

			<div className='tinderCards__cardContainer'>
				{people.map(person => (
					<TinderCard
						className='swipe'
						key={person.name}
						preventSwipe={['up', 'down']}>
						<div
							className='card'
							style={{
								backgroundImage: `url(${person.url})`,
							}}>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default TinderCards;

