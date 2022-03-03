import Image from 'next/image'
import { Link } from '@components'

export const Header = () => {
	return (
		<header className="flex items-center justify-between py-5 max-w-screen-xl mx-auto">
			<div className="flex items-center space-x-5">
				<Link to="/" className="w-48 object-contain">
					<Image
						src="/medium.png"
						alt="Medium logo"
						width={1391}
						height={344}
					/>
				</Link>
				<div className="hidden md:inline-flex items-center space-x-5">
					<h3>About</h3>
					<h3>Contact</h3>
					<h3 className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">
						Follow
					</h3>
				</div>
			</div>

			<div className="flex items-center space-x-5 text-green-600">
				<h3>Sign In</h3>
				<h3 className="border px-4 py-1 rounded-full border-green-600">
					Get Started
				</h3>
			</div>
		</header>
	)
}
