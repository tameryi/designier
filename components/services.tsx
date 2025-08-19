"use client"
import { PencilSimpleLine, Code, AirplaneTilt, MegaphoneSimple } from '@phosphor-icons/react'

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-white">What I Do</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="shimmer-border card p-6">
            <div className="flex items-center gap-3">
              <PencilSimpleLine size={24} className="text-white" />
              <h3 className="text-lg font-medium text-white">UI/UX Design</h3>
            </div>
            <p className="mt-2 text-gray-300">Designing user-friendly web and mobile applications, booking flows, and dashboards.</p>
          </div>
          <div className="shimmer-border card p-6">
            <div className="flex items-center gap-3">
              <Code size={24} className="text-white" />
              <h3 className="text-lg font-medium text-white">Frontend Development</h3>
            </div>
            <p className="mt-2 text-gray-300">Building responsive, high-performing interfaces with React, Next.js, HTML/CSS/JS.</p>
          </div>
          <div className="shimmer-border card p-6">
            <div className="flex items-center gap-3">
              <AirplaneTilt size={24} className="text-white" />
              <h3 className="text-lg font-medium text-white">Travel Tech Expertise</h3>
            </div>
            <p className="mt-2 text-gray-300">Specialized in flight, hotel, and booking platforms, from search to checkout.</p>
          </div>
          <div className="shimmer-border card p-6">
            <div className="flex items-center gap-3">
              <MegaphoneSimple size={24} className="text-white" />
              <h3 className="text-lg font-medium text-white">Brand & Marketing Design</h3>
            </div>
            <p className="mt-2 text-gray-300">Crafting landing pages, logos, and visual assets.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


