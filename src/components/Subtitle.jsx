import React, { useRef, useState } from 'react';
import openingVideo from '../assets/opening.mp4';

const Subtitle = () => {
	const videoRef = useRef(null);
	const [loopStart, setLoopStart] = useState(null);
	const [isLooping, setIsLooping] = useState(false);

	const handleTimeUpdate = () => {
		const video = videoRef.current;

		if (video) {
			const bufferTime = 0.1; // Slight overlap for smooth transition

			if (isLooping && video.currentTime >= video.duration - bufferTime) {
				// Adjust slightly before loopStart for seamless transition
				video.currentTime = loopStart + bufferTime;
				video.play();
			}

			if (!isLooping && video.currentTime >= video.duration) {
				const loopStartPoint = video.duration - 9; // Set loop to last 9 seconds
				setLoopStart(loopStartPoint);
				setIsLooping(true);
				video.currentTime = loopStartPoint + bufferTime;
				video.play();
			}
		}
	};

	return (
		<div className='subtitle-header text-slate-50'>
			<video
				ref={videoRef}
				className='subtitle-video'
				autoPlay
				muted
				preload='auto'
				onTimeUpdate={handleTimeUpdate}
			>
				<source
					src={openingVideo}
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Subtitle;
