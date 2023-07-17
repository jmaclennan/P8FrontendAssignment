import { GridItem, SimpleGrid, Stack } from "@chakra-ui/react";
import { FormFields } from "./MortgageCalculationFormFields";
import { useMortgageCalculation } from "../../theme/useMortgageCalculationForm";
import { FormProvider, useForm } from "react-hook-form";
import { MortgageParams } from "../../pages/api/mortgageCalculation";
import { useState } from "react";
import { MorgtageMonthlyRateDisplay } from "./MortgageMonthlyRateDisplay";
import { MortgageFormCalculationHeader } from "./MortgageCalculationFormHeader";

const defaultValues: MortgageParams = {
  principal: 250000,
  annualInterestRate: 1.5,
  termOfLoan: 25,
};

export const MortgageCaclulationForm: React.FC = () => {
  const form = useForm({ defaultValues });
  const [values, setValues] = useState<MortgageParams>(defaultValues);
  form.watch((values) => setValues(values as MortgageParams));

  const { data, loading, error } = useMortgageCalculation(values);

  return (
    <FormProvider {...form}>
      <form>
        <SimpleGrid columns={12} spacing={4} pb={16}>
          <GridItem colSpan={12}>
            <Stack spacing={2} py={[2, 2, 8]}>
              <MortgageFormCalculationHeader />
            </Stack>
          </GridItem>
          <GridItem colSpan={[12, 12, 12, 5]}>
            <FormFields />
          </GridItem>
          <GridItem
            colSpan={[12, 12, 12, 6]}
            colStart={["auto", "auto", "auto", 7]}
          >
            <MorgtageMonthlyRateDisplay
              data={data}
              loading={loading}
              error={error}
            />
          </GridItem>
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};
