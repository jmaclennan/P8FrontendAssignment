import type { NextPage } from "next";
import { Layout } from "../shared/components/Layout";
import { MortgageCaclulationForm } from "../features/mortgageCaculationForm/MortgageCaclulationForm";

const Home: NextPage = () => {
  return (
    <Layout>
      <MortgageCaclulationForm />
    </Layout>
  );
};

export default Home;
