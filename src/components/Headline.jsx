import React from 'react';
import Subtitle from './Subtitle';
import InstallLinkButton from './InstallLinkButton';

const Headline = () => (
	<div
		className='headline-container mx-auto flex flex-col items-center justify-center text-center bg-blue-600 text-white rounded-lg shadow-lg'
		style={{
			maxWidth: '80%',
			padding: '3rem',
			marginTop: '5rem',
		}}
	>
		{/* Subtitle with Video */}
		<Subtitle />

		{/* Install Link Button */}
		<InstallLinkButton />
	</div>
);

export default Headline;
