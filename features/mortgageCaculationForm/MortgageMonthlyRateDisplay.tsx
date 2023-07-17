import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Data } from "../../pages/api/mortgageCalculation";
import { FormattedCurrency } from "../../shared/components/FormattedCurrency";

type MorgtageMonthlyRateDisplayProps = {
  data: Data;
  loading: boolean;
  error: boolean;
};

export const MorgtageMonthlyRateDisplay: React.FC<
  MorgtageMonthlyRateDisplayProps
> = ({ data, loading, error }) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      bg="white"
      borderRadius="30px"
      shadow="2xl"
      px={12}
      pt={12}
      color="text-lighter"
      mt={[4, 4, 0]}
      h="100%"
    >
      <Stack spacing={[2, 2, 2, 4]} alignItems="center" color="text-light">
        {error && (
          <Alert
            status="error"
            flexDirection="column"
            textAlign="center"
            borderRadius="lg"
          >
            <Stack spacing={2}>
              <Flex justifyContent="center">
                <AlertIcon />
                <AlertTitle>Unable to calculate!</AlertTitle>
              </Flex>
              <AlertDescription>The server returned an error.</AlertDescription>
            </Stack>
          </Alert>
        )}

        {!error && (
          <>
            <Text fontWeight="bold" fontSize="lg" fontFamily="heading">
              Your total monthly payment will be
            </Text>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minHeight="145px"
            >
              {!error && loading && (
                <Spinner
                  w={32}
                  h={32}
                  borderWidth={16}
                  speed="1.5s"
                  color="gray.300"
                />
              )}
              {!!data.monthlyPayment && (
                <>
                  <Box
                    fontSize={["6xl", "6xl", "7xl"]}
                    fontWeight="bold"
                    color="gray.600"
                  >
                    <FormattedCurrency value={Number(data.monthlyPayment)} />
                  </Box>
                </>
              )}
            </Flex>

            <Text fontWeight="bold" fontSize="lg">
              /month
            </Text>
          </>
        )}
      </Stack>
      <Flex justifyContent="center" mb="-2em" mt={[4, 4, 4, 12]}>
        <Button
          colorScheme="purple"
          borderRadius="2em"
          fontSize="xl"
          py={8}
          px={10}
        >
          Apply Today
        </Button>
      </Flex>
    </Flex>
  );
};
