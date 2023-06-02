import { SimpleGrid, Skeleton } from '@chakra-ui/react'

export function AppointmentsCardSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
      <Skeleton height="200px" rounded="md" />
      <Skeleton height="200px" rounded="md" />
      <Skeleton height="200px" rounded="md" />
      <Skeleton height="200px" rounded="md" />
    </SimpleGrid>
  )
}
