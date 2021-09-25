import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import SiteFooter from 'components/SiteFooter/SiteFooter';
import Accordion from 'components/Accordion/Accordion';
import { FormattedMessage } from 'react-intl';

const accor = [
  {
    id: 1,
    intlTitleId: 'faqNo1Title',
    intlDetailsId: 'faqNo1Desc',
  },
  {
    id: 2,
    intlTitleId: 'faqNo2Title',
    intlDetailsId: 'faqNo2Desc',
  },
  {
    id: 3,
    intlTitleId: 'faqNo3Title',
    intlDetailsId: 'faqNo3Desc',
  },
  {
    id: 4,
    intlTitleId: 'faqNo4Title',
    intlDetailsId: 'faqNo4Desc',
  },
];

const Heading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
`;

const HelpPageWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 130px 0 60px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`;

export const HelpPageContainer = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`;

export default function() {
  return (
    <Modal>
      <Head>
        <title>PickBazar</title>
      </Head>
      <HelpPageWrapper>
        <HelpPageContainer>
          <Heading>F.A.Q</Heading>
          <Accordion items={accor} />
        </HelpPageContainer>

        <SiteFooter style={{ marginTop: 50 }}>
          <FormattedMessage
            id='siteFooter'
            defaultMessage='Pickbazar is a product of'
          />
          &nbsp; <a href='#'>Redq, Inc.</a>
        </SiteFooter>
      </HelpPageWrapper>
    </Modal>
  );
}
