import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen justify-center items-center">
			<Head>
				<title>Medium</title>
				<meta
					name="description"
					content="Medium blog with Next.js, Typescript, TailwindCSS and Sanity"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-slate-600 text-2xl font-bold">This is Medium!</h1>
		</div>
	)
}

export default Home
