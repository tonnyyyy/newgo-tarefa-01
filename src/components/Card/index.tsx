import { Card as ChakraCard, CardBody, CardHeader, CardFooter, Heading, Text, Box } from '@chakra-ui/react';

interface InfoCardProps {
  title?: string | React.ReactNode;
  content: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

const Card: React.FC<InfoCardProps> = ({ title, content, footer }) => {
  return (
    <Box
      borderRadius='10px'
      bgColor='var(--primary-dark)'
      textAlign='center' 
      transition='.2s'
      _hover={{
        transition: '.2s',
        boxShadow: 'inset 0 -5px var(--font-dark)'
      }}
    >
    <ChakraCard>
      <CardHeader p={3}>
        <Heading size='md' color='var(--font-dark)'>{title}</Heading>
      </CardHeader>
      <CardBody p={3} color='var(--font-dark)' textAlign='justify'>{content}</CardBody>
      {footer && (
        <CardFooter p={3}>{footer}</CardFooter>
      )}
    </ChakraCard>
    </Box>
  );
}

export default Card;