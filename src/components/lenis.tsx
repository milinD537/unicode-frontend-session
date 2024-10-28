import { ReactLenis } from "lenis/react"

export default function Lenis({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis root options={{ duration: 1.8 }}>
			{children}
		</ReactLenis>
	)
}
