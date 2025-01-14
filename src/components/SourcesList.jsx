import React from 'react';
import logo from '../assets/logo.png';
import external from '../assets/external-link.svg';

const SourcesList = () => {
	return (
		<div id='sources-container'>
			<div
				id='sources'
				className='bg-blue-900'
			>
				<a href='https://www.bottlenetes.com/'>
					<img
						src={logo}
						id='logo'
					/>
				</a>
				<ul id='community'>
					Community
					<li>
						<a
							href='https://www.linkedin.com/company/bottlenetes/posts/?feedView=all'
							title='BottleNetes LinkedIn'
							aria-label='BottleNetes LinkedIn'
						>
							LinkedIn
							<img
								src={external}
								id='external'
							/>
						</a>
					</li>
				</ul>
				<ul id='more-info'>
					More About Us
					<li>
						<a>
							ProductHunt
							<img
								src={external}
								id='external'
							/>
						</a>
					</li>
					<li>
						<a>
							Medium
							<img
								src={external}
								id='external'
							/>
						</a>
					</li>
				</ul>
			</div>
			<div id='bottom-text'>
				Uncorking Kubernetes Bottlenecks & Insights, One Pod at a Time
			</div>
		</div>
	);
};

export default SourcesList;
