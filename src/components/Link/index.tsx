import NextLink from 'next/link'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	// allow both static and dynamic routes
	to: string | { href: string; as: string }
	prefetch?: boolean
}

export const Link = ({ to, prefetch, ...props }: LinkProps) => {
	return (
		<NextLink href={to} prefetch={prefetch || false}>
			<a {...props} />
		</NextLink>
	)
}
