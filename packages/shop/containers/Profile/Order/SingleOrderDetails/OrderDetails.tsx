import React from 'react';
import Table from 'rc-table';
import {
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTable,
} from './OrderDetails.style';
import Progress from 'components/ProgressBox/ProgressBox';
import { CURRENCY } from 'helper/constant';
import { FormattedMessage } from 'react-intl';

type OrderDetailsProps = {
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: string;
  subtotal?: number;
  discount?: number;
  deliveryFee?: number;
  grandTotal?: number;
};

const components = {
  table: OrderTable,
};

const OrderDetails: React.FC<OrderDetailsProps> = ({
  tableData,
  columns,
  address,
  progressStatus,
  progressData,
  subtotal,
  discount,
  deliveryFee,
  grandTotal,
}) => {
  return (
    <>
      <DeliveryInfo>
        <DeliveryAddress>
          <h3>
            <FormattedMessage
              id='deliveryAddresTitle'
              defaultMessage='Delivery Address'
            />
          </h3>
          <Address>{address}</Address>
        </DeliveryAddress>

        <CostCalculation>
          <PriceRow>
            <FormattedMessage id='subTotal' defaultMessage='Sub total' />
            <Price>
              {CURRENCY}
              {subtotal}
            </Price>
          </PriceRow>
          <PriceRow>
            <FormattedMessage
              id='intlOrderDetailsDiscount'
              defaultMessage='Discount'
            />
            <Price>
              {CURRENCY}
              {discount}
            </Price>
          </PriceRow>
          <PriceRow>
            <FormattedMessage
              id='intlOrderDetailsDelivery'
              defaultMessage='Delivery Fee'
            />
            <Price>
              {CURRENCY}
              {deliveryFee}
            </Price>
          </PriceRow>
          <PriceRow className='grandTotal'>
            <FormattedMessage id='totalText' defaultMessage='Total' />
            <Price>
              {CURRENCY}
              {grandTotal}
            </Price>
          </PriceRow>
        </CostCalculation>
      </DeliveryInfo>

      <ProgressWrapper>
        <Progress data={progressData} status={progressStatus} />
      </ProgressWrapper>

      <Table
        columns={columns}
        data={tableData}
        rowKey={record => record.id}
        components={components}
        // scroll={{ y: 250 }}
      />
    </>
  );
};

export default OrderDetails;
