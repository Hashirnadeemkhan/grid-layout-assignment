export default function GridLayout() {
  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen p-4 bg-white">
      {/* Navigation - spans 2 columns on desktop, full width on mobile */}
      <nav className="col-span-12 md:col-span-2 bg-yellow-300 p-4">
        <h2 className="text-lg font-semibold">Nav</h2>
      </nav>

      {/* Main content area - spans 8 columns */}
      <div className="col-span-12 md:col-span-8 grid grid-rows-[auto_1fr_auto] gap-4">
        {/* Header */}
        <header className="bg-yellow-300 p-4">
          <h1 className="text-xl font-bold">Header</h1>
        </header>

        {/* Article */}
        <main className="bg-yellow-300 p-4">
          <h2 className="text-lg font-semibold">Article</h2>
        </main>

        {/* Footer */}
        <footer className="bg-yellow-300 p-4">
          <h2 className="text-lg font-semibold">Footer</h2>
        </footer>
      </div>

      {/* Ads Sidebar - spans 2 columns on desktop, full width on mobile */}
      <aside className="col-span-12 md:col-span-2 bg-yellow-300 p-4">
        <h2 className="text-lg font-semibold">Ads</h2>
      </aside>
    </div>
  )
}

