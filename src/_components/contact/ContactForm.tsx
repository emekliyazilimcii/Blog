"use client";

import ContactModal from "@/_components/contact/ContactModal";
import handleFormSubmit, {
	type HandleFormSubmitInterface,
} from "@/_components/contact/handleFormSubmit";
import { type FormEvent, useState } from "react";
import { useMutation } from "react-query";

const ContactForm: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [dialogTitle, setDialogTitle] = useState<string>("");
	const [dialogMessage, setDialogMessage] = useState<string>("");

	const mutation = useMutation({
		mutationFn: async (data: HandleFormSubmitInterface) => {
			return handleFormSubmit(data);
		},
		onSuccess: (isSuccess: boolean) => {
			if (isSuccess) {
				setDialogTitle("Mesaj Alındı");
				setDialogMessage(
					"Mesajınız için teşekkürler! Yazdıklarınızı okumak için çok heyecanlıyım.",
				);
				setEmail("");
				setSubject("");
				setMessage("");
			} else {
				setDialogTitle("Gönderim Hatası");
				setDialogMessage(
					"Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
				);
			}
			setIsOpen(true);
		},
		onError: () => {
			setDialogTitle("Gönderim Hatası");
			setDialogMessage(
				"Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
			);
			setIsOpen(true);
		},
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		mutation.mutate({ Subject: subject, Comment: message, Email: email });
	};

	return (
		<>
			<ContactModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title={dialogTitle}
				message={dialogMessage}
			/>
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
							disabled={mutation.isLoading}
						>
							{mutation.isLoading ? "Gönderiliyor..." : "Mesaj Gönder"}
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
