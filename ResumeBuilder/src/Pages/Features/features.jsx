import React from 'react';
import { Avatar, Box, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Footer from '../../Components/Footer/Footer';

// Features data for the Resume Builder Website
const features = [
  {
    "title": "Customizable Templates",
    "description": "Choose from a variety of professional templates to create a standout resume that fits your industry and experience level.",
    "icon": "https://cdn-icons-png.flaticon.com/128/6863/6863985.png" // Placeholder icon, you can use any icon or image
  },
  {
    "title": "Intuitive Design Tools",
    "description": "Easy-to-use design tools allow you to adjust the layout, fonts, and colors to make your resume unique.",
    "icon": "https://cdn-icons-png.flaticon.com/128/3159/3159289.png"
  },
  {
    "title": "Auto-Suggestions",
    "description": "Get smart suggestions for job titles, skill sets, and descriptions to help you fill out your resume quickly.",
    "icon": "https://img.icons8.com/doodle/48/000000/idea.png"
  },
  {
    "title": "One-Click Export",
    "description": "Download your resume as a PDF or share it directly through email with just one click.",
    "icon": "https://img.icons8.com/doodle/48/000000/share.png"
  }
];

// Feature card component
function FeatureCard({ title, description, icon }) {
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '37px',
        width: '41px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url(${icon})`,
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
      }}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.h3 fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={20} color={useColorModeValue('gray.700', 'gray.50')}>
          {title}
        </chakra.h3>
        <chakra.p
          color={useColorModeValue('gray.500', 'gray.50')}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pt={4}>
          {description}
        </chakra.p>
      </Flex>
      <Avatar src={icon} height={'80px'} width={'80px'} alignSelf={'center'} m={{ base: '0 0 35px 0', md: '0 0 0 50px' }} />
    </Flex>
  );
}

export default function Features() {
  return (
    <>
      <Helmet>
        <title>Features - Resume Builder</title>
        <meta name="description" content="Explore the features of our Resume Builder platform, designed to help you create professional resumes effortlessly." />
        <meta name="keywords" content="resume builder, features, templates, design tools, auto-suggestions, export" />
        <meta name="author" content="Raushan Kumar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Features - Resume Builder" />
        <meta property="og:description" content="Explore the features of our Resume Builder platform, designed to help you create professional resumes effortlessly." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h3
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={20}
            mt={8}
            
            textTransform={'uppercase'}
            color={'blue'}>
            Features
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Resume Builder
          </chakra.h1>
          <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            Create a professional resume in minutes with these powerful features!
          </chakra.h2>
        </Box>

        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={16}
          mb={10}
          mx={'auto'}>
          {features.map((feature, index) => (
            <FeatureCard {...feature} key={index} />
          ))}
        </SimpleGrid>

       
      </Flex>
      <Footer />
    </>
  );
}