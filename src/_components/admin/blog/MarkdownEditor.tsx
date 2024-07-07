"use client";

import Markdown from "@/_components/Markdown";
import type React from "react";
import type { Dispatch, SetStateAction } from "react";

interface MarkdownEditorProps {
	content: string;
	setContent: Dispatch<SetStateAction<string>>;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
	content,
	setContent,
}) => (
	<div className="flex flex-col min-h-screen bg-gray-100">
		<div className="flex justify-center p-4 bg-white shadow-md space-x-4">
			<div className="w-1/2 p-4">
				<h2 className="text-2xl font-bold mb-4">Markdown Editör</h2>
				<textarea
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className="w-full h-96 p-2 border border-gray-300 rounded-md"
					placeholder="Markdown içeriğinizi buraya yazın..."
				/>
			</div>
			<div className="w-1/2 p-4">
				<h2 className="text-2xl font-bold mb-4">Önizleme</h2>
				<div className=" bg-white rounded-lg shadow-md border border-gray-300 overflow-auto h-96">
					<div className="prose">
						<Markdown content={content} />
					</div>
				</div>
			</div>
		</div>
		<div className="p-4 bg-white shadow-md mt-8">
			<h2 className="text-xl font-bold mb-4">Markdown Kılavuzu</h2>
			<ul className="list-disc pl-5 space-y-2">
				<li>
					<strong>Başlıklar:</strong> Başlık seviyelerini belirtmek için{" "}
					<code>#</code> sembolünü kullanın.
					<br />
					<code># Başlık 1</code>
					<br />
					<code>## Başlık 2</code>
					<br />
					<code>### Başlık 3</code>
				</li>
				<li>
					<strong>Görüntüler:</strong> Bir görüntü eklemek için{" "}
					<code>![alt text](image_url)</code> formatını kullanın.
					<br />
					<code>![Açıklama](https://example.com/image.jpg)</code>
				</li>
				<li>
					<strong>Linkler:</strong> Bir bağlantı eklemek için{" "}
					<code>[link text](url)</code> formatını kullanın.
					<br />
					<code>[Google](https://www.google.com)</code>
				</li>
				<li>
					<strong>Kalın Metin:</strong> Metni kalın yapmak için çift yıldız veya
					çift alt çizgi kullanın.
					<br />
					<code>**kalın metin**</code> veya <code>__kalın metin__</code>
				</li>
				<li>
					<strong>İtalik Metin:</strong> Metni italik yapmak için tek yıldız
					veya tek alt çizgi kullanın.
					<br />
					<code>*italik metin*</code> veya <code>_italik metin_</code>
				</li>
				<li>
					<strong>Liste:</strong> Madde işaretli liste oluşturmak için{" "}
					<code>-</code> veya <code>*</code> kullanın.
					<br />
					<code>- madde</code>
					<br />
					<code>* madde</code>
				</li>
				<li>
					<strong>Numaralı Liste:</strong> Numaralı liste oluşturmak için rakam
					ve nokta kullanın.
					<br />
					<code>1. madde</code>
					<br />
					<code>2. madde</code>
				</li>
				<li>
					<strong>Tablolar:</strong> Tablo oluşturmak için dikey çubuk{" "}
					<code>|</code> ve çizgi <code>-</code> kullanın.
					<pre>
						<code>
							| Başlık 1 | Başlık 2 |<br />| -------- | -------- |<br />| Satır
							1 | Satır 1 |<br />| Satır 2 | Satır 2 |
						</code>
					</pre>
				</li>
				<li>
					<strong>Matematik:</strong> Matematiksel ifadeler eklemek için dolar
					işaretleri kullanın.
					<br />
					<code>$E=mc^2$</code>
				</li>
				<li>
					<strong>Öne Çıkan Kodu:</strong> Kod parçacıkları için tek tırnak, kod
					blokları için üç tırnak kullanın.
					<br />
					<code>`kod`</code>
					<br />
					<code>```kod bloğu```</code>
				</li>
				<li>
					<strong>Frontmatter:</strong> Frontmatter eklemek için üç çizgi
					kullanın.
					<br />
					<code>--- yaml or toml ---</code>
				</li>
				<li>
					<strong>Emoji:</strong> Emoji eklemek için iki nokta arasına emoji
					kısa kodu yazın.
					<br />
					<code>:smile:</code> veya <code>:heart:</code>
				</li>
				<li>
					<strong>Başlık Bağlantıları:</strong> Başlıkları bağlantı yapmak için
					süslü parantez içinde özel id kullanın.
					<br />
					<code>## Başlık {"{#custom-id}"}</code>
				</li>
				<li>
					<strong>İçindekiler:</strong> İçindekiler tablosu oluşturmak için{" "}
					<code>[toc]</code> kullanın.
					<br />
					<code>[toc]</code>
				</li>
				<li>
					<strong>Çökebilir Bölüm:</strong> Çökebilir bir bölüm oluşturmak için{" "}
					<code>
						&#60;details&#62;&#60;summary&#62;Özet&#60;/summary&#62;Detay&#60;/details&#62;
					</code>{" "}
					kullanın.
					<br />
					<code>
						&#60;details&#62;
						<br />
						&#60;summary&#62;Özet&#60;/summary&#62;
						<br />
						Detay
						<br />
						&#60;/details&#62;
					</code>
				</li>
				<li>
					<strong>Direktif:</strong> Özel direktifler oluşturmak için{" "}
					<code>:::tip\nİpucu Metni\n:::</code> kullanın.
					<br />
					<code>:::tip\nİpucu Metni\n:::</code>
				</li>
				<li>
					<strong>Alt Başlık:</strong> Alt başlıklar oluşturmak için{" "}
					<code>### Alt Başlık</code> kullanın.
					<br />
					<code>### Alt Başlık</code>
				</li>
				<li>
					<strong>Açıklama:</strong> Yorum eklemek için{" "}
					<code>{"<!-- Yorum -->"}</code> kullanın.
					<br />
					<br />
					<code>{"<!-- Yorum -->"}</code>
				</li>
				<li>
					<strong>Farklı Diller:</strong> Farklı dillerde kod blokları eklemek
					için dil belirtin.
					<br />
					<code>```language\nkod\n```</code>
				</li>
			</ul>
		</div>
	</div>
);

export default MarkdownEditor;
