import React from 'react';
// import JavaScriptIcon from '../assets/javascript.svg';
// import TypeScriptIcon from '../assets/typescript.svg';
// import ReactIcon from '../assets/react.svg';
// import ReactRouterIcon from '../assets/reactrouter.svg';
// import NodeIcon from '../assets/nodedotjs.svg';
// import ExpressIcon from '../assets/express.svg';
// import ViteIcon from '../assets/vite.svg';
// import OpenAIIcon from '../assets/openai.svg';
// import PostgreSQLIcon from '../assets/postgresql.svg';
// import SupabaseIcon from '../assets/supabase.svg';
// import ZustandIcon from '../assets/zustand.svg';
// import LucideIcon from '../assets/lucide.svg';
// import MUIIcon from '../assets/mui.svg';
// import TailwindIcon from '../assets/tailwindcss.svg';
// import ChartJSIcon from '../assets/chartdotjs.svg';
// import AxiosIcon from '../assets/axios.svg';
// import SequelizeIcon from '../assets/sequelize.svg';
// import DockerIcon from '../assets/docker.svg';
// import KubernetesIcon from '../assets/kubernetes.svg';
// import PrometheusIcon from '../assets/prometheus.svg';
// import IstioIcon from '../assets/istio.svg';
// import HelmIcon from '../assets/helm.svg';
// import ExternalLink from '../assets/external-link.svg';

// import JavaScriptIcon from '/public/assets/javascript.svg';
// import TypeScriptIcon from '/public/assets/typescript.svg';
// import ReactIcon from '/public/assets/react.svg';
// import ReactRouterIcon from '/public/assets/reactrouter.svg';
// import NodeIcon from '/public/assets/nodedotjs.svg';
// import ExpressIcon from '/public/assets/express.svg';
// import ViteIcon from '/public/assets/vite.svg';
// import OpenAIIcon from '/public/assets/openai.svg';
// import PostgreSQLIcon from '/public/assets/postgresql.svg';
// import SupabaseIcon from '/public/assets/supabase.svg';
// import ZustandIcon from '/public/assets/zustand.svg';
// import LucideIcon from '/public/assets/lucide.svg';
// import MUIIcon from '/public/assets/mui.svg';
// import TailwindIcon from '/public/assets/tailwindcss.svg';
// import ChartJSIcon from '/public/assets/chartdotjs.svg';
// import AxiosIcon from '/public/assets/axios.svg';
// import SequelizeIcon from '/public/assets/sequelize.svg';
// import DockerIcon from '/public/assets/docker.svg';
// import KubernetesIcon from './public/assets/kubernetes.svg';
// import PrometheusIcon from '/public/assets/prometheus.svg';
// import IstioIcon from '/public/assets/istio.svg';
// import HelmIcon from '/public/assets/helm.svg';
// import ExternalLink from '/public/assets/external-link.svg';


import JavaScriptIcon from '../../public/assets/javascript.svg';
import TypeScriptIcon from '../../public/assets/typescript.svg';
import ReactIcon from '../../public/assets/react.svg';
import ReactRouterIcon from '../../public/assets/reactrouter.svg';
import NodeIcon from '../../public/assets/nodedotjs.svg';
import ExpressIcon from '../../public/assets/express.svg';
import ViteIcon from '../../public/assets/vite.svg';
import OpenAIIcon from '../../public/assets/openai.svg';
import PostgreSQLIcon from '../../public/assets/postgresql.svg';
import SupabaseIcon from '../../public/assets/supabase.svg';
import ZustandIcon from '../../public/assets/zustand.svg';
import LucideIcon from '../../public/assets/lucide.svg';
import MUIIcon from '../../public/assets/mui.svg';
import TailwindIcon from '../../public/assets/tailwindcss.svg';
import ChartJSIcon from '../../public/assets/chartdotjs.svg';
import AxiosIcon from '../../public/assets/axios.svg';
import SequelizeIcon from '../../public/assets/sequelize.svg';
import DockerIcon from '../../public/assets/docker.svg';
import KubernetesIcon from '../../public/assets/kubernetes.svg';
import PrometheusIcon from '../../public/assets/prometheus.svg';
import IstioIcon from '../../public/assets/istio.svg';
import HelmIcon from '../../public/assets/helm.svg';
import ExternalLink from '../../public/assets/external-link.svg';



