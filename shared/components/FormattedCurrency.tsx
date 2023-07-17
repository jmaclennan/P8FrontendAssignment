import { Flex, FlexProps, Text, TextProps } from "@chakra-ui/react";
import React from "react";

type FormattedCurrencyProps = FlexProps & {
  value?: number;
  hideCents?: boolean;
};

export const FormattedCurrency: React.FC<FormattedCurrencyProps> = ({
  value,
  hideCents,
  ...props
}) => {
  if (!value) return null;

  const decimalValue = value.toString().indexOf(".");
  const hasDecimal = decimalValue > 0;

  const dollars = Math.floor(value);
  const cents = value.toString().substring(decimalValue + 1);

  return (
    <Flex {...props}>
      <Text fontSize="60%" position="relative" top=".35em">
        $
      </Text>
      <Text>{dollars.toLocaleString()}</Text>
      {!hideCents && hasDecimal && (
        <Text fontSize="50%" position="relative" top=".5em">
          {cents}
        </Text>
      )}
    </Flex>
  );
};
