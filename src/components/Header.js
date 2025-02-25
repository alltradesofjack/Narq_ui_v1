import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Narq
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/payroll-selection" className="hover:text-indigo-200">
                Payroll Selection
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-indigo-200">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-indigo-200">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}