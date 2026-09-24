function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-t border-white/15 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-sm font-medium">Milan Stanojević</p>
            <p className="mt-1 text-sm leading-6 text-white/60">
              Frontend-focused Full-Stack Developer
            </p>
          </div>
          <p className="text-xs leading-6 text-white/60">© 2026 Milan Stanojević</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
