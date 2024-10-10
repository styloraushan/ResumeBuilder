import { Box, chakra, Container, Stack, Text, Image, useColorModeValue, VisuallyHidden, } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import logo from './../../Assets/logo.png';

const CurrentYear = new Date().getFullYear();
const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('blue.100', 'blue.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                textAlign={'center'}
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Image style={{ height: '44px' }} src={logo} alt="logo" />
                <Text>
            © {CurrentYear} Resume Builder, By Raushan
        </Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Github'} href={'https://github.com/styloraushan'}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton 
    label={'LinkedIn'} 
    href={'https://www.linkedin.com/in/raushan-kumar-6234312a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
>
    <FaLinkedin />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://instagram.com/stylo_raushan_the_dark__lover?igshid=OGQ5ZDc2ODk2ZA=='}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
