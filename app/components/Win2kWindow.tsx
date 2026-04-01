import React from "react";
import clsx from "clsx";

interface Win2kWindowProps {
	title: string;
	icon?: string;
	children: React.ReactNode;
	className?: string;
	headerAction?: React.ReactNode;
}

export default function Win2kWindow({
	title,
	icon,
	children,
	className,
	headerAction,
}: Win2kWindowProps) {
	return (
		<div
			className={clsx("win-window", className)}
			role="region"
			aria-label={title}
		>
			{/* Title bar */}
			<div className="win-titlebar flex items-center justify-between">
				<div className="flex items-center gap-1">
					{icon && (
						<span style={{ fontSize: "13px", lineHeight: 1 }} aria-hidden>
							{icon}
						</span>
					)}
					<span
						style={{
							fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
							fontSize: "11px",
							fontWeight: "bold",
							color: "#fff",
							textShadow: "1px 1px 0 #00008b",
						}}
					>
						{title}
					</span>
				</div>

				<div className="flex items-center gap-1">
					{headerAction && (
						<div style={{ marginRight: "6px" }}>{headerAction}</div>
					)}
					{/* Window chrome buttons */}
					<WinButton aria-label="Minimize" title="Minimize">_</WinButton>
					<WinButton aria-label="Maximize" title="Maximize">□</WinButton>
					<WinButton aria-label="Close" title="Close" style={{ fontWeight: "bold" }}>✕</WinButton>
				</div>
			</div>

			{/* Menu bar simulation */}
			<div
				style={{
					background: "#d4d0c8",
					borderBottom: "1px solid #808080",
					padding: "2px 4px",
					display: "flex",
					gap: "2px",
					fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
					fontSize: "11px",
				}}
			>
				{["File", "Edit", "View", "Help"].map((item) => (
					<span
						key={item}
						style={{
							padding: "1px 6px",
							cursor: "default",
							color: "#000",
						}}
						className="hover:bg-[#0a246a] hover:text-white"
					>
						{item}
					</span>
				))}
			</div>

			{/* Content area */}
			<div
				style={{
					background: "#ffffff",
					margin: "4px",
					padding: "8px",
					border: "2px solid #404040",
					borderRight: "2px solid #ffffff",
					borderBottom: "2px solid #ffffff",
					boxShadow: "inset 1px 1px 0 #808080",
					minHeight: "40px",
				}}
			>
				{children}
			</div>

			{/* Status bar */}
			<div
				style={{
					background: "#d4d0c8",
					borderTop: "1px solid #808080",
					padding: "2px 8px",
					display: "flex",
					justifyContent: "space-between",
					fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
					fontSize: "11px",
					color: "#000",
				}}
			>
				<span>Ready</span>
				<span style={{ borderLeft: "1px solid #808080", paddingLeft: "8px" }}>nickoates.com</span>
			</div>
		</div>
	);
}

function WinButton({
	children,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type="button"
			style={{
				width: "16px",
				height: "14px",
				background: "#d4d0c8",
				borderTop: "1px solid #ffffff",
				borderLeft: "1px solid #ffffff",
				borderRight: "1px solid #404040",
				borderBottom: "1px solid #404040",
				boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
				color: "#000",
				fontSize: "9px",
				lineHeight: 1,
				cursor: "default",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
				userSelect: "none",
				flexShrink: 0,
			}}
			{...props}
		>
			{children}
		</button>
	);
}
