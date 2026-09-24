'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Home() {
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
            <Link href="/portal" className="hover:text-cyan-400 transition">
              Team Portal
            </Link>
            <Link href="/merchandise" className="hover:text-cyan-400 transition">
              Merchandise
            </Link>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-teal-800/30 bg-black/98 px-6 py-4 flex flex-col gap-4">
            <Link href="/portal" className="hover:text-cyan-400 transition">
              Team Portal
            </Link>
            <Link href="/merchandise" className="hover:text-cyan-400 transition">
              Merchandise
            </Link>
          </div>
        )}
      </nav>

      <section className="relative min-h-[600px] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-72 overflow-hidden opacity-80">
          <div className="absolute -top-24 left-[-8%] h-72 w-[118%] -rotate-3 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-2xl" />
          <div className="absolute -top-10 left-[12%] h-64 w-[78%] rotate-6 bg-gradient-to-r from-transparent via-green-400/35 to-transparent blur-3xl" />
          <div className="absolute top-8 left-[42%] h-56 w-[45%] -rotate-12 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/northern-lights-wolf.png"
              alt="Northern Lights Hockey Logo"
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
            NORTHERN
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              LIGHTS
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">HOCKEY TEAM</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us as we bring elite hockey to the north. Experience the intensity, passion, and
            artistry of the game through the lens of the Northern Lights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal">
              <Button
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-6 px-8 text-lg"
                size="lg"
              >
                Team Portal
              </Button>
            </Link>
            <Link href="/merchandise">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold py-6 px-8 text-lg"
                size="lg"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-teal-800/30">
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/portal">
            <div className="group p-8 border border-teal-800/30 hover:border-cyan-500/50 rounded-lg bg-teal-900/5 hover:bg-cyan-500/5 transition cursor-pointer h-full">
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">Team Portal</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                Access team information, schedules, and resources for players and staff.
              </p>
            </div>
          </Link>
          <Link href="/merchandise">
            <div className="group p-8 border border-teal-800/30 hover:border-green-400/50 rounded-lg bg-teal-900/5 hover:bg-green-400/5 transition cursor-pointer h-full">
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition">Merchandise</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                Show your Northern Lights pride with our exclusive team gear and apparel.
              </p>
            </div>
          </Link>
          <div className="p-8 border border-teal-800/30 rounded-lg bg-teal-900/5">
            <h3 className="text-xl font-bold mb-3">Get Involved</h3>
            <p className="text-gray-400">
              Interested in sponsorships, partnerships, or general inquiries? Reach out to us.
            </p>
            <p className="text-cyan-400 text-sm mt-4">info@northernlightshockey.com</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-teal-800/30 bg-teal-900/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Northern Lights Hockey. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Founded in the spirit of excellence and community</p>
        </div>
      </footer>
    </div>
  )
}
