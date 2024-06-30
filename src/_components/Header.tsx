"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-md w-full z-50 transition-colors duration-300 sticky top-0 h-18">
			<nav
				className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-12"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<b>Emekli Yazılımcı</b>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<a
						href="/bio"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Hakkımda
					</a>
					<a
						href="/blog"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Blog Yazıları
					</a>
					<a
						href="/contact"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						İletişim
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<SearchBar placeholder="Ara" />
					{/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Log in <span aria-hidden="true">&rarr;</span>
					</a> */}
				</div>
			</nav>
			<Dialog
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<b>Emekli Yazılımcı</b>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<a
									href="/bio"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Hakkımda
								</a>
								<a
									href="/blog"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Blog Yazıları
								</a>
								<a
									href="/contact"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									İletişim
								</a>
							</div>
							<div className="py-6">
								<SearchBar placeholder="Ara" />
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
};

export default Header;
