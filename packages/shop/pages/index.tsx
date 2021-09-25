import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withApollo } from 'helper/apollo';
import Banner from 'containers/Banner/Banner';
import StoreNav from 'components/StoreNav/StoreNav';
import Carousel from 'components/Carousel/Carousel';
import Sidebar from 'containers/Sidebar/Sidebar';
import Products from 'containers/Products/Products';
import CartPopUp from 'containers/Cart/CartPopUp';
import { openModal, Modal } from '@redq/reuse-modal';
import LocationModal from 'containers/LocationModal/LocationModal';
import { getCookie } from 'components/helpers/session';

import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'styled/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import BannerImg from 'image/grocery.png';

import storeType from 'constants/storeType';

const PAGE_TYPE = 'grocery';

function HomePage({ deviceType }) {
  const targetRef = React.useRef(null);
  const { query } = useRouter();

  React.useEffect(() => {
    const modalTimer = setTimeout(() => {
      if (!getCookie('zip_code') && !getCookie('first_visit')) {
        openModal({
          show: true,
          overlayClassName: 'quick-view-overlay',
          closeOnClickOutside: true,
          component: LocationModal,
          // closeComponent: "div",
          config: {
            enableResizing: false,
            disableDragging: true,
            className: 'quick-view-modal',
            width: 458,
            height: 'auto',
          },
        });
      }
    }, 1800);
    return () => {
      clearTimeout(modalTimer);
    };
  }, []);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>PickBazar</title>
      </Head>
      <Modal>
        <Banner
          intlTitleId='groceriesTitle'
          intlDescriptionId='groceriesSubTitle'
          imageUrl={BannerImg}
        />

        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <OfferSection>
              <div style={{ margin: '0px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}

        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default withApollo(HomePage);
