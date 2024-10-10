import React from 'react';
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Footer from '../../Components/Footer/Footer';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Resume Builder</title>
        <meta name="description" content="Get in touch with us for any inquiries about our Resume Builder platform." />
        <meta name="keywords" content="resume builder, contact, get in touch" />
        <meta name="author" content="Raushan Kumar" />
        <meta property="og:title" content="Contact - Resume Builder" />
        <meta property="og:description" content="Get in touch with us for any inquiries about our Resume Builder platform." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Flex
        bg={useColorModeValue('gray.50', 'gray.800')}
        align="center"
        justify="center"
        id="contact"
        py={16}
        px={4}>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          rounded="lg"
          boxShadow="lg"
          mt={10}
          maxW="lg"
          w="full">
          <Heading as="h2" fontSize="2xl" textAlign="center" mb={6}>
            Contact Us
          </Heading>
          <chakra.form method="POST">
            <FormControl id="name" isRequired mb={4}>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" placeholder="Enter your name" focusBorderColor="#63B3ED" />
            </FormControl>

            <FormControl id="email" isRequired mb={4}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Enter your email" focusBorderColor="#63B3ED" />
            </FormControl>

            <FormControl id="message" isRequired mb={6}>
              <FormLabel>Your Message</FormLabel>
              <Textarea placeholder="Enter your message" focusBorderColor="#63B3ED" rows={5} />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" w="full">
              Send Message
            </Button>
          </chakra.form>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}