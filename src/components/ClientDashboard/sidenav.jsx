import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [currentSidebarTab, setCurrentSidebarTab] = useState('linksTab');
	const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
	//   const [isSubHeaderOpen, setIsSubHeaderOpen] = useState(false);
	const loadingRef = useRef();

	useEffect(() => {
		loadingRef.current.classList.add('hidden');
	}, []);

	return (
		<div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
			{/* Loading screen */}
			<div
				ref={loadingRef}
				className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-indigo-800"
			>
				Loading.....
			</div>

			{/* Sidebar */}
			<div className="flex flex-shrink-0 transition-all">
				{isSidebarOpen && (
					<div
						className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
						onClick={() => setIsSidebarOpen(false)}
					></div>
				)}
				{isSidebarOpen && (
					<div className="fixed inset-y-0 z-10 w-20 bg-white"></div>
				)}

				{/* Mobile bottom bar */}
				<nav
					aria-label="Options"
					className="fixed inset-x-0 bottom-0 flex flex-row-reverse items-center justify-between px-4 py-2 bg-white border-t border-indigo-100 sm:hidden shadow-t rounded-t-3xl"
				>
					{/* Menu button */}
					<button
						onClick={() => {
							setIsSidebarOpen((prev) => !prev);
							setCurrentSidebarTab('linksTab');
						}}
						className={`p-2 transition-colors rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 ${
							isSidebarOpen && currentSidebarTab === 'linksTab'
								? 'text-white bg-indigo-600'
								: 'text-gray-500 bg-white'
						}`}
					>
						<span className="sr-only">Toggle sidebar</span>
						<svg
							aria-hidden="true"
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</button>

					{/* Logo */}
					{/* <a href="#">

            KUI LOGO
            <img className="w-10 h-auto" src="https://raw.githubusercontent.com/kamona-ui/dashboard-alpine/main/public/assets/images/logo.png" alt="K-UI" />
          </a> */}

					{/* User avatar button */}
					<div className="relative flex items-center flex-shrink-0 p-2">
						<button
							onClick={() =>
								setIsSettingsPanelOpen((prev) => !prev)
							}
							className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"
						>
							<img
								className="w-8 h-8 rounded-lg shadow-md"
								src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
								alt="Ahmed Kamel"
							/>
							<span className="sr-only">User menu</span>
						</button>
						{isSettingsPanelOpen && (
							<div
								className="absolute w-48 py-1 mt-2 origin-bottom-left bg-white rounded-md shadow-lg left-10 bottom-14 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-label="user menu"
							>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Your Profile
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Settings
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Sign out
								</a>
							</div>
						)}
					</div>
				</nav>

				{/* Left mini bar */}
				<nav
					aria-label="Options"
					className="z-20 flex-col items-center flex-shrink-0 hidden w-28 py-4 bg-white border-r-2 border-indigo-100 shadow-md sm:flex rounded-tr-3xl rounded-br-3xl"
				>
					{/* Logo */}
					<Link to="/">
						<div className="flex-shrink-0 py-4">
							<img
								className="w-30 h-auto"
								src="https://res.cloudinary.com/kingbin/image/upload/v1716285882/Medcohort-removebg-preview_axhlxz.svg"
								alt="MED COHORT"
							/>
						</div>
					</Link>
					<div className="flex flex-col items-center flex-1 p-2 space-y-4">
						{/* Menu button */}
						<Link to="orders">
							<button
								onClick={() => {
									setIsSidebarOpen((prev) => !prev);
									setCurrentSidebarTab('linksTab');
								}}
								className={`p-2 transition-colors rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 ${
									isSidebarOpen &&
									currentSidebarTab === 'linksTab'
										? 'text-white bg-indigo-600'
										: 'text-gray-500 bg-white'
								}`}
							>
								<span className="sr-only">Toggle sidebar</span>
								<svg
									aria-hidden="true"
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h7"
									/>
								</svg>
								ORDERS
							</button>
						</Link>
						{/* Messages button */}
						<button
							onClick={() => {
								setIsSidebarOpen((prev) => !prev);
								setCurrentSidebarTab('messagesTab');
							}}
							className={`p-2 transition-colors rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 ${
								isSidebarOpen &&
								currentSidebarTab === 'messagesTab'
									? 'text-white bg-indigo-600'
									: 'text-gray-500 bg-white'
							}`}
						>
							<span className="sr-only">
								Toggle message panel
							</span>
							<svg
								aria-hidden="true"
								className="w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
								/>
							</svg>
							Messages
						</button>
						{/* Notifications button */}
						<Link to="/notification">
							<button
								onClick={() => {
									setIsSidebarOpen((prev) => !prev);
									setCurrentSidebarTab('notificationsTab');
								}}
								className={`p-2 transition-colors rounded-lg shadow-md focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2 ${
									isSidebarOpen &&
									currentSidebarTab === 'notificationsTab'
										? 'text-white bg-indigo-600'
										: 'text-gray-500 bg-white'
								}`}
							>
								<span className="sr-only">
									Toggle notifications panel
								</span>
								<svg
									aria-hidden="true"
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
								Notification
							</button>
						</Link>
					</div>

					{/* User avatar */}
					<div className="relative flex items-center flex-shrink-0 p-2">
						<button
							onClick={() =>
								setIsSettingsPanelOpen((prev) => !prev)
							}
							className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"
						>
							<img
								className="w-8 h-8 rounded-lg shadow-md"
								src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
								alt="Ahmed Kamel"
							/>
							<span className="sr-only">User menu</span>
						</button>
						{isSettingsPanelOpen && (
							<div
								className="absolute w-48 py-1 mt-2 origin-bottom-left bg-white rounded-md shadow-lg left-10 bottom-14 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-label="user menu"
							>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Your Profile
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Settings
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
								>
									Sign out
								</a>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Dashboard;
