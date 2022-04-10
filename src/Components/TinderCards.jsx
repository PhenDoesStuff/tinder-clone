import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
	const [people, setPeople] = useState([
		{
			name: 'Richard Hendricks',
			url: 'https://d1qxviojg2h5lt.cloudfront.net/images/01DVE8XQTBZY43FEMZQ3Q97XGT/middleditch.valley570.png',
		},
		{
			name: 'Erlach Bachman',
			url: 'https://hips.hearstapps.com/esq.h-cdn.co/assets/17/22/1496427861-erlich-1920.jpg',
		},
	]);

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

