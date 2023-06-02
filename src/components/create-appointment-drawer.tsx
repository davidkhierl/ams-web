import { CreateAppointmentForm } from '@/components/forms/create-appointment-form'
import { useCreateAppointmentDrawerStore } from '@/store/create-appointment-drawer.store'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react'

export function CreateAppointmentDrawer() {
  const isCreateAppointmentDrawerOpen = useCreateAppointmentDrawerStore(
    (state) => state.isCreateAppointmentDrawerOpen
  )
  const toggleIsCreateAppointmentDrawerOpen = useCreateAppointmentDrawerStore(
    (state) => state.toggleIsCreateAppointmentDrawerOpen
  )

  const onClose = () => {
    toggleIsCreateAppointmentDrawerOpen(false)
  }

  return (
    <Drawer
      isOpen={isCreateAppointmentDrawerOpen}
      placement="right"
      onClose={onClose}
      size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create new appointment</DrawerHeader>
        <DrawerBody>
          <CreateAppointmentForm />
          <VStack>
            <Button variant="outline" w="full" onClick={onClose}>
              Cancel
            </Button>
          </VStack>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
