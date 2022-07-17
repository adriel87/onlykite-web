import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NavBar from '../../src/components/NavBar';
import Footer from '../../src/components/Footer'

export default function index() {
  Footer
  return (
    <>
    <NavBar/>
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: '2xl', md: '4xl' }}
        textAlign={'justify'}
        maxW={'3xl'}>
        Nuestra historia, el origen:
      </Text>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'justify'}
        maxW={'3xl'}>
        Todo comienza una tarde, después de darnos un bañazo con las condiciones 
        perfectas viendo a gente aprendiendo y viéndonos disfrutar con su avance 
        nos hicimos una pregunta, la cual era muy sencilla su respuesta, y era el 
        por que no hace un club  para unificar a todos los que disfrutamos de esto, 
        que nos conozcan y nos ayudemos entre todos a diversificar este deporte, 
        ayudar a los que empiezan como nosotros hicimos, hacer que se sientan como
        en casa, nos ayuden a mejorar y plantear acciones de mejoras en spot de
        las isla,  organicemos jornadas de limpieza de litoral, atraigamos a 
        personas de edad avanzada a que disfruten de la playa y el sol, 
        hagamos acciones benéficas para ayudar a los que mas lo necesitan, 
        pensábamos y sabemos que juntos somos mas, por eso decidimos crear 
        Onlykite Gran Canaria, un club en el cual queremos que no te sientas solo
        , que navegues con nosotros, que disfrutes junto a nosotros, que aportes
        ideas y soluciones, porque todos los que formamos parte del equipo somos 
        mas que amigos, ya que somo una familia que crece por dia y queremos mas, 
        si te identificas con nosotros puedes unirte y disfrutar. 
       

      </Text>
      <Text
        fontSize={{ base: 'xl', md: '4xl' }}
        textAlign={'justify'}
        maxW={'3xl'}
        bgGradient={'linear(to-r, blue.200, green.200)'}
        padding={'3'}
        borderRadius={'md'}>
           #Nosvemosenelagua
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
          size={'2xl'}
        />

        <Text fontWeight={600}>Raul el de planta 8</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          President
        </Text>
      </Box>
    </Stack>
    <Footer/>
    </>
  );
}