import { IoLogoJavascript, IoLanguage } from 'react-icons/io5'
import { FaDocker, FaReact, FaPython, FaSync, FaTelegram, FaDigitalOcean, FaGithub, FaFigma, FaPaintBrush, FaExternalLinkAlt } from 'react-icons/fa'
import { GoCommentDiscussion } from 'react-icons/go'
import { SiTypescript, SiFlask, SiSocketdotio, SiOllama, SiGithubactions, SiNginx, SiPostman } from 'react-icons/si'
import { DiCode, DiMysql, DiPostgresql } from 'react-icons/di'
import { AiFillOpenAI } from 'react-icons/ai'
import { RiClaudeLine, RiNextjsFill, RiTailwindCssFill, RiTeamFill } from 'react-icons/ri'
import React from 'react'
import { CiServer } from 'react-icons/ci'
import { TbArrowAutofitContent } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { PiNotionLogo } from 'react-icons/pi'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function SkillsProjectsSection() {
	const skills = {
		languages: [
			{ name: 'JavaScript', icon: <IoLogoJavascript /> },
			{ name: 'TypeScript', icon: <SiTypescript /> },
			{ name: 'Python', icon: <FaPython /> },
			{ name: 'C (basics)', icon: <DiCode /> }
		],
		libraries: [
			{ name: 'React', icon: <FaReact /> },
			{ name: 'Next.js', icon: <RiNextjsFill /> }, // Changed order slightly
			{ name: 'Flask', icon: <SiFlask /> },
			{ name: 'Socket.IO', icon: <SiSocketdotio /> },
			{ name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
			{ name: 'asyncio', icon: <FaSync /> },
			{ name: 'python-telegram-bot', icon: <FaTelegram /> }
		],
		ai: [
			{ name: 'ChatGPT', icon: <AiFillOpenAI /> },
			{ name: 'Claude AI', icon: <RiClaudeLine /> },
			{ name: 'Ollama', icon: <SiOllama /> }
		],
		devops: [
			{ name: 'Docker', icon: <FaDocker /> },
			{ name: 'Github Actions', icon: <SiGithubactions /> },
			{ name: 'DigitalOcean', icon: <FaDigitalOcean /> },
			{ name: 'ps.kz', icon: <CiServer /> },
			{ name: 'Nginx', icon: <SiNginx /> },
			{ name: 'CI/CD Pipelines', icon: <TbArrowAutofitContent /> }
		],
		database: [
			{ name: 'MySQL', icon: <DiMysql /> },
			{ name: 'PostgreSQL', icon: <DiPostgresql /> }
		],
		tools: [
			{ name: 'Github', icon: <FaGithub /> },
			{ name: 'VS Code', icon: <VscCode /> },
			{ name: 'Figma / Penpot', icon: <FaFigma /> },
			{ name: 'Postman', icon: <SiPostman /> },
			{ name: 'Notion / Obsidian', icon: <PiNotionLogo /> }
		],
		softskills: [
			{ name: 'Team Leadership', icon: <RiTeamFill /> },
			{ name: 'Communication', icon: <GoCommentDiscussion /> },
			{ name: 'Peer Support', icon: <GoCommentDiscussion /> },
			{ name: 'Creative Thinking', icon: <FaPaintBrush /> },
			{ name: 'Multilingual', icon: <IoLanguage /> }
		]
	} as const

	type SkillCategory = {
		key: keyof typeof skills
		title: string
	}

	const skillCategories: SkillCategory[] = [
		{ key: 'languages', title: 'Languages' },
		{ key: 'libraries', title: 'Frameworks & Libraries' },
		{ key: 'ai', title: 'AI & Machine Learning' },
		{ key: 'devops', title: 'DevOps & Cloud' },
		{ key: 'database', title: 'Databases' },
		{ key: 'tools', title: 'Developer Tools' },
		{ key: 'softskills', title: 'Soft Skills' }
	]

	const numColumns = 3
	const columns: SkillCategory[][] = Array.from({ length: numColumns }, () => [])
	skillCategories.forEach((category, index) => {
		columns[index % numColumns].push(category)
	})

	const renderSkillItem = (skill: { name: string; icon: React.ReactNode }) => (
		<div
			key={skill.name}
			className='
          flex aspect-square flex-col items-center justify-center
          rounded-xl border border-zinc-700/50 bg-zinc-800/40 p-3 text-center
          shadow-lg transition-colors duration-200 ease-in-out
          hover:border-zinc-600/80 hover:bg-zinc-700/60
        '>
			<span className='mb-2 text-3xl text-zinc-200 sm:text-4xl'>{skill.icon}</span>
			<span className='text-xs font-medium text-zinc-300 line-clamp-2 sm:text-sm'>{skill.name}</span>
		</div>
	)

	const renderCategory = (category: SkillCategory) =>
		skills[category.key] &&
		skills[category.key].length > 0 && (
			<div key={category.key} className='flex flex-col gap-4'>
				<h3 className='text-xl font-semibold text-zinc-100'>{category.title}</h3>
				<div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>{skills[category.key].map(renderSkillItem)}</div>
			</div>
		)

	const projects = [
		{
			title: 'Portfolio Website',
			description: 'This very website! Built with Next.js, Tailwind CSS, and Shadcn UI, showcasing skills and projects.',
			tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI']
			// No link here, so it won't be clickable
		},
		{
			title: 'AllyMap',
			description: 'PWA for LGTBIQIA+ inclusive places in Almaty, Kazakhstan',
			tags: ['Typescript', 'React', 'TailwindCSS', 'Material UI', 'Vite', 'PWA', 'MongoDB'],
			link: 'https://github.com/artchsh?tab=repositories&q=AllyMap' // Link exists
		},
		{
			title: 'PETE',
			description: 'PWA for local Shelters, to have easy access to pets in need of a home',
			tags: ['Typescript', 'React', 'TailwindCSS', 'Vite', 'PWA', 'MongoDB'],
			link: 'https://github.com/pete-kz' // Link exists
		},
		{
			title: 'JarqynDos - Telegram bot',
			description: "Telegram bot for social project of peer 2 peer metal health support for students called 'JARQYN' ",
			tags: ['Python', 'Docker', 'DigitalOcean', 'python-telegram-bot', 'JSONDB'],
			link: 'https://github.com/artchsh/jarqyndos' // Link exists
		},
		{
			title: 'Telegram Bot Automation',
			description: 'Developed several utility bots for Telegram using python-telegram-bot for automation tasks.',
			tags: ['Python', 'Telegram API', 'Automation']
			// No link here
		}
		// Add more projects...
	]

	const ProjectCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
		const cardContent = (
			<Card
				key={index}
				className={`
            flex h-full flex-col border border-zinc-700/50 bg-zinc-800/30
            text-zinc-50 shadow-xl backdrop-blur-lg transition-all
            duration-300 group-hover:border-zinc-600/80 group-hover:bg-zinc-800/50
            ${project.link && project.link !== '#' ? 'cursor-pointer' : ''}
          `}
				// Note: Hover effect classes moved to the anchor tag's group hover
			>
				<CardHeader className='flex-shrink-0'>
					<CardTitle className='text-xl font-semibold text-zinc-100 flex items-center'>
						{project.title}
						{project.link && project.link !== '#' && <FaExternalLinkAlt className='ml-2 inline-block h-4 w-4 align-middle text-zinc-400 transition-colors group-hover:text-zinc-200' />}
					</CardTitle>
					<CardDescription className='pt-1 text-zinc-300'>{project.description}</CardDescription>
				</CardHeader>
				<CardContent className='mt-auto flex flex-wrap gap-2 pt-4'>
					{project.tags.map((tag) => (
						<Badge key={tag} variant='secondary' className='border-zinc-600 bg-zinc-700/80 px-2 py-0.5 text-xs font-medium text-zinc-200'>
							{tag}
						</Badge>
					))}
				</CardContent>
			</Card>
		)

		if (project.link && project.link !== '#') {
			return (
				<a
					href={project.link}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View project ${project.title} (opens in new tab)`}
					className='group block h-full outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg' // Apply group and focus styles here
				>
					{cardContent}
				</a>
			)
		}

		return cardContent // Render the card directly if no link
	}

	return (
		<section className='min-h-screen w-full bg-gradient-to-b from-zinc-900 via-black to-zinc-900 py-16 text-zinc-100 md:py-24'>
			<div className='container mx-auto px-4'>
				{/* Skills Section */}
				<div className='mb-16 md:mb-24'>
					<h2 className='mb-4 text-center text-3xl font-bold text-white sm:text-4xl md:mb-6'>Skills & Expertise</h2>
					<p className='mb-10 text-center text-lg text-zinc-400 md:mb-12'>Technologies and methodologies I work with.</p>
					<div className='grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
						{columns.map((column, colIndex) => (
							<div key={colIndex} className='flex flex-col gap-y-10'>
								{column.map(renderCategory)}
							</div>
						))}
					</div>
				</div>

				<Separator className='my-12 bg-zinc-700/50 md:my-16' />

				{/* Projects Section */}
				<div>
					<h2 className='mb-4 text-center text-3xl font-bold text-white sm:text-4xl md:mb-6'>Featured Projects</h2>
					<p className='mb-10 text-center text-lg text-zinc-400 md:mb-12'>A selection of projects I&apos;ve worked on.</p>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{/* Use the new ProjectCard component */}
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
