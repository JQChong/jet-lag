import React from 'react';
import Layout from '@theme/Layout';
import InvestigationForm from '../../components/investigationForm';
import InvestigationNav from '../../components/investigationNav';

export default function Radar() {
	return (
		<Layout title='4. Radar'>
			<InvestigationNav />
			<InvestigationForm
				title='4. RADAR'
				chips={['DRAW 2, PICK 1', '5 MINUTES']}
				prompt='Are you within Distance of me?'
				storageKey='radarNotes'
				fields={{
					'All Games': [
						'0.5 km',
						'1 km',
						'2 km',
						'5 km',
						'10 km',
						'20 km',
						'50 km',
						'100 km',
						'200 km',
						'CHOOSE',
					],
				}}
			/>
		</Layout>
	);
}
