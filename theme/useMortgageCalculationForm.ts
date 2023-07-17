/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { Data, MortgageParams } from "../pages/api/mortgageCalculation"
import { useEffect, useState } from 'react';
import { useDebounce } from 'usehooks-ts'

 const API_URL = "//localhost:3000/api/mortgageCalculation";

type useMortgageCalculationResponse = {
  data: Data
  loading: boolean
  error: boolean
}

export const useMortgageCalculation = (params: MortgageParams): useMortgageCalculationResponse => {
  const [data, setData] = useState<Data>({});
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState<boolean>(false);
  const { principal, annualInterestRate, termOfLoan } = params;

  const debouncedParams = useDebounce<MortgageParams>(params, 300);

  const fetch = async (params: MortgageParams) => {
    setLoading(true)
    setData({})
    try {
      const { data } = await axios.post(`${API_URL}?principal=${principal}&annualInterestRate=${annualInterestRate}&termOfLoan=${termOfLoan}`,)
      setData({
        monthlyPayment: String(data.monthlyPayment),
        error: data.error
      })
      setLoading(false)
      
    } catch (error) {
      setError(true)
      console.error(error)
    }
  }

  useEffect(() => {
    fetch(debouncedParams)
  }, [debouncedParams])

  return { data, loading, error }
}