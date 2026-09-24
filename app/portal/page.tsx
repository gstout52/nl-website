'use client'

import Link from 'next/link'
import { Calendar, FileText, Menu, Settings, Users, X } from 'lucide-react'
import { useState } from 'react'

const sections = [
  {
    icon: Calendar,
    title: 'Schedule',
    description: 'View upcoming games and practice times',
    href: '#schedule',
    color: 'cyan' as const,
  },
  {
    icon: Users,
    title: 'Roster',
    description: 'Team roster and player information',
    href: '#roster',
    color: 'green' as const,
  },
  {
    icon: FileText,
    title: 'Resources',
    description: 'Team documents and guidelines',
    href: '#resources',
    color: 'purple' as const,
  },
  {
    icon: Settings,
    title: 'Settings',
    description: 'Account and notification preferences',
    href: '#settings',
    color: 'blue' as const,
  },
]

const colorStyles = {
  cyan: 'border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/5',
  green: 'border-green-500/30 hover:border-green-400 hover:bg-green-500/5',
  purple: 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/5',
  blue: 'border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/5',
}

const iconHover = {
  cyan: 'group-hover:text-cyan-400',
  green: 'group-hover:text-green-400',
  purple: 'group-hover:text-purple-400',
  blue: 'group-hover:text-blue-400',
}

export default function PortalPage() {
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
            <Link href="/merchandise" className="hover:text-cyan-400 transition">
              Merchandise
            </Link>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-teal-800/30 bg-black/98 px-6 py-4 flex flex-col gap-4">
            <Link href="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
            <Link href="/merchandise" className="hover:text-cyan-400 transition">
              Merchandise
            </Link>
          </div>
        )}
      </nav>

      <section className="border-b border-teal-800/30 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Team{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Portal
            </span>
          </h1>
          <p className="text-xl text-gray-400">Access team information, schedules, and resources</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <a
                key={section.title}
                href={section.href}
                className={`group p-8 border rounded-lg bg-teal-900/5 transition cursor-pointer ${colorStyles[section.color]}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg bg-teal-900/30 mb-4 ${iconHover[section.color]} transition`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition">
                  {section.description}
                </p>
              </a>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        <div id="schedule" className="border-t border-teal-800/30 pt-12">
          <h2 className="text-3xl font-bold mb-6">Upcoming Schedule</h2>
          <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-8 text-center text-gray-400">
            <p>
              Schedule data will be populated here. Check back for game times and practice sessions.
            </p>
          </div>
        </div>
        <div id="roster" className="border-t border-teal-800/30 pt-12">
          <h2 className="text-3xl font-bold mb-6">Team Roster</h2>
          <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-8 text-center text-gray-400">
            <p>
              Team roster and player profiles will appear here. Complete player information and stats
              available to authenticated users.
            </p>
          </div>
        </div>
        <div id="resources" className="border-t border-teal-800/30 pt-12">
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-8 text-center text-gray-400">
            <p>
              Team guidelines, documents, and resources for players and staff will be available here.
            </p>
          </div>
        </div>
        <div id="settings" className="border-t border-teal-800/30 pt-12 pb-12">
          <h2 className="text-3xl font-bold mb-6">Account Settings</h2>
          <div className="bg-teal-900/20 border border-teal-800/30 rounded-lg p-8 text-center text-gray-400">
            <p>
              Manage your account preferences, notifications, and communication settings here.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-teal-800/30 bg-teal-900/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2026 Northern Lights Hockey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
