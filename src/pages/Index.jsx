import { Container, VStack, Heading, Text, Button, Box, Image, HStack, IconButton, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="150px">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" textAlign="center">Full Stack Developer | JavaScript Enthusiast | Open Source Contributor</Text>
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com/yourusername" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com/in/yourusername" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com/yourusername" target="_blank" />
        </HStack>
        <Button colorScheme="blue" size="lg" as="a" href="mailto:your.email@example.com">Contact Me</Button>
      </VStack>

      <VStack spacing={4} align="start" width="100%" mt={8}>
        <Heading as="h2" size="xl">Projects</Heading>
        <Box>
          <Heading as="h3" size="md">Project 1</Heading>
          <Text>Description of project 1.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="md">Project 2</Heading>
          <Text>Description of project 2.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="md">Project 3</Heading>
          <Text>Description of project 3.</Text>
        </Box>
      </VStack>

      <Divider my={8} />

      <VStack spacing={4} align="start" width="100%">
        <Heading as="h2" size="xl">About Me</Heading>
        <Text>
          I am a full stack developer with a passion for creating web applications. I have experience in JavaScript, React, Node.js, and more.
        </Text>
      </VStack>

      <Divider my={8} />

      <VStack spacing={4} align="start" width="100%">
        <Heading as="h2" size="xl">Customer Testimonials</Heading>
        <Box>
          <Text fontStyle="italic">"John is an amazing developer! He delivered our project on time and exceeded our expectations."</Text>
          <Text>- Customer 1</Text>
        </Box>
        <Box>
          <Text fontStyle="italic">"I highly recommend John for any web development needs. He is professional and highly skilled."</Text>
          <Text>- Customer 2</Text>
        </Box>
        <Box>
          <Text fontStyle="italic">"Working with John was a great experience. He is knowledgeable and very helpful."</Text>
          <Text>- Customer 3</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;