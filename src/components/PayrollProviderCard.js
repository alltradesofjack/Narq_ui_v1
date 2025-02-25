export default function PayrollProviderCard({ name, logo, isSelected, onClick }) {
    return (
      <div 
        className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
          isSelected 
            ? 'border-indigo-500 bg-indigo-50' 
            : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
        }`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            {/* This would be the logo in a real app */}
            {name.charAt(0)}
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </div>
    );
  }