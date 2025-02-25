export default function Footer() {
    return (
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Narq. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }