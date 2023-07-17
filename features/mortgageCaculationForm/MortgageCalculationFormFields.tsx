import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { SliderInput } from "../../shared/components/Form/SliderInput";
import { useFormContext } from "react-hook-form";
import { FormattedCurrency } from "../../shared/components/FormattedCurrency";
import { RadioGroupInput } from "../../shared/components/Form/RadioGroupInput";

type Range = {
  min: number;
  max: number;
};

const priceValueRanges: Range = {
  min: 50000,
  max: 2500000,
};
const interestValueRanges: Range = {
  min: 0.1,
  max: 25,
};
const periodValues = [20, 25, 30];

export const FormFields: React.FC = () => {
  const { getValues } = useFormContext();
  return (
    <>
      <SliderInput
        name="principal"
        aria-label="Purchase Price"
        min={priceValueRanges.min}
        max={priceValueRanges.max}
        minLabel="$50K"
        maxLabel="$2.5M"
        labelValue={
          <FormattedCurrency
            value={Number(getValues("principal"))}
            fontSize="3xl"
            color="gray.600"
            fontWeight="semibold"
          />
        }
      />
      <SliderInput
        name="annualInterestRate"
        aria-label="Interest Rate"
        min={interestValueRanges.min}
        max={interestValueRanges.max}
        minLabel="0.1%"
        maxLabel="25%"
        step={0.1}
        labelValue={
          <Text
            fontSize="3xl"
            color="gray.600"
            fontWeight="semibold"
            pl=".35em"
          >
            {getValues("annualInterestRate")}%
          </Text>
        }
      />
      <RadioGroupInput
        name="termOfLoan"
        aria-label="Period"
        periodValues={periodValues}
      />
    </>
  );
};
