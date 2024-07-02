"use client";

import ContactForm from "@/_components/contact/ContactForm";
import { QueryClient, QueryClientProvider } from "react-query";

const Home = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<ContactForm />
		</QueryClientProvider>
	);
};

export default Home;
