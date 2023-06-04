'use client'

import DoctorsImage from '@/assets/images/doctors.png'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { BiTimeFive } from 'react-icons/bi'
export interface AppointmentCardProps {
  name: string
  startDate: Date
}

export function AppointmentCard(props: AppointmentCardProps) {
  const slot = dayjs(props.startDate)

  return (
    <Flex
      flexDir="column"
      // justifyContent="space-between"
      minH="200px"
      w="full"
      bgColor="gray.50"
      rounded="md"
      gap={4}
      pb={4}
      shadow="lg"
      overflow="hidden">
      <Box position="relative">
        <Image src={DoctorsImage} alt="" placeholder="blur" />
      </Box>
      <Box px={4}>
        <Heading as="h3" size="md">
          {props.name}
        </Heading>
        <Text>{slot.format('MMM D, YYYY')}</Text>
        <Flex w="full">
          <Flex flex={1} alignItems="center" gap={1}>
            <BiTimeFive />
            <Text>{`From: ${slot.format('ha')}`}</Text>
          </Flex>
          <Flex flex={1} px={4} alignItems="center" gap={1}>
            <BiTimeFive />
            <Text>{`To: ${slot.add(1, 'h').format('ha')}`}</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
