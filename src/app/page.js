import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-indigo-800 mb-6">Welcome to Narq</h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        Simplify your payroll integration and compliance management with our powerful platform.
      </p>
      <Link 
        href="/payroll-selection" 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
      >
        Go to Payroll Selection
      </Link>
    </div>
  );
}