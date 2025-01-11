import React from 'react';

const Dependencies = () => {
	return (
		<div id='dependencies'>
			<p>Tools and Framework that built BottleNetes</p>
			<div id='cards'>
				<p>Programming Languages</p>
				<div
					id='lang'
					className=' brightness-110 transition'
				>
					<button id='1'>JavaScript</button>
					<button id='2'>TypeScript</button>
				</div>
				<p>Technologies and Frameworks</p>
				<div id='tech'>
					<button id='1'>React</button>
					<button id='2'>Node</button>
					<button id='3'>Express</button>
					<button id='4'>Vite</button>
					<button id='5'>OpenAI</button>
					<button id='6'>SQL</button>
					<button id='7'>PostgreSQL</button>
					<button id='8'>Supabase</button>
					<button id='9'>Zustand</button>
					<button id='10'>Lucide</button>
					<button id='11'>MaterialUI</button>
					<button id='12'>Tailwind CSS</button>
					<button id='13'>Chart.js</button>
					<button id='14'>Axios</button>
					<button id='15'>Passport.js</button>
					<button id='16'>Sequelize</button>
					<button id='17'>Docker</button>
					<button id='18'>Kubernetes</button>
					<button id='19'>Prometheus</button>
					<button id='20'>Istio</button>
				</div>
			</div>
		</div>
	);
};

export default Dependencies;
