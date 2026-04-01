"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/lib/navData";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState("");
	const rawPathname = usePathname();
	const pathname = rawPathname.startsWith("/blog") ? "/blog" : rawPathname;

	useEffect(() => {
		function updateTime() {
			const now = new Date();
			setTime(
				now.toLocaleTimeString(undefined, {
					hour: "2-digit",
					minute: "2-digit",
				}),
			);
		}
		updateTime();
		const id = setInterval(updateTime, 30000);
		return () => clearInterval(id);
	}, []);

	return (
		<>
			{/* Win2000 Taskbar */}
			<nav
				className="fixed top-0 left-0 z-50 w-full lg:hidden"
				style={{
					background: "#d4d0c8",
					borderBottom: "2px solid #404040",
					boxShadow: "0 2px 0 #808080",
					display: "flex",
					alignItems: "center",
					padding: "2px 4px",
					gap: "4px",
				}}
			>
				{/* Start button */}
				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
					aria-label="Open navigation menu"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "4px",
						padding: "2px 8px",
						background: open ? "#808080" : "#d4d0c8",
						borderTop: open ? "2px solid #404040" : "2px solid #ffffff",
						borderLeft: open ? "2px solid #404040" : "2px solid #ffffff",
						borderRight: open ? "2px solid #ffffff" : "2px solid #404040",
						borderBottom: open ? "2px solid #ffffff" : "2px solid #404040",
						boxShadow: open
							? "inset 1px 1px 0 #808080, inset -1px -1px 0 #dfdfdf"
							: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
						fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
						fontSize: "11px",
						fontWeight: "bold",
						color: "#000",
						cursor: "default",
					}}
				>
					<span style={{ fontSize: "14px" }}>🪟</span>
					Start
				</button>

				{/* Divider */}
				<div style={{ width: "2px", height: "20px", background: "#808080", borderRight: "1px solid #fff" }} aria-hidden />

				{/* Page title */}
				<span
					style={{
						fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
						fontSize: "11px",
						color: "#000",
						flexGrow: 1,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}
				>
					Nick Oates — {links.find((l) => l.href === pathname)?.title ?? "Page"}
				</span>

				{/* System clock */}
				<div
					style={{
						background: "#d4d0c8",
						borderTop: "1px solid #808080",
						borderLeft: "1px solid #808080",
						borderRight: "1px solid #ffffff",
						borderBottom: "1px solid #ffffff",
						padding: "2px 6px",
						fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
						fontSize: "11px",
						color: "#000",
					}}
				>
					{time}
				</div>
			</nav>

			{/* Start Menu popup */}
			{open && (
				<div
					className="fixed z-50 lg:hidden"
					style={{
						top: "32px",
						left: "4px",
						background: "#d4d0c8",
						borderTop: "2px solid #ffffff",
						borderLeft: "2px solid #ffffff",
						borderRight: "2px solid #404040",
						borderBottom: "2px solid #404040",
						boxShadow: "2px 2px 8px rgba(0,0,0,0.5), inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
						minWidth: "160px",
					}}
				>
					{/* Start menu header */}
					<div
						style={{
							background: "linear-gradient(to bottom, #0a246a, #3a5fa8)",
							padding: "8px 6px",
							writingMode: "vertical-rl",
							transform: "rotate(180deg)",
							fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
							fontSize: "14px",
							fontWeight: "bold",
							color: "#fff",
							float: "left",
							height: "100%",
							minHeight: "140px",
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
							letterSpacing: "1px",
						}}
					>
						Nick<span style={{ fontWeight: "normal", opacity: 0.8 }}>Oates</span>
					</div>
					<div style={{ marginLeft: "28px" }}>
						{links.map((link) => {
							const isActive = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setOpen(false)}
									style={{
										display: "flex",
										alignItems: "center",
										gap: "8px",
										padding: "5px 16px 5px 8px",
										textDecoration: "none",
										fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
										fontSize: "11px",
										color: isActive ? "#fff" : "#000",
										background: isActive ? "#0a246a" : "transparent",
									}}
									className={!isActive ? "hover:bg-[#0a246a] hover:text-white" : ""}
								>
									<link.Icon size={20} aria-hidden />
									{link.title}
								</Link>
							);
						})}
						<div style={{ borderTop: "1px solid #808080", margin: "2px 0" }} aria-hidden />
						<a
							href="mailto:nick@nickoates.com"
							style={{
								display: "flex",
								alignItems: "center",
								gap: "8px",
								padding: "5px 16px 5px 8px",
								textDecoration: "none",
								fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
								fontSize: "11px",
								color: "#000",
							}}
							className="hover:bg-[#0a246a] hover:text-white"
						>
							✉ Contact
						</a>
					</div>
				</div>
			)}

			{/* Backdrop to close menu */}
			{open && (
				<div
					className="fixed inset-0 z-40 lg:hidden"
					onClick={() => setOpen(false)}
					aria-hidden
				/>
			)}
		</>
	);
}
