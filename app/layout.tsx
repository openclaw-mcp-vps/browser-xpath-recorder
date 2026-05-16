import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'XPath Recorder — Record Browser Actions as Reliable XPath Selectors',
  description: 'Browser extension that records user interactions and generates robust XPath selectors for automation scripts. Built for QA engineers and automation developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="29bf2587-fc5c-40b2-9baf-bf26fa68a630"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
