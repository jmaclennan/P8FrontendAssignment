import { Heading, Text } from "@chakra-ui/react";

export const MortgageFormCalculationHeader: React.FC = () => {
  return (
    <>
      <Heading as="h1" fontSize="2xl" color="gray.600" fontWeight="semibold">
        Get started with Digital Credit Experience
      </Heading>
      <Text color="text-light" fontSize="sm">
        Qualify or apply for your mortgage in minutes
      </Text>
    </>
  );
};
