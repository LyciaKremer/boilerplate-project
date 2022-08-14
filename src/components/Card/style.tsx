import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Offer = styled.div`
  display: flex;
  padding: 2.375rem;
  gap: 2.938rem;
  border-radius: 1rem;
  border-style: solid;
  border-width: 0.063rem;
  border-color: ${({ theme }) => theme.colors.greenBorder};
  background: none;
  max-width: 23.5rem;
`
export const BoxPrice = styled.div`
  display: flex;
  max-width: 23.5rem;
  margin-top: 1.375rem;
  padding: 2.375rem;
  gap: 2.938rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
`

export const BoxTestemonial = styled.div`
  display: flex;
  padding: 1.75rem;
  gap: 2.938rem;
  border-radius: 1rem;
  border-style: solid;
  border-width: 0.063rem;
  border-color: ${({ theme }) => theme.colors.grayLight2};
  background: none;
  max-width: 23.813rem;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16.875rem;
`
export const TitleBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.75rem;
`
export const BoxContent = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  gap: 1.75rem;
  margin-bottom: 1.5rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    gap: 0.625rem;
  }
`

export const BoxPriceContent = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  gap: 1.75rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    gap: 0.625rem;
  }
`

export const BoxItem = styled.div`
  display: flex;
`
export const TestemonialItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Badge = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.25rem 0.813rem;
  width: auto;
  color: ${({ theme }) => theme.colors.greenDark};
  background: ${({ theme }) => theme.colors.gradientGreen};
  font-size: ${({ theme }) => theme.typography.smaller};
`
export const Price = styled.h4`
  display: flex;
  padding: 0;
  gap: 0.375rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.smaller};
  color: ${({ theme }) => theme.colors.greenLight};

  span {
    margin: 0 0.188rem;
    display: contents;
    font-weight: 500;
    font-size: 2.125rem;
    color: ${({ theme }) => theme.colors.green};
  }
`
export const PriceCard = styled.h4`
  display: flex;
  padding: 0;
  gap: 0.375rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.small};
  color: #8e8e8e;

  span {
    margin: 0 0.188rem;
    display: contents;
    font-weight: 500;
    font-size: 2.375rem;
    color: ${({ theme }) => theme.colors.grayMedium};
  }
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.typography.small};
  gap: 0.625rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    font-size: ${({ theme }) => theme.typography.smaller};
  }
`
export const Checks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.typography.small};
`

export const PriceChecks = styled.div`
  border-radius: 0.313rem;
  background: rgba(57, 203, 98, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color: #39cb62;
  font-size: 1.375rem;
  padding: 0.25rem;
  margin-bottom: 0.313rem;
`

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.125rem 0;
  gap: 0.875rem;
`
export const NameTestimonial = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: ${({ theme }) => theme.typography.normal};
`
export const CompanyTestimonial = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grayLight3};
  font-size: ${({ theme }) => theme.typography.small};
`

export const TitlePrice = styled.div`
  display: flex;
  color: #c4c4c4;
  font-size: 1.375rem;
`

export const DescriptionTestimonial = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grayLight4};
  font-size: ${({ theme }) => theme.typography.small};
  text-align: start;
  margin-top: 1rem;
`
export const BoxButton = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`

export const BoxText = styled.div`
  border-radius: 0.5rem;
  background-color: rgba(246, 160, 42, 0.37);
  padding: 0.625rem;
  margin-bottom: 4.625rem;
`
export const Text = styled.div`
  color: #765222;
  font-size: 0.875rem;
  text-align: center;
`
