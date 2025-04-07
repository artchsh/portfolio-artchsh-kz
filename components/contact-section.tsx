'use client' // Required for react-hook-form and interactivity

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'sonner' // Import toast from sonner
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaTelegramPlane } from 'react-icons/fa'
import { useState } from 'react'

// Define Zod schema for form validation (same as before)
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
	// No useToast hook needed
	const [isSubmitting, setIsSubmitting] = useState(false)

	// Define your social/contact links here (same as before)
	const socialLinks = {
		linkedin: 'https://linkedin.com/in/artchsh', // Replace
		github: 'https://github.com/artchsh', // Replace
		twitter: 'https://twitter.com/artchsh', // Replace
		instagram: '', // Replace
		email: 'mailto:artyom.chshyogolev@gmail.com', // Replace
		telegram: 'https://t.me/artchsh' // Replace
	}

	// Initialize react-hook-form (same as before)
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	})

	// Handle form submission
	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true)
		console.log('Form Data:', values)

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500))
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
            w-full max-w-2xl border border-white/10
            bg-zinc-800/30 text-zinc-50 shadow-xl backdrop-blur-lg
          '>
					<CardHeader className='text-center'>
						<CardTitle className='text-3xl font-bold text-white sm:text-4xl'>Contact Me</CardTitle>
						<CardDescription className='pt-1 text-base text-zinc-300 sm:text-lg'>Let&apos;s connect! Reach out via the form or find me below.</CardDescription>
					</CardHeader>
					<CardContent>
						{/* Social Links Section */}
						<div className='mb-6 mt-2'>
							<h3 className='mb-4 text-center text-sm font-semibold uppercase tracking-wider text-zinc-400'>Connect with me</h3>
							<div className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
								{/* Social Link Links (same as before) */}
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

						<Separator className='my-6 bg-zinc-700/50' />

						{/* Contact Form using Shadcn Form (same structure as before) */}
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
					</CardContent>
				</Card>
			</section>

			<footer className='flex shrink-0 items-center justify-center bg-black p-4'>
				<p className='text-center text-xs text-zinc-500 sm:text-sm'>© {new Date().getFullYear()} Artyom Chshyogolev. All rights reserved.</p>
			</footer>
		</div>
	)
}
