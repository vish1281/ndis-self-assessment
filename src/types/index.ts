export interface User {
  id: string
  email: string
  created_at: string
}

export interface Organization {
  id: string
  name: string
  abn: string
  created_at: string
  updated_at: string
}

export interface Assessment {
  id: string
  organization_id: string
  status: 'draft' | 'in_progress' | 'completed'
  started_at: string
  completed_at?: string
  created_at: string
}
