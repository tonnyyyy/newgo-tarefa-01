import { Heading, HeadingProps } from "@chakra-ui/react"

interface ITitleProps extends HeadingProps {
  text: string;
}

const Title: React.FC<ITitleProps> = ({ text, ...props }) => {
  return (
    <Heading size={props.size || 'xl'} textAlign='center' p={props.p || 1} pb={props.pb || 10} {...props}>{text}</Heading>
  )
}

export default Title;