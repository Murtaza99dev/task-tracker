import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle, BarChart3, Users, Zap, Shield, ArrowRight, Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <a href="/" className="flex items-center justify-center">
          <Clock className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Timely</span>
        </a>
        <nav className="ml-auto hidden md:flex gap-6">
        </nav>
        <div className="ml-6 flex items-center gap-2">
          <Link to="/login">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          </Link>
          <Link to="/register">
          <Button size="sm">
            Sign Up
          </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge className="w-fit">
                    ✨ New: AI-powered task suggestions
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                    Master Your Time, <span className="text-emerald-600">Achieve Your Goals</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                    Transform your productivity with Timely - the intelligent task tracker that helps you organize,
                    prioritize, and accomplish more in less time.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="ghost">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/header-banner.jpg"
                    width="600"
                    height="400"
                    alt="Timely Dashboard Preview"
                    className="rounded-xl shadow-2xl border border-gray-200"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">12 tasks completed today</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Everything you need to stay productive
                </h2>
                <p className="max-w-[900px] text-gray-600 text-lg md:text-xl leading-relaxed">
                  Powerful features designed to help you organize your work, track your progress, and achieve your goals
                  faster.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Task Management</h3>
                <p className="text-gray-600">
                  Organize tasks with intelligent categorization, priority levels, and due date tracking.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
                <p className="text-gray-600">
                  Visualize your productivity with detailed reports and insights into your work patterns.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time Tracking</h3>
                <p className="text-gray-600">
                  Automatic time tracking with detailed breakdowns of how you spend your productive hours.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600">
                  Share projects, assign tasks, and collaborate seamlessly with your team members.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is encrypted and secure with enterprise-grade security measures.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
                <p className="text-gray-600">
                  Never miss a deadline with intelligent notifications and reminder systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Boost Your Productivity by 40%</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Join thousands of professionals who have transformed their workflow with Timely. Our users report
                    significant improvements in productivity and work-life balance.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Reduce task switching by 60%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Complete 40% more tasks daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Improve focus by 50%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">Better work-life balance</span>
                  </div>
                </div>
                <Button size="lg" className="w-fit">
                  Start Your Free Trial
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="/boost-productivity.jpg"
                  width="550"
                  height="400"
                  alt="Productivity Analytics"
                  className="rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Loved by teams worldwide</h2>
                <p className="max-w-[900px] text-gray-600 text-lg leading-relaxed">
                  See what our users have to say about their experience with Timely.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Timely has completely transformed how I manage my daily tasks. I'm more organized and productive than
                  ever before."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-emerald-600">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "The analytics feature helps me understand my work patterns and optimize my schedule for maximum
                  efficiency."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">MC</span>
                  </div>
                  <div>
                    <p className="font-medium">Mike Chen</p>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Our team's collaboration has improved dramatically since we started using Timely. Highly
                  recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-600">ER</span>
                  </div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
                  Ready to take control of your time?
                </h2>
                <p className="max-w-[600px] text-emerald-100 text-lg leading-relaxed">
                  Join thousands of professionals who have already transformed their productivity with Timely.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-50"
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <button className="px-6 py-3 text-base font-medium border border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent rounded-lg transition-all duration-200">
                  Contact Sales
                </button>
              </div>
              <p className="text-sm text-emerald-100">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-emerald-600" />
          <span className="text-sm font-medium">Timely</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-4">© 2024 Timely. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="/privacy" className="text-xs hover:underline underline-offset-4 text-gray-500 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-xs hover:underline underline-offset-4 text-gray-500 transition-colors">
            Terms of Service
          </a>
          <a href="/support" className="text-xs hover:underline underline-offset-4 text-gray-500 transition-colors">
            Support
          </a>
        </nav>
      </footer>
    </div>
  )
}
