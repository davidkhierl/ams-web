export interface User {
  /**
   * User id
   */
  id: string
  /**
   * User name
   */
  name: string
  /**
   * User email
   */
  email: string
  /**
   * User type
   */
  type: UserType
  /**
   * User created date
   */
  created_at: Date
  /**
   * User updated date
   */
  updated_at: Date
}

export type UserType = 'PATIENT' | 'DOCTOR' | 'ADMIN'
