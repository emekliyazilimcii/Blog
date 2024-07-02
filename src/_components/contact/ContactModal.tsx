import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
	isOpen,
	onClose,
	title,
	message,
}) => (
	<Dialog open={isOpen} onClose={onClose} className="relative z-50">
		<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
			<DialogPanel className="max-w-lg space-y-4 border border-neutral-500 bg-slate-200 p-12 rounded-xl shadow-2xl">
				<DialogTitle className="font-bold">{title}</DialogTitle>
				<p>{message}</p>
				<div className="flex gap-4">
					<button
						type="button"
						onClick={onClose}
						className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-slate-600 sm:w-fit hover:bg-slate-700 border"
					>
						Tamam
					</button>
				</div>
			</DialogPanel>
		</div>
	</Dialog>
);

export default ContactModal;