const Dependencies = () => {
	const languages = [
		{
			name: 'JavaScript',
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			linkTitle: 'JavaScript MDN Documentation',
			icon: JavaScriptIcon,
		},
		{
			name: 'TypeScript',
			link: 'https://www.typescriptlang.org/',
			linkTitle: 'TypeScript Homepage',
			icon: TypeScriptIcon,
		},
	];

	const technologies = [
		{
			name: 'React',
			link: 'https://react.dev/',
			linkTitle: 'React Homepage',
			icon: ReactIcon,
		},
		{
			name: 'React Router',
			link: 'https://reactrouter.com/',
			linkTitle: 'React Router Homepage',
			icon: ReactRouterIcon,
		},
		{
			name: 'Node.js',
			link: 'https://nodejs.org/en',
			linkTitle: 'Node.js Homepage',
			icon: NodeIcon,
		},
		{
			name: 'Express',
			link: 'https://expressjs.com/',
			linkTitle: 'Express Homepage',
			icon: ExpressIcon,
		},
		{
			name: 'Vite',
			link: 'https://vite.dev/',
			linkTitle: 'Vite Homepage',
			icon: ViteIcon,
		},
		{
			name: 'OpenAI',
			link: 'https://openai.com/',
			linkTitle: 'OpenAI Homepage',
			icon: OpenAIIcon,
		},
		{
			name: 'PostgreSQL',
			link: 'https://www.postgresql.org/',
			linkTitle: 'PostgreSQL Homepage',
			icon: PostgreSQLIcon,
		},
		{
			name: 'Supabase',
			link: 'https://supabase.com/',
			linkTitle: 'Supabase Homepage',
			icon: SupabaseIcon,
		},
		{
			name: 'Zustand',
			link: 'https://zustand-demo.pmnd.rs/',
			linkTitle: 'Zustand Homepage',
			icon: ZustandIcon,
		},
		{
			name: 'Lucide',
			link: 'https://lucide.dev/',
			linkTitle: 'Lucide Homepage',
			icon: LucideIcon,
		},
		{
			name: 'MaterialUI',
			link: 'https://mui.com/',
			linkTitle: 'MUI Homepage',
			icon: MUIIcon,
		},
		{
			name: 'Tailwind CSS',
			link: 'https://tailwindcss.com/',
			linkTitle: 'Tailwind CSS Homepage',
			icon: TailwindIcon,
		},
		{
			name: 'Chart.js',
			link: 'https://www.chartjs.org/',
			linkTitle: 'Chart.js Homepage',
			icon: ChartJSIcon,
		},
		{
			name: 'Axios',
			link: 'https://axios-http.com/',
			linkTitle: 'Axios Homepage',
			icon: AxiosIcon,
		},
		{
			name: 'Sequelize',
			link: 'https://sequelize.org/',
			linkTitle: 'Sequelize Homepage',
			icon: SequelizeIcon,
		},
		{
			name: 'Docker',
			link: 'https://www.docker.com/',
			linkTitle: 'Docker Homepage',
			icon: DockerIcon,
		},
		{
			name: 'Kubernetes',
			link: 'https://kubernetes.io/',
			linkTitle: 'Kubernetes Homepage',
			icon: KubernetesIcon,
		},
		{
			name: 'Prometheus',
			link: 'https://prometheus.io/',
			linkTitle: 'Prometheus Homepage',
			icon: PrometheusIcon,
		},
		{
			name: 'Istio',
			link: 'https://istio.io/',
			linkTitle: 'Istio Homepage',
			icon: IstioIcon,
		},
		{
			name: 'Helm',
			link: 'https://helm.sh/',
			linkTitle: 'Helm Homepage',
			icon: HelmIcon,
		},
	];

	return (
		<section>
			<h2>Tools and Frameworks that made BottleNetes</h2>
			<div id='cards'>
				<h3>Programming Languages</h3>
				<div id='lang'>
					{languages.map((language, index) => {
						return (
							<a
								href={language.link}
								title={language.linkTitle}
								aria-label={language.linkTitle}
								key={index}
							>
								<button>
									<img src={language.icon} />
									{language.name}
								</button>
							</a>
						);
					})}
				</div>
				<h3>Technologies and Frameworks</h3>
				<div id='tech'>
					{technologies.map((technology, index) => {
						return (
							<a
								href={technology.link}
								title={technology.linkTitle}
								aria-label={technology.linkTitle}
								key={index}
							>
								<button>
									<img src={technology.icon} />
									{technology.name}
								</button>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Dependencies;
