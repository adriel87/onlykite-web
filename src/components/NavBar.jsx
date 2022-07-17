import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['🌊 Inicio 🌊', '🤔 Sobre nosotros', '📸 fotos del club', 'Apúntate al club 🤙'];
const listLinks = [
  '',
  'about',
  'photos',
  'prices'
]

const NavLink = ( {name, url} ) => (
  <Link
    fontSize={'xl'}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${url}`}>
    {name}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

//TODO position fixed or absolute para dejar la barra fijada arriba
  return (
    <>
      <Box bg={'#80D0BA'} px={4} > 
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link,index) => (
                <NavLink key={link} name={Links[index]} url={listLinks[index]} >{link}</NavLink>
              ))}
            </HStack>
          </HStack>
         
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((_,index) => (
                <NavLink  key={_} name={Links[index]} url={listLinks[index]}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}