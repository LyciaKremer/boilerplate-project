import { Container } from 'react-bootstrap'

import Image from 'next/image'
import Link from 'next/link'

import * as S from './style'

const FirstSection = () => {
  return (
    <>
      <S.Section>
        <Container>
          <S.Content>
            <S.Infos>
              <S.Title>Boilerplate</S.Title>
              <S.Details>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                molestias perspiciatis a corporis? Similique, sunt. Natus sint
                quibusdam est quam harum velit aspernatur iusto! Corrupti fugiat
                at facilis exercitationem ea.
              </S.Details>
              <Link href="/">Link</Link>
            </S.Infos>
            <Image
              src="/Website-Creator-cuate.svg"
              alt="img"
              width={540}
              height={563}
            />
          </S.Content>
        </Container>
      </S.Section>
    </>
  )
}

export default FirstSection
