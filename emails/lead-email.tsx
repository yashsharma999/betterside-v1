import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface LeadEmailProps {
  name: string;
  message?: string;
  services: any[];
}

const LeadEmail: React.FC<Readonly<LeadEmailProps>> = ({
  name,
  message,
  services,
}) => {
  return (
    <Html>
      <Preview>{'New Lead!'}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
            <Heading className='text-lg'>Name</Heading>
            <Text>{name ?? 'Test Name'}</Text>
            <Heading className='text-lg'>Message</Heading>
            <Text>
              {message ??
                `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit non in rem eius totam! Aliquid dolore autem aperiam earum harum. Incidunt odit aut eius distinctio magni a illo corporis?`}
            </Text>
            <Heading className='text-lg'>Services</Heading>

            {services?.map((item) => {
              return (
                <>
                  <Text>{item.title}</Text>
                  <Text>{item.finalPrice}</Text>
                </>
              );
            })}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default LeadEmail;
