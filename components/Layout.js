import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
	return (
		<>
			<div className="mb-8 gap-8 lg:my-20 lg:flex lg:flex-row">
				<Navbar />

				<Sidebar />

				<main className="mt-24 grow lg:mt-0">{children}</main>
			</div>
		</>
	);
}
