import React from 'react';
import MediumLogo from '../assets/Medium-Wordmark-White.svg';
import ProductHuntLogo from '../assets/producthunt-logo.svg';

const Blog = () => (
	<section id='blog'>
		<h2 className='text-3xl font-bold'>Blogs & Articles</h2>
		<div id='blog-items'>
			<a
				href='https://medium.com/@bottlenetes/about'
				title='BottleNetes Medium Profile'
				aria-label='BottleNetes Medium Profile'
			>
				<button>
					<img
						src={MediumLogo}
						id='blog-logo'
					/>
					BottleNetes Medium Profile
				</button>
			</a>
			<a
				href='https://www.producthunt.com/posts/bottlenetes?bc=1'
				title='BottleNetes ProductHunt'
				aria-label='BottleNetes ProductHunt'
			>
				<button>
					<img
						src={ProductHuntLogo}
						id='blog-logo'
					/>
					BottleNetes Product Hunt
				</button>
			</a>
		</div>
	</section>
);

export default Blog;
