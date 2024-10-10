import { Box, Flex, HStack, IconButton, useDisclosure, useColorMode, useColorModeValue, Stack, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import logo from './../../Assets/logo.png';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isFixed, setIsFixed] = useState(false);

    // Handle scroll event to toggle fixed class
    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50); // Adjust the scroll value as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Box 
                id='navbar' 
                bg={useColorModeValue('blue.100', 'blue.900')} 
                px={4} 
                   position="fixed"
                top={0} 
                width="100%" 
                zIndex={1000} // Ensure the navbar is above other content
                boxShadow={isFixed ? 'md' : 'none'} // Optional: add shadow when fixed
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <ReachLink to='/'>
                        <Box><img style={{ height: '44px' }} className='logo' src={logo} alt="logo" /></Box>
                    </ReachLink>

                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'blue.200' }} to={'/'} >Home</ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/about'}> About</ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/Feature'}>Feature</ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/contact'}>Contact</ReachLink>
                        </HStack>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </HStack>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/'} >Home</ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/about'}> About</ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/Feature'}>Feature</ReachLink>
                            <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/contact'}>Contact</ReachLink>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}