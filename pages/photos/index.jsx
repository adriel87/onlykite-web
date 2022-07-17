import React from 'react'
import Footer from '../../src/components/Footer'
import NavBar from '../../src/components/NavBar'
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { Link, Button, Image } from '@chakra-ui/react';

import {photosList} from '../../src/db/photosList'


const index = () => {
  return (
      <>
        <NavBar/>
        <Box textAlign="center" py={10} px={6}>
            <Text
            fontSize={{base:'2xl', md:'5xl'}}
            >
            📷
            </Text>
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Mira quienes somos y como lo pasamos
            </Heading>
            <Text color={'gray.500'}>
              no dudes y ven con nosotros
            </Text>

            <Button colorScheme='teal' variant='outline'>
              <Link
                href='prices'
                textDecoration={'none'}
              >Únete</Link>
    
            </Button>
        </Box>
        
        <SimpleGrid maxWidth={720} minChildWidth='150px' spacing='50px'  margin={'auto'} marginBottom={'20'}>
        {
            photosList.map((photo,index)=>{
              return (
                <>
                <Box height='150px'>
                 <Image 
                      key={index} 
                      src={photo} 
                      alt='Dan Abramov'
                      width={200}/>
                </Box>
                </>
              
            )
        })
      }
      </SimpleGrid>

     
        <Footer/>
      </>
  )
}

export default index