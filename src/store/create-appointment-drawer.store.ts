import { create } from 'zustand'

export interface CreateAppointmentDrawerStore {
  isCreateAppointmentDrawerOpen: boolean
  toggleIsCreateAppointmentDrawerOpen: (isModalOpen?: boolean) => void
}

export const useCreateAppointmentDrawerStore =
  create<CreateAppointmentDrawerStore>()((set, get) => ({
    isCreateAppointmentDrawerOpen: false,
    toggleIsCreateAppointmentDrawerOpen: (isCreateAppointmentDrawerOpen) => {
      set({
        isCreateAppointmentDrawerOpen:
          typeof isCreateAppointmentDrawerOpen !== 'undefined'
            ? isCreateAppointmentDrawerOpen
            : !get().isCreateAppointmentDrawerOpen,
      })
    },
  }))
