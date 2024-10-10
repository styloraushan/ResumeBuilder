import { Avatar, chakra, Flex, SimpleGrid, useColorModeValue, Heading, Text, VStack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Footer from '../../Components/Footer/Footer';

// Sample testimonials
const testimonials = [
    {
        name: "Raushan Kumar",
        role: "Full Stack Developer",
        content: "A resume builder website simplifies the process of creating a professional resume, offering customizable templates and design tools.",
        avatar: "https://avatars.githubusercontent.com/u/142259385?v=4"
    },
    {
        name: "Anjali Sharma",
        role: "HR Manager",
        content: "I was impressed with the variety of templates. It made my job so much easier when reviewing applicants' resumes.",
        avatar: "https://avatars.githubusercontent.com/u/142259386?v=4"
    },
    {
        name: "Rahul Verma",
        role: "Software Engineer",
        content: "The Resume Builder helped me create a professional resume that truly represented my skills and experience. I landed an interview within a week!",
        avatar: "data:image/jpeg;base64,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"
    },
    {
        name: "Rekha Singh",
        role: "Job Seeker",
        content: "Thanks to the resume builder, I landed my dream job! The suggestions and formatting options are top-notch.",
        avatar: "data:image/jpeg;base64,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"
    }
];

// Testimonial Card component
function TestimonialCard(props) {
    const { name, role, content, avatar } = props;
    return (
        <Flex
            boxShadow={'lg'}
            maxW={'640px'}
            direction={{ base: 'column-reverse', md: 'row' }}
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
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcElEQVR4nO2aS4icRRDHO9FENL5F12gyM9Uzq2EVXxs8qQGNiIgY0UtEFESF+AARfEQP8XERCWgEEURBPUSIYEBBWSPOflWzu0lcD8r4FjW7U/XtJiGHNS7JxvhJf5sM2ddMf4+ei/2DZpjTv7qqvq7u6lbK4/F4PB6Px+PxeDyeTBRozzkQ8IOA8rFG+QKQX1oxOHKuckUULYIaXw8kWwC5CiRbS4HcoDpNsTp+IZC8oYkPapJoxkD5cdWuxnm5CkbRIk18jyb+bq4eHy2T3Kc6wrboJE38DBD/NceQEwYgv5yXZKW/cbVG3t1Sj2TfisGRU5VLCkEIGnmolSEnZEFfLumO8jwgT1lpDoSXK1foILwRUPZbGRIP3pZF79LavjOAZLu1HvK/5aCxUrmgHPAdgHI4iTGa5Na0esXqH2dbZ1qeGTcfOghvs07B6cgfLCM/rlLS1Rcu08S7kkwekL/SA+EFKm9KNHolIE9YRn3MlMBCsHd5asEoWhyXUzu9o5r4UyC+Wbmgqy9cBsi/WaTeJBBvrHz2yylZNXUQPmWZZf3FAV6Vz0wXQBO/aWHMt7p/tFvlQJnCy4DkUJtUnwLix0x1yENzQcokvdMp1qru8udmpVY5EX/HrSc/obFxk+oEmri/zeS/hyC81ox4k5JxATJVpm1VQdlg9OLg9I929w5HS5QLSihrEpWfZoTMHoE/gkDuWlONTk6iCSTDyfV4CpC/1iibugdHLs7NAUCyNY0DZo2fgRprbfR0TVZn1YvLNPLmzFvhys79Z7ZbiKzHdJl6IqfF1s4RJN9kOokCyt15GdP8dknub+kA5D9z1STeuXyYT0vlAI3ybr7GxGvDYcDGJQuVvrz1jmXClnQOIP7BkUHb59MrIT/kRo+PVFB6Ek2+pzp+uib+x4VBZsy3cwPkt1zpaZK3EzkAcPQKh8aYqLwwR5PkS4eaB3rq9aWJTn3aoQPMCW+OJspPjjWvS5AB8ohTY1AmTTttRo8PZdJt1oWP2juA+EW30YgjUmhGf8eBs1zrAcrr1g7QyJtdG2T6C8f1zPbVvQP4PfsMQHnNtUHFWuOqpsOJCx1wwPtJMuBp5wYNjXUd1zMNFJdlN9YjecXeAcR3Oo7G1IxF0Mk2ePZofxZpsrK256Jje3dXxgRqFkDyoVMH1GS1SoJuc/uS0QHPzqO33mHGjZsmayIHlEkedmIMyaHSgBQXaLyOu9HkV1VSeoejJZr4906ezuw7wYmiP1FBOV+loRTwLe0aogknP9LKGFMN0rTEWg6UDSoLGmVTToZMmiamzaVrsnvHlprvqDwA4o1ZqgIQ7zUNVls9c1zO+vmZ43Wu3WKgxu2A8msKY3YUq2Epsd7QWJcm/iDpJ2icDdR4QLmgp15fGvfk4+cofKRF6v2tUT4x1+hZNcsBXxO355DH2kS8bt4P5HlB0/49EDXWAsq9gPKkeSlinqaYSTt5nRFFi80aUkZeZ462gPyc+TX/02SYx+PxeDwej8fj8aj/M/8ByHuRf3qbe+AAAAAASUVORK5CYII=")`,
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
                <chakra.p
                    color={useColorModeValue('gray.500', 'gray.50')}
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}>
                    {content}
                </chakra.p>
                <chakra.p fontFamily={'Work Sans'} color={useColorModeValue('gray.700', 'gray.50')} fontWeight={'bold'} fontSize={14}>
                    {name}
                    <chakra.span
                        fontFamily={'Inter'}
                        fontWeight={'medium'}
                        color={'gray.500'}>
                        {' '}- {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
            <Avatar
                src={avatar}
                height={'80px'}
                width={'80px'}
                alignSelf={'center'}
                m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
            />
        </Flex>
    );
}

// About page component
export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us - Resume Builder</title>
                <meta name="description" content="Learn more about our Resume Builder platform, features, and user success stories." />
            </Helmet>
            <VStack
  spacing={10}
  p={8}
  bg={useColorModeValue('gray.50', 'gray.800')}
  align="center"
  mt={10} // Add margin-top here
>
  <Heading as="h1" size="xl" textAlign="center">
    About Us
  </Heading>
  <Text fontSize="lg" maxW="600px" textAlign="center">
    Welcome to our Resume Builder platform! We aim to simplify the process of creating stunning, professional resumes tailored to your needs. Our user-friendly interface, customizable templates, and innovative design tools empower job seekers to craft resumes that stand out in today’s competitive job market.
  </Text>
  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </SimpleGrid>
</VStack>
<Footer />
        </>
    );
}