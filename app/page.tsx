import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bem-vindo ao NextJS Project
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Uma aplicação moderna construída com Next.js, TypeScript e Tailwind CSS
          </p>
          <div className="space-x-4">
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Área Administrativa
            </Link>
            <Link
              href="/admin/gestao"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Gestão
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}