import React from 'react';

const Dependencies = () => {
	return (
		<div id='dependencies'>
			<p>Tools and Framework that built BottleNetes</p>
			<div id='cards'>
				<p>Programming Languages</p>
				<div id='lang' className='grid grid-cols-2 gap-5'>
					<button id='1'>JavaScript</button>
					<button id='2'>TypeScript</button>
				</div>
				<p>Technologies and Frameworks</p>
				<div id='tech'>
					<button id='3'>React</button>
					<button id='4'>Node</button>
					<button id='5'>Express</button>
					<button id='6'>Vite</button>
					<button id='7'>OpenAI</button>
					<button id='8'>SQL</button>
					<button id='9'>PostgreSQL</button>
					<button id='10'>Supabase</button>
					<button id='11'>Zustand</button>
					<button id='12'>Lucide</button>
					<button id='13'>MaterialUI</button>
					<button id='14'>Tailwind CSS</button>
					<button id='15'>Chart.js</button>
					<button id='16'>Axios</button>
					<button id='17'>Passport.js</button>
					<button id='18'>Sequelize</button>
				</div>
			</div>
		</div>
	);
};

export default Dependencies;
