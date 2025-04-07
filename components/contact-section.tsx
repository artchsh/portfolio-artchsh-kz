'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaTelegramPlane, FaExternalLinkAlt } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si' // Import icons for Fiverr/Upwork
import { useState } from 'react'

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.'
	}),
	email: z.string().email({
		message: 'Please enter a valid email address.'
	}),
	message: z.string().min(10, {
		message: 'Message must be at least 10 characters.'
	})
})

export default function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const socialLinks = {
		linkedin: 'https://linkedin.com/in/artchsh',
		github: 'https://github.com/artchsh',
		twitter: 'https://twitter.com/artchsh',
		instagram: '',
		email: 'mailto:artyom.chshyogolev@gmail.com',
		telegram: 'https://t.me/artchsh'
	}

	const freelanceLinks = {
		fiverr: 'https://www.fiverr.com/artchsh',
		upwork: 'https://www.upwork.com/freelancers/~01174b9aa4f8d1efb2'
	}

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true)
		console.log('Form Data:', values)

		try {
            await fetch("https://script.google.com/macros/s/AKfycbz1hEJUiF0aQc3am1shF4MhD8k9HhDG3RW-Bv7h67rQ0RyoHM8WMVOpFlMBvoJgwxbi/exec", {
                "method": "POST",
                "mode": "no-cors",
                "body": JSON.stringify(values),
            })
			toast.success('Message Sent!', {
				description: "Thanks for reaching out. I'll get back to you soon."
			})

			form.reset()
		} catch (error) {
			console.error('Submission Error:', error)
			toast.error('Submission Failed', {
				description: 'Something went wrong. Please try again later.'
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onError(errors: any) {
		console.error('Form validation errors:', errors)
		toast.warning('Validation Error', {
			description: 'Please check the highlighted fields for errors.'
		})
	}

	return (
		<div id='contact-section' className='flex min-h-screen flex-col bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white'>
			<section className='flex flex-grow items-center justify-center p-4 sm:p-6 md:p-8'>
				<Card
					className='
            w-full max-w-4xl border border-white/10
            bg-zinc-800/30 text-zinc-50 shadow-xl backdrop-blur-lg
          '>
					<CardHeader className='text-center'>
						<CardTitle className='text-3xl font-bold text-white sm:text-4xl'>Get In Touch</CardTitle>
						<CardDescription className='pt-1 text-base text-zinc-300 sm:text-lg'>Connect, collaborate, or hire me for your next project.</CardDescription>
					</CardHeader>
					<CardContent className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12'>

						{/* Left Column: Contact Info & Hire Me */}
						<div className='flex flex-col gap-8'>
							{/* Connect Section */}
							<div>
								<h3 className='mb-4 text-left text-lg font-semibold text-zinc-100'>Connect with me</h3>
								<div className='flex flex-wrap items-center justify-start gap-4'>
									{socialLinks.linkedin && (
										<Link href={socialLinks.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn Profile' className='text-zinc-400 transition-colors hover:text-white'>
											<FaLinkedin className='h-6 w-6' />
										</Link>
									)}
									{socialLinks.github && (
										<Link href={socialLinks.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub Profile' className='text-zinc-400 transition-colors hover:text-white'>
											<FaGithub className='h-6 w-6' />
										</Link>
									)}
									{socialLinks.email && (
										<Link href={socialLinks.email} aria-label='Send an Email' className='text-zinc-400 transition-colors hover:text-white'>
											<FaEnvelope className='h-6 w-6' />
										</Link>
									)}
									{socialLinks.telegram && (
										<Link href={socialLinks.telegram} target='_blank' rel='noopener noreferrer' aria-label='Telegram Profile' className='text-zinc-400 transition-colors hover:text-white'>
											<FaTelegramPlane className='h-6 w-6' />
										</Link>
									)}
									{socialLinks.twitter && (
										<Link href={socialLinks.twitter} target='_blank' rel='noopener noreferrer' aria-label='Twitter Profile' className='text-zinc-400 transition-colors hover:text-white'>
											<FaTwitter className='h-6 w-6' />
										</Link>
									)}
									{socialLinks.instagram && (
										<Link href={socialLinks.instagram} target='_blank' rel='noopener noreferrer' aria-label='Instagram Profile' className='text-zinc-400 transition-colors hover:text-white'>
											<FaInstagram className='h-6 w-6' />
										</Link>
									)}
								</div>
							</div>

							<Separator className='bg-zinc-700/50' />

							{/* Hire Me Section */}
							<div>
								<h3 className='mb-4 text-left text-lg font-semibold text-zinc-100'>Hire Me On</h3>
								<div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
									{freelanceLinks.fiverr && (
										<Button asChild variant='outline' className='w-full justify-center gap-2 border-zinc-600 bg-zinc-800/50 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800/70 hover:text-white sm:w-auto'>
											<Link href={freelanceLinks.fiverr} target='_blank' rel='noopener noreferrer'>
												<SiFiverr className='h-4 w-4'/> Fiverr <FaExternalLinkAlt className='ml-1 h-4 w-4'/>
											</Link>
										</Button>
									)}
									{freelanceLinks.upwork && (
										<Button asChild variant='outline' className='w-full justify-center gap-2 border-zinc-600 bg-zinc-800/50 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800/70 hover:text-white sm:w-auto'>
											<Link href={freelanceLinks.upwork} target='_blank' rel='noopener noreferrer'>
												<SiUpwork className='h-4 w-4'/> Upwork <FaExternalLinkAlt className='ml-1 h-4 w-4'/>
											</Link>
										</Button>
									)}
								</div>
								{!freelanceLinks.fiverr && !freelanceLinks.upwork && (
									<p className='text-sm text-zinc-400'>Freelance platform links coming soon.</p>
								)}
							</div>
						</div>

						{/* Right Column: Contact Form */}
						<div>
							<h3 className='mb-4 text-left text-lg font-semibold text-zinc-100'>Send a Message</h3>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit, onError)} className='space-y-5'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-zinc-300'>Name</FormLabel>
												<FormControl>
													<Input placeholder='Your Name' {...field} className='border-zinc-700/50 bg-black/30 text-zinc-100 placeholder-zinc-500 focus-visible:ring-zinc-400 focus-visible:ring-offset-zinc-900' />
												</FormControl>
												<FormMessage className='text-red-400' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-zinc-300'>Email</FormLabel>
												<FormControl>
													<Input type='email' placeholder='your.email@example.com' {...field} className='border-zinc-700/50 bg-black/30 text-zinc-100 placeholder-zinc-500 focus-visible:ring-zinc-400 focus-visible:ring-offset-zinc-900' />
												</FormControl>
												<FormMessage className='text-red-400' />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='message'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-zinc-300'>Message</FormLabel>
												<FormControl>
													<Textarea placeholder='Tell me how I can help...' {...field} className='min-h-[100px] border-zinc-700/50 bg-black/30 text-zinc-100 placeholder-zinc-500 focus-visible:ring-zinc-400 focus-visible:ring-offset-zinc-900' />
												</FormControl>
												<FormMessage className='text-red-400' />
											</FormItem>
										)}
									/>
									<Button type='submit' className='w-full bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus-visible:ring-zinc-400 focus-visible:ring-offset-zinc-900/50' disabled={isSubmitting}>
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</Button>
								</form>
							</Form>
						</div>

					</CardContent>
				</Card>
			</section>

			<footer className='flex shrink-0 items-center justify-center bg-black p-4'>
				<p className='text-center text-xs text-zinc-500 sm:text-sm'>© {new Date().getFullYear()} Artyom Chshyogolev. All rights reserved.</p>
			</footer>
		</div>
	)
}