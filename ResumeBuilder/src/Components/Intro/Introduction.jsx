import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';
import Footer from '../../Components/Footer/Footer';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }

    return (
        <>
            <Helmet>
                <title>Resume-Builder - Create Your Resume in Minutes</title>
                <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
                <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Hardik Desai" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>

                    {
                        selectBtn
                            ? <>
                                <Heading
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                    lineHeight={'110%'}>
                                    Build resume here in{' '}
                                    <Text as={'span'} color={'blue.400'}>
                                        simple {' '}
                                    </Text>
                                    steps
                                </Heading>

                                <Text color={'gray.500'} maxW={'3xl'}>
                                    Our resume builder lets you create a stunning resume in just a few steps. Pick a template, customize it, and download your resume—all effortlessly.
                                </Text>

                                <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                    <Box className='Bullet_Points'>
                                        <Button colorScheme="blue" bg="blue.400" color="white" _hover={{ bg: 'blue.500' }}>1</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Choose a template from our professional designs.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button colorScheme="blue" bg="blue.400" color="white" _hover={{ bg: 'blue.500' }}>2</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Customize it with your information.
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button colorScheme="blue" bg="blue.400" color="white" _hover={{ bg: 'blue.500' }}>3</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            Download or share your resume instantly.
                                        </Text>
                                    </Box>
                                </Flex>
                            </>
                            : <Heading
                                m={'1.5'}
                                textAlign={{ base: 'center', md: 'start' }}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Choose a {' '}
                                <Text as={'span'} color={'blue'}>
                                    Template {' '}
                                </Text>
                                from the list
                            </Heading>
                    }
                </Stack>

                {
                    selectBtn ? 
                        <Stack>
                            <Image src={homeLogo} alt='home logo' my={'4'} />
                            <Button
                                onClick={handleSelectTemplate}
                                rounded={'full'}
                                px={6}
                                className='mb-4'
                                colorScheme={'teal'}
                                bg={'linear-gradient(135deg, #00c6ff, #0072ff)'}
                                _hover={{ bg: 'blue.800' }}>
                                Explore Template
                            </Button>
                        </Stack>
                        : <>
                            <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                                {
                                    ThemeTemplateData.map((item, index) => {
                                        return <div key={index} className="template" onClick={showTheme}>
                                            <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                        </div>
                                    })
                                }
                            </Box>
                        </>
                }
            </Container>

            {/* New Solution Section */}
            <Container maxW={'7xl'} mt={10} mb={10}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                    textAlign={'center'}
                    mb={5}
                    
                >
                    Our Solution
                </Heading>
                <Text color={'gray.600'} fontSize={'xl'} textAlign={'center'} maxW={'5xl'} mx={'auto'} mb={6}>
                    We understand the importance of having a professional resume when applying for jobs. 
                    Our solution is designed to be intuitive and efficient, allowing users to build a resume with ease. 
                    With our user-friendly platform, you can select from a variety of templates, input your details, and download a polished resume in no time.
                </Text>

                <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justifyContent={'center'}>
                    <Box p={5} shadow={'md'} borderWidth={'1px'} flex={'1'} borderRadius={'md'}>
                        <Heading fontSize={'xl'}>User-Friendly Design</Heading>
                        <Text mt={4}>
                            Our platform offers a seamless and easy-to-use interface, ensuring a smooth experience while building your resume.
                        </Text>
                    </Box>
                    <Box p={5} shadow={'md'} borderWidth={'1px'} flex={'1'} borderRadius={'md'}>
                        <Heading fontSize={'xl'}>Customizable Templates</Heading>
                        <Text mt={4}>
                            Choose from a wide range of professionally designed templates to ensure your resume stands out to employers.
                        </Text>
                    </Box>
                    <Box p={5} shadow={'md'} borderWidth={'1px'} flex={'1'} borderRadius={'md'}>
                        <Heading fontSize={'xl'}>Instant Download</Heading>
                        <Text mt={4}>
                            Once your resume is ready, you can download it instantly in your preferred format and start applying for jobs right away.
                        </Text>
                    </Box>
                </Stack>
                
            </Container>
            <Footer />
        </>
    );
}