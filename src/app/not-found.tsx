import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
			<h1 className="text-4xl font-bold text-gray-900 mb-4">
				404 - Sayfa Bulunamadı
			</h1>
			<pre className="text-sm text-gray-800 leading-none mb-6">
				{`
              ,     ,
             (\\____/)
              (_oo_)
                (O)
              __||__    \\)
         []/______\\[] /
         / \\______/ \\/
        /    /__\\
       (\\   /____\\
        ~    ~  ~  ?
        `}
			</pre>
			<p className="text-center text-gray-700 mb-8">
				Of! Görünüşe göre kayboldunuz. Sizi tekrar doğru yola yönlendirelim.
			</p>
			<Link
				href="/"
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Ana Sayfaya Git
			</Link>
		</div>
	);
};

export default NotFoundPage;
