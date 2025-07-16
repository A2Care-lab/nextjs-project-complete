'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GestaoPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'usuarios', name: 'Usuários', icon: '👥' },
    { id: 'relatorios', name: 'Relatórios', icon: '📈' },
    { id: 'configuracoes', name: 'Configurações', icon: '⚙️' },
  ]

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <Link href="/admin" className="text-gray-400 hover:text-gray-500">
                Admin
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="text-gray-400">/</span>
                <span className="ml-4 text-sm font-medium text-gray-500">
                  Gestão
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Sistema de Gestão
        </h1>
        <p className="mt-2 text-gray-600">
          Gerencie todos os aspectos do sistema a partir deste painel
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Dashboard
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1,234</div>
                  <div className="text-sm text-blue-800">Total de Usuários</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">567</div>
                  <div className="text-sm text-green-800">Usuários Ativos</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">89</div>
                  <div className="text-sm text-yellow-800">Pendências</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-sm text-red-800">Problemas</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'usuarios' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Gerenciar Usuários
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-500">
                  Funcionalidade de gerenciamento de usuários em desenvolvimento
                </p>
              </div>
            </div>
          )}

          {activeTab === 'relatorios' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Relatórios
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-500">
                  Sistema de relatórios em desenvolvimento
                </p>
              </div>
            </div>
          )}

          {activeTab === 'configuracoes' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Configurações do Sistema
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-500">
                  Painel de configurações em desenvolvimento
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}