import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ErrorPage = () => {
  return (
    <>
    <Flex bgColor={""} alignItems={"center"} justifyContent={"center"} minH={{base:"",lg:"100vh"}}>
        <Text fontSize={"40px"}>OOps 404 not found</Text>
    </Flex>
    </>
  )
}

export default ErrorPage