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
					<button id='1'>
						<img src='src/assets/javascript.svg' />
						JavaScript
					</button>
					<button id='2'><img src='src/assets/typescript.svg' />TypeScript</button>
				</div>
				<p>Technologies and Frameworks</p>
				<div id='tech'>
					<button id='1'><img src='src/assets/react.svg' />React</button>
					<button id='2'><img src='src/assets/nodedotjs.svg' />Node.js</button>
					<button id='3'><img src='src/assets/express.svg' />Express</button>
					<button id='4'><img src='src/assets/vite.svg' />Vite</button>
					<button id='5'><img src='src/assets/openai.svg' />OpenAI</button>
					<button id='6'><img src='src/assets/postgresql.svg' />PostgreSQL</button>
					<button id='7'><img src='src/assets/supabase.svg' />Supabase</button>
					<button id='8'><img src='src/assets/zustand.svg' />Zustand</button>
					<button id='9'><img src='src/assets/lucide.svg' />Lucide</button>
					<button id='10'><img src='src/assets/mui.svg' />MaterialUI</button>
					<button id='11'><img src='src/assets/tailwindcss.svg' />Tailwind CSS</button>
					<button id='12'><img src='src/assets/chartdotjs.svg' />Chart.js</button>
					<button id='13'><img src='src/assets/axios.svg' />Axios</button>
					<button id='14'><img src='src/assets/passport.svg' />Passport.js</button>
					<button id='15'><img src='src/assets/sequelize.svg' />Sequelize</button>
					<button id='16'><img src='src/assets/docker.svg' />Docker</button>
					<button id='17'>
						<img src='/src/assets/kubernetes.svg' />
						Kubernetes
					</button>
					<button id='18'><img src='src/assets/prometheus.svg' />Prometheus</button>
					<button id='19'><img src='src/assets/istio.svg' />Istio</button>
          <button id='20'><img src='src/assets/helm.svg' />Helm</button>
				</div>
			</div>
		</div>
	);
};

export default Dependencies;
