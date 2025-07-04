import React from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import '../pages/investigationBook.css';

const navItems = [
	{ label: 'Matching', path: 'matching' },
	{ label: 'Measuring', path: 'measuring' },
	{ label: 'Thermometer', path: 'thermometer' },
	{ label: 'Radar', path: 'radar' },
	{ label: 'Tentacles', path: 'tentacles' },
	{ label: 'Photos', path: 'photos' },
];

export default function InvestigationNav() {
	const location = useLocation();
	const history = useHistory();

	const handleReset = () => {
		const confirm = window.confirm(
			'Are you sure you want to reset all investigation notes? This will delete all your progress and cannot be undone.'
		);
		if (!confirm) return;

		localStorage.removeItem('photosNotes');
		localStorage.removeItem('matchingNotes');
		localStorage.removeItem('measuringNotes');
		localStorage.removeItem('thermometerNotes');
		localStorage.removeItem('radarNotes');
		localStorage.removeItem('tentaclesNotes');

		window.location.reload();
	};

	return (
		<div className='investigation-nav'>
			<div className='investigation-nav-tabs'>
				{navItems.map((item) => (
					<button
						key={item.path}
						className={`nav-tab ${
							location.pathname.includes(item.path) ? 'active' : ''
						}`}
						onClick={() => history.push(item.path)}
					>
						{item.label}
					</button>
				))}
			</div>
			<div className='investigation-nav-divider' />
			<button className='nav-reset' onClick={handleReset}>
				Reset All
			</button>
		</div>
	);
}
