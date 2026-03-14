import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">NDIS Self-Assessment</h1>
        <p className="text-gray-600 mb-6">
          Compliance readiness evaluation platform
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <p className="text-sm text-gray-500 mb-2">Development Status</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-gray-700">Infrastructure Setup Complete</span>
          </div>
        </div>

        <button 
          onClick={() => setCount(c => c + 1)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
        >
          Count is {count}
        </button>
        
        <p className="text-xs text-gray-400 mt-4 text-center">
          React + Vite + TypeScript + Supabase + Vercel
        </p>
      </div>
    </div>
  )
}

export default App
