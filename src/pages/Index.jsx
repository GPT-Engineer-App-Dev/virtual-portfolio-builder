import { Container, Text, VStack, Heading, Button, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="150px">
          <Image src="/profile.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" textAlign="center">Full Stack Developer | Tech Enthusiast | Open Source Contributor</Text>
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com/johndoe" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com/in/johndoe" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com/johndoe" target="_blank" />
        </HStack>
        <Button colorScheme="teal" size="lg" as="a" href="#contact">Contact Me</Button>
      </VStack>
    </Container>
  );
};

export default Index;