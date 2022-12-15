import { Card as ChakraCard, CardBody, CardHeader, CardFooter, Heading } from '@chakra-ui/react';

interface InfoCardProps {
  title?: string | React.ReactNode;
  content: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

const Card: React.FC<InfoCardProps> = ({ title, content, footer }) => {
  return (
    <ChakraCard bgColor='var(--primary-dark)' >
      <CardHeader p={3}>
        <Heading size='md' color='var(--font-dark)'>{title}</Heading>
      </CardHeader>
      <CardBody p={3} color='var(--font-dark)'>{content}</CardBody>
      {footer && (
        <CardFooter p={3}>{footer}</CardFooter>
      )}
    </ChakraCard>
  );
}

export default Card;