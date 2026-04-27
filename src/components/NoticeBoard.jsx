import React from 'react'
import { FiBell } from 'react-icons/fi'

const notices = [
  '📢 Admission Open for 2026-27 — All Classes (Nursery to Class 12)',
  '🏆 Annual Sports Day — 15 May 2026 — Parents are Welcome',
  '📝 Fee Concession Available for Deserving Students — Enquire Now',
  '🎓 Result Declared — Class 10 students achieved 100% pass rate!',
  '📅 Parent-Teacher Meeting — 2nd Saturday of every month',
  '🌟 New Computer Lab Inaugurated — Smart Learning for All Students',
]

export default function NoticeBoard() {
  return (
    <div className="bg-navy-800 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex items-center gap-2 bg-amber-500 px-4 py-1 flex-shrink-0 z-10">
          <FiBell className="w-4 h-4 animate-pulse-slow" />
          <span className="text-xs font-bold font-body uppercase tracking-wide whitespace-nowrap">
            Notice Board
          </span>
        </div>

        {/* Ticker */}
        <div className="flex-1 overflow-hidden relative">
          <div className="ticker-animate whitespace-nowrap inline-block">
            {notices.map((n, i) => (
              <span key={i} className="text-sm font-body text-blue-100 mx-8">
                {n}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {notices.map((n, i) => (
              <span key={`dup-${i}`} className="text-sm font-body text-blue-100 mx-8">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
