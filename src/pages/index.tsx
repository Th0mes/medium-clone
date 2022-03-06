import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Link } from '@components'
import { sanityClient } from '@lib/sanity.server'
import { Post } from 'src/@types/post'
import { urlFor } from '@lib/sanity'

type HomeProps = {
	posts: [Post]
}

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
	console.log(posts)
	return (
		<>
			<Head>
				<title>Medium</title>
				<meta
					name="description"
					content="Medium blog with Next.js, Typescript, TailwindCSS and Sanity"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<section className="w-screen bg-yellow-400 border-y border-black py-10 lg:py-4">
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
			</section>

			<section className="wrapper">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
					{posts.map((post) => (
						<Link to={`/post/${post.slug.current}`} key={post._id}>
							<div className="border rounded-xl group overflow-hidden">
								<div className="flex">
									<Image
										src={urlFor(post.mainImage).url()}
										alt={post.slug.current}
										width={750}
										height={500}
										objectFit="cover"
										className="group-hover:scale-105"
									/>
								</div>
								<div className="flex justify-between p-4 items-center bg-slate-100">
									<div>
										<p className="text-lg font-bold">{post.title}</p>
										<p className="text-xs">
											{post.description} by {post.author.name}
										</p>
									</div>
									<Image
										src={urlFor(post.author.image).url()}
										alt={`${post.author.name} avatar`}
										width={48}
										height={48}
										objectFit="cover"
										className="rounded-full"
									/>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</>
	)
}

export default Home

export const getServerSideProps = async () => {
	const query = `*[_type == 'post'] {
  _id,
  title,
  author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
}`

	const posts = await sanityClient.fetch(query)

	return {
		props: {
			posts,
		},
	}
}
