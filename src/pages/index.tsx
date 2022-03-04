import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@components'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Medium</title>
				<meta
					name="description"
					content="Medium blog with Next.js, Typescript, TailwindCSS and Sanity"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="w-screen bg-yellow-400 border-y border-black py-10 lg:py-4">
				<div className="flex justify-between items-center max-w-screen-xl mx-auto">
					<div className="px-10 space-y-5">
						<h1 className="text-6xl max-w-xl font-serif">
							<span className="underline decoration-4">Medium</span> is a place
							to write, read and connect
						</h1>
						<h2>
							It&apos;s easy and free to post yout thinking on any topic and
							connect with millions of readers.
						</h2>
					</div>
					<div className="hidden md:inline-flex w-44 h-44 lg:w-72 lg:h-72 relative">
						<Image src={'/medium-logo.png'} alt="Medium logo" layout="fill" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
