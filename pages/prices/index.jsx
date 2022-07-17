import React from 'react'
import Footer from '../../src/components/Footer'
import NavBar from '../../src/components/NavBar'
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheckCircle, FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa';

const starterOptions = [
  { id: 1, desc: 'pregunta lo que quieras' },
  { id: 2, desc: 'Vente a navegar un dia' },
];
const MemberOptions = [
  { id: 1, desc: 'Participa en nuestros eventos' },
  { id: 2, desc: 'No navegaras solo' },
  { id: 3, desc: 'descuentos en marcas deportivas' },
  { id: 4, desc: 'y muchas cosas más'}
];

const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'space-around',
        md: 'space-between',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem width={350} key={desc.id}>
            <ListIcon  as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'} >{typePlan}</Heading>
      <Stack>
        <Button onClick={()=> window.open('https://instagram.com/onlykitegrancanaria','blank')}>
          <FaFacebook />
        </Button>
        <Button onClick={()=> window.open('https://instagram.com/onlykitegrancanaria','blank')}>
          <FaInstagram />
        </Button>
        <Button onClick={()=>{window.open('mailto:onlykite@example.com?subject=Me uno al club&body=Saludos me gustaría pertenecer al club')}}>
          <FaMailBulk />
        </Button>
      </Stack>
    </Stack>
  );
};




const index = () => {
  return (
    <>
      <NavBar/>
      <Box py={6} px={5} min={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              Vente a navegar <Text color="blue.500">disfruta</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'}>
              Aprovéchate de todas las ventajas que tendrás al forma parte de nuestro club
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Starter'} typePlan="Gratis" options={starterOptions} />
        <Divider />
        <PackageTier
          title={'Member'}
          checked={true}
          typePlan="$50.00"
          options={MemberOptions}
        />
        <Divider />
      </Stack>
    </Box>
      <Footer/>
    </>
  )
}

export default index