"use client";

import { useState, type FormEvent } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import axios, { type AxiosError } from "axios";

const ContactForm: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const data = {
			Subject: subject,
			Comment: message,
			Email: email,
		};

		try {
			const response = await axios.post("/contact/api", data);

			if (response.status === 200) {
				setIsOpen(true);
			} else {
				console.error("Error sending message:", response.statusText);
			}
		} catch (error) {
			const axiosError = error as AxiosError;
			if (axiosError.response) {
				console.error("Error response:", axiosError.response.data);
			} else if (axiosError.request) {
				console.error("Error request:", axiosError.request);
			} else {
				console.error("Error message:", axiosError.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50"
			>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<DialogPanel className="max-w-lg space-y-4 border border-neutral-500 bg-slate-200 p-12 rounded-xl shadow-2xl">
						<DialogTitle className="font-bold">Mesaj Alındı</DialogTitle>
						<p>
							Mesajınız için teşekkürler! Yazdıklarınızı okumak için çok
							heyecanlıyım.
						</p>
						<div className="flex gap-4">
							<button
								type="button"
								onClick={() => {
									setIsOpen(false);
									setEmail("");
									setSubject("");
									setMessage("");
								}}
								className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-slate-600 sm:w-fit hover:bg-slate-700 border"
							>
								Harika
							</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
			<section className="bg-white">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
						İletişim Formu
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
						Teknik bir sorununuz mu var? Sitede görmek istediğiniz bir şey mi
						var? Ya da sadece merhaba demek mi istiyorsunuz? İstediğiniz zaman
						yazın.
					</p>
					<form onSubmit={handleSubmit} className="space-y-8">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								E-posta adresiniz
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
								placeholder="isim@domain.com"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Konu
							</label>
							<input
								type="text"
								id="subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
								placeholder="Size nasıl yardımcı olabiliriz?"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Mesajınız
							</label>
							<textarea
								id="message"
								rows={6}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
								placeholder="Bir yorum bırakın..."
								required
							/>
						</div>
						<button
							type="submit"
							className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-slate-200 border"
							disabled={isLoading}
						>
							{isLoading ? "Gönderiliyor..." : "Mesaj Gönder"}
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
