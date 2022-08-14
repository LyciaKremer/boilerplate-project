import Image from 'next/image'

import * as S from './style'

interface CardProps {
  name: string
  company: string
  description: string
}

const Testemonial = (props: CardProps) => {
  return (
    <>
      <S.BoxTestemonial>
        <S.Box>
          <S.TestemonialItem>
            <S.NameTestimonial>{props.name}</S.NameTestimonial>
            <Image src="/starts.svg" alt="estrelas" width={100} height={20} />
          </S.TestemonialItem>

          <S.CompanyTestimonial>{props.company}</S.CompanyTestimonial>
          <S.DescriptionTestimonial>
            {props.description}
          </S.DescriptionTestimonial>
        </S.Box>
      </S.BoxTestemonial>
    </>
  )
}

export default Testemonial
