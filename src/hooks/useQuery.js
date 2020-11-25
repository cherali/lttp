import { useLocation } from 'react-router-dom'

export function useQuery(key) {
  const q = new URLSearchParams(useLocation().search)
  return key ? q.get(key) : q
}