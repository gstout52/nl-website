'use client'

import Link from 'next/link'
import { ArrowLeft, Menu, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    name: 'Aurora Home Jersey',
    price: '$129.00',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260923_122331-l0z1u7iDDaJhzw9crB6vuOtjHKWRDJ.jpg',
  },
  {
    name: 'Northern Lights Away Jersey',
    price: '$129.00',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260923_122331-l0z1u7iDDaJhzw9crB6vuOtjHKWRDJ.jpg',
  },
  {
    name: 'Team Crest Tee',
    price: '$42.00',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260923_122250-1Z6c1KaAkmIM1KfEjMp21SSrBMHbhc.png',
  },
]

export default function MerchandisePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-50 border-b border-teal-800/30 bg-black/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center">
              <span className="text-black font-bold text-lg">NL</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">Northern Lights</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-teal-900/30 rounded"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link href="/portal" className="hover:text-cyan-400 transition">
              Team Portal
            </Link>
            <span className="text-cyan-400">Merchandise</span>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-teal-800/30 bg-black/98 px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link href="/portal" className="hover:text-cyan-400 transition">
              Team Portal
            </Link>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition mb-12"
        >
          <ArrowLeft size={18} /> Back to home
        </Link>
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.24em] text-sm font-bold mb-3">
              Official team store
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Wear the{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                light.
              </span>
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
            <ShoppingBag size={18} /> 0 items
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group rounded-lg overflow-hidden border border-teal-800/30 bg-teal-900/10"
            >
              <div className="aspect-square bg-white/95 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-bold">{product.name}</h2>
                  <p className="text-cyan-400 mt-1">{product.price}</p>
                </div>
                <button className="rounded-full border border-cyan-400/60 px-4 py-2 text-xs font-bold uppercase tracking-wide hover:bg-cyan-400 hover:text-black transition">
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-teal-800/30 bg-teal-900/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Northern Lights Hockey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
