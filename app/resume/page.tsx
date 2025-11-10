import Link from 'next/link'

export const metadata = {
	title: 'Resume | Shyam Kumar Chandru Y',
}

export default function ResumePage() {
	return (
		<main className="min-h-screen bg-black pt-20 pb-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-center justify-between mb-6">
					<h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
						Resume
					</h1>
					<Link
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-purple-500 transition-colors"
					>
						<span>Download PDF</span>
					</Link>
				</div>

				<div className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl shadow-blue-500/10">
					{/* Use embed to render the PDF when supported */}
					<div className="aspect-[1/1.414] w-full hidden md:block">
						<iframe
							title="Resume PDF"
							src="/resume.pdf"
							className="w-full h-full"
						/>
					</div>
					{/* Mobile fallback - full height viewer */}
					<div className="block md:hidden h-[80vh]">
						<iframe
							title="Resume PDF"
							src="/resume.pdf"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>
		</main>
	)
}


