"use client";

import Link from "next/link";
import { links } from "@/lib/navData";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const rawPathname = usePathname();
	const pathname = rawPathname.startsWith("/blog") ? "/blog" : rawPathname;

	return (
		<nav
			className="z-50 hidden shrink-0 lg:block lg:w-64"
			aria-label="Main navigation"
		>
			<div className="sticky top-8">
				{/* Main window chrome */}
				<div
					style={{
						background: "#d4d0c8",
						borderTop: "2px solid #ffffff",
						borderLeft: "2px solid #ffffff",
						borderRight: "2px solid #404040",
						borderBottom: "2px solid #404040",
						boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
					}}
				>
					{/* Title bar */}
					<div
						style={{
							background: "linear-gradient(to right, #0a246a, #a6caf0)",
							padding: "3px 6px",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
							<span style={{ fontSize: "13px" }} aria-hidden>🖥️</span>
							<span
								style={{
									fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
									fontSize: "11px",
									fontWeight: "bold",
									color: "#fff",
									textShadow: "1px 1px 0 #00008b",
									userSelect: "none",
								}}
							>
								Nick Oates
							</span>
						</div>
						<div style={{ display: "flex", gap: "2px" }}>
							{["_", "□", "✕"].map((btn) => (
								<div
									key={btn}
									aria-hidden
									style={{
										width: "16px",
										height: "14px",
										background: "#d4d0c8",
										borderTop: "1px solid #ffffff",
										borderLeft: "1px solid #ffffff",
										borderRight: "1px solid #404040",
										borderBottom: "1px solid #404040",
										boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: "9px",
										color: "#000",
										cursor: "default",
										userSelect: "none",
										fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
									}}
								>
									{btn}
								</div>
							))}
						</div>
					</div>

					{/* Profile section */}
					<div
						style={{
							background: "#d4d0c8",
							padding: "8px",
							borderBottom: "1px solid #808080",
							textAlign: "center",
						}}
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/images/nick-oates.webp"
							alt="Nick Oates"
							width={64}
							height={64}
							style={{
								borderTop: "2px solid #404040",
								borderLeft: "2px solid #404040",
								borderRight: "2px solid #ffffff",
								borderBottom: "2px solid #ffffff",
								boxShadow: "inset 1px 1px 0 #808080",
								display: "block",
								margin: "0 auto 4px",
								objectFit: "cover",
								borderRadius: "0",
							}}
						/>
						<p
							style={{
								fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
								fontSize: "11px",
								fontWeight: "bold",
								color: "#000",
							}}
						>
							Nick Oates
						</p>
						<p
							style={{
								fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
								fontSize: "10px",
								color: "#444",
							}}
						>
							Software Engineer
						</p>
					</div>

					{/* Nav links */}
					<div style={{ padding: "4px" }}>
						{links.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "6px",
										padding: "3px 6px",
										textDecoration: "none",
										fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
										fontSize: "11px",
										color: isActive ? "#ffffff" : "#000000",
										background: isActive ? "#0a246a" : "transparent",
										borderTop: isActive ? "1px solid #0a246a" : "1px solid transparent",
										userSelect: "none",
									}}
									className={!isActive ? "hover:bg-[#0a246a] hover:text-white" : ""}
								>
									<link.Icon size={16} aria-hidden />
									{link.title}
								</Link>
							);
						})}
					</div>

					{/* Status bar */}
					<div
						style={{
							borderTop: "1px solid #808080",
							padding: "2px 6px",
							fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
							fontSize: "10px",
							color: "#000",
							background: "#d4d0c8",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<span>4 items</span>
						<span>nickoates.com</span>
					</div>
				</div>

				{/* Social links as taskbar-style buttons */}
				<div
					style={{
						marginTop: "8px",
						background: "#d4d0c8",
						borderTop: "2px solid #ffffff",
						borderLeft: "2px solid #ffffff",
						borderRight: "2px solid #404040",
						borderBottom: "2px solid #404040",
						boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
						padding: "6px",
						display: "flex",
						gap: "4px",
						flexWrap: "wrap",
					}}
				>
					{[
						{ label: "X (Twitter)", href: "https://x.com/nickoates_", symbol: "𝕏" },
						{ label: "GitHub", href: "https://github.com/n1ckoates", symbol: "GH" },
						{ label: "Email", href: "mailto:nick@nickoates.com", symbol: "✉" },
					].map((s) => (
						<a
							key={s.href}
							href={s.href}
							target="_blank"
							rel="noreferrer"
							title={s.label}
							style={{
								display: "inline-flex",
								alignItems: "center",
								gap: "3px",
								padding: "2px 8px",
								background: "#d4d0c8",
								borderTop: "2px solid #ffffff",
								borderLeft: "2px solid #ffffff",
								borderRight: "2px solid #404040",
								borderBottom: "2px solid #404040",
								boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
								textDecoration: "none",
								fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
								fontSize: "11px",
								color: "#000",
								cursor: "default",
							}}
						>
							<span aria-hidden>{s.symbol}</span> {s.label}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
