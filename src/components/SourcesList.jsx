import React from 'react';
import logo from '../assets/logo.png';
import external from '../assets/external-link.svg';

const SourcesList = () => {
	return (
		<footer id='sources-container'>
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
				<div id='sources-list'>
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
						<li>
							<a
								href='https://www.youtube.com/channel/UCrzNPOa9W4irtKHWn9QvA4A'
								title='BottleNetes YouTube Channel'
								aria-label='BottleNetes YouTube Channel'
							>
								YouTube
								<img
									src={external}
									id='external'
								/>
							</a>
						</li>
						<li>
							<a
								href='https://x.com/bottlenetes'
								title='BottleNetes X'
								aria-label='BottleNetes X'
							>
								Twitter
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
			</div>
			<div id='bottom-text'>
				Bottlenetes is an open-source product. Help make managing
				Kubernetes cluster easier!{' '}
				<a href='https://github.com/oslabs-beta/BottleNetes'>
					Contribute here.
				</a>
			</div>
		</footer>
	);
};

export default SourcesList;
