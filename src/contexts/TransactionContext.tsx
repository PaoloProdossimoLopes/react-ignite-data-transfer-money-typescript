import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTrasactionRequest {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  timestamp: string
}

interface TransactionContextType {
  transactions: Transaction[]
  isFetching: boolean
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTrasactionRequest) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isFetching, setIsFetching] = useState(true)

  async function fetchTransactions(query?: string) {
    setIsFetching(true)

    const response = await api.get('/transaction', {
      params: {
        _sort: 'timestamp',
        _order: 'desc',
        q: query,
      },
    })

    const json = response.data
    setTransactions(json)

    setIsFetching(false)
  }

  async function createTransaction(data: CreateTrasactionRequest) {
    setIsFetching(true)

    const response = await api.post('/transaction', { ...data })
    setTransactions((state) => [...state, response.data])

    setIsFetching(false)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, isFetching, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
