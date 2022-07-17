import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import InfoClub from './InfoClub';

// const iconList= [MdKitesurfing, MdOutlineFastfood, BiHappyHeartEyes]

const iconColor={
    image:[
        'yellow.500',
        'green.500',
        'purple.500'
    ],
    bgMin:[
        'yellow.100',
        'green.100',
        'purple.100'
    ],
    bgMax:[
        'yellow.900',
        'green.900',
        'purple.900'
    ]
}


function TwoColumnInfo({tag, mainText, iconList, imgUrl}) {

  const router = useRouter()
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {tag}
            </Text>
            <Heading>{mainText.one}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
             {mainText.two}
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
            {mainText.three}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

              {mainText.list.map((activitie,index)=>(
                  
                  
                  <InfoClub
                  key={activitie}
                  icon={
                    <Icon as={iconList[index]} color={iconColor.image[index]} w={5} h={5} />
                  }
                  iconBg={useColorModeValue(iconColor.bgMin[index], iconColor.bgMax[index])}
                  text={activitie}
                />
                  
              ))}
              {/* <InfoClub
                icon={
                  <Icon as={MdKitesurfing} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Practica kite'}
              />
              <InfoClub
                icon={<Icon as={BiHappyHeartEyes} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Disfruta haciendo lo que amas'}
              />
              <InfoClub
                icon={
                  <Icon as={MdOutlineFastfood} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Vente a nuestros eventos'}
              /> */}
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'un tipo con cometa'}
              src={imgUrl}
              objectFit={'cover'}
            />
          </Flex>
            <Button colorScheme='teal' variant='outline' onClick={()=> router.push('/prices')}>
                {mainText.caption}
            </Button>
        </SimpleGrid>
      </Container>
    );
  }

  export default TwoColumnInfo;