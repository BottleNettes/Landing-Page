import React from 'react';
import JavaScriptIcon from '../assets/javascript.svg';
import TypeScriptIcon from '../assets/typescript.svg';
import ReactIcon from '../assets/react.svg';
import ReactRouterIcon from '../assets/reactrouter.svg';
import NodeIcon from '../assets/nodedotjs.svg';
import ExpressIcon from '../assets/express.svg';
import ViteIcon from '../assets/vite.svg';
import OpenAIIcon from '../assets/openai.svg';
import PostgreSQLIcon from '../assets/postgresql.svg';
import SupabaseIcon from '../assets/supabase.svg';
import ZustandIcon from '../assets/zustand.svg';
import LucideIcon from '../assets/lucide.svg';
import MUIIcon from '../assets/mui.svg';
import TailwindIcon from '../assets/tailwindcss.svg';
import ChartJSIcon from '../assets/chartdotjs.svg';
import AxiosIcon from '../assets/axios.svg';
import SequelizeIcon from '../assets/sequelize.svg';
import DockerIcon from '../assets/docker.svg';
import KubernetesIcon from '../assets/kubernetes.svg';
import PrometheusIcon from '../assets/prometheus.svg';
import IstioIcon from '../assets/istio.svg';
import HelmIcon from '../assets/helm.svg';

const Dependencies = () => {
	return (
		<div id='dependencies' className=' 2xl:grid-cols-2'>
			<h2>Tools and Frameworks that made BottleNetes</h2>
			<div id='cards'>
				<h3>Programming Languages</h3>
				<div id='lang'>
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
						title='JavaScript MDN Documentation'
						aria-label='JavaScript MDN Documentation'
					>
						<button id='1'>
							<img src={JavaScriptIcon} />
							JavaScript
						</button>
					</a>
					<a
						href='https://www.typescriptlang.org/'
						title='TypeScript Homepage'
						aria-label='TypeScript Homepage'
					>
						<button id='2'>
							<img src={TypeScriptIcon} />
							TypeScript
						</button>
					</a>
				</div>
				<h3>Technologies and Frameworks</h3>
				<div id='tech'>
					<a
						href='https://react.dev/'
						title='React Homepage'
						aria-label='React Homepage'
					>
						<button id='3'>
							<img src={ReactIcon} />
							React
						</button>
					</a>
					<a
						href='https://react.dev/'
						title='React Homepage'
						aria-label='React Homepage'
					>
						<button id='4'>
							<img src={ReactRouterIcon} />
							React Router
						</button>
					</a>
					<a
						href='https://nodejs.org/en'
						title='Node.js Homepage'
						aria-label='Node.js Homepage'
					>
						<button id='5'>
							<img src={NodeIcon} />
							Node.js
						</button>
					</a>
					<a
						href='https://expressjs.com/'
						title='Express.js Homepage'
						aria-label='Express.js Homepage'
					>
						<button id='6'>
							<img src={ExpressIcon} />
							Express
						</button>
					</a>
					<a
						href='https://vite.dev/'
						title='Vite Homepage'
						aria-label='Vite Homepage'
					>
						<button id='7'>
							<img src={ViteIcon} />
							Vite
						</button>
					</a>
					<a
						href='https://openai.com/'
						title='OpenAI Homepage'
						aria-label='OpenAI Homepage'
					>
						<button id='8'>
							<img src={OpenAIIcon} />
							OpenAI
						</button>
					</a>
					<a
						href='https://www.postgresql.org/'
						title='PostgreSQL Homepage'
						aria-label='PostgreSQL Homepage'
					>
						<button id='9'>
							<img src={PostgreSQLIcon} />
							PostgreSQL
						</button>
					</a>
					<a
						href='https://supabase.com/'
						title='Supabase Homepage'
						aria-label='Supabase Homepage'
					>
						<button id='10'>
							<img src={SupabaseIcon} />
							Supabase
						</button>
					</a>
					<a
						href='https://zustand-demo.pmnd.rs/'
						title='Zustand Homepage'
						aria-label='Zustand Homepage'
					>
						<button id='11'>
							<img src={ZustandIcon} />
							Zustand
						</button>
					</a>
					<a
						href='https://lucide.dev/'
						title='Lucide Homepage'
						aria-label='Lucide Homepage'
					>
						<button id='12'>
							<img src={LucideIcon} />
							Lucide
						</button>
					</a>
					<a
						href='https://mui.com/'
						title='MUI Homepage'
						aria-label='MUI Homepage'
					>
						<button id='13'>
							<img src={MUIIcon} />
							MaterialUI
						</button>
					</a>
					<a
						href='https://tailwindcss.com/'
						title='Tailwind CSS Homepage'
						aria-label='Tailwind CSS Homepage'
					>
						<button id='14'>
							<img src={TailwindIcon} />
							Tailwind CSS
						</button>
					</a>
					<a
						href='https://www.chartjs.org/'
						title='Chart.js Homepage'
						aria-label='Chart.js Homepage'
					>
						<button id='15'>
							<img src={ChartJSIcon} />
							Chart.js
						</button>
					</a>
					<a
						href='https://axios-http.com/'
						title='Axios Homepage'
						aria-label='Axios Homepage'
					>
						<button id='16'>
							<img src={AxiosIcon} />
							Axios
						</button>
					</a>
					<a
						href='https://sequelize.org/'
						title='Sequelize Homepage'
						aria-label='Sequelize Homepage'
					>
						<button id='17'>
							<img src={SequelizeIcon} />
							Sequelize
						</button>
					</a>
					<a
						href='https://www.docker.com/'
						title='Docker Homepage'
						aria-label='Docker Homepage'
					>
						<button id='18'>
							<img src={DockerIcon} />
							Docker
						</button>
					</a>
					<a
						href='https://kubernetes.io/'
						title='Kubernetes Homepage'
						aria-label='Kubernetes Homepage'
					>
						<button id='19'>
							<img src={KubernetesIcon} />
							Kubernetes
						</button>
					</a>
					<a
						href='https://prometheus.io/'
						title='Prometheus Homepage'
						aria-label='Prometheus Homepage'
					>
						<button id='20'>
							<img src={PrometheusIcon} />
							Prometheus
						</button>
					</a>
					<a
						href='https://istio.io/'
						title='Istio homepage'
						aria-label='Istio Homepage'
					>
						<button id='21'>
							<img src={IstioIcon} />
							Istio
						</button>
					</a>
					<a
						href='https://helm.sh/'
						title='Helm Homepage'
						aria-label='Helm Homepage'
					>
						<button id='22'>
							<img src={HelmIcon} />
							Helm
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Dependencies;
