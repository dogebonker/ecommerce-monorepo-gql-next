import React, { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Col } from 'react-styled-flexboxgrid';
import { openModal } from '@redq/reuse-modal';
import RadioCard from 'components/RadioCard/RadioCard';
import { ProfileContext } from 'contexts/profile/profile.context';
import { DELETE_ADDRESS } from 'graphql/mutation/address';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import StripePaymentForm from '../../Payment/StripePaymentForm';
import {
  SettingsForm,
  SettingsFormContent,
  HeadingSection,
  Title,
  Input,
  Row,
  ButtonGroup,
} from './Settings.style';
import RadioGroup from 'components/RadioGroup/RadioGroup';
import PaymentGroup from 'components/PaymentGroup/PaymentGroup';
import UpdateAddress from '../../Checkout/Update/UpdateAddress';
import UpdateContact from '../../Checkout/Update/UpdateContact';
import Button from 'components/Button/Button';
import { UPDATE_ME } from 'graphql/mutation/me';
import { FormattedMessage } from 'react-intl';

type SettingsContentProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const SettingsContent: React.FC<SettingsContentProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const [updateMeMutation] = useMutation(UPDATE_ME);
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);

  const { address, contact, card } = state;
  // const addressList =
  //   address && address.length ? modifyaddressData(address) : [];

  const handleChange = (value: string, field: string) => {
    dispatch({ type: 'HANDLE_ON_INPUT_CHANGE', payload: { value, field } });
  };
  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-address-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };

  const handleEditDelete = async (item: any, type: string, name: string) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? UpdateAddress : UpdateContact;
      handleModal(modalComponent, item);
    } else {
      console.log(name, item, type, 'delete');
      switch (name) {
        case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });

          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });
        case 'contact':
          dispatch({ type: 'DELETE_CONTACT', payload: item.id });

          return await deleteContactMutation({
            variables: { contactId: JSON.stringify(item.id) },
          });
        case 'address':
          dispatch({ type: 'DELETE_ADDRESS', payload: item.id });

          return await deleteAddressMutation({
            variables: { addressId: JSON.stringify(item.id) },
          });
        default:
          return false;
      }
    }
  };

  const handleSave = async () => {
    const { name, email } = state;
    await updateMeMutation({
      variables: { meInput: JSON.stringify({ name, email }) },
    });
  };

  const handleData = (data: any) => {
    console.log(data);
  };

  return (
    <SettingsForm>
      <SettingsFormContent>
        <HeadingSection>
          <Title>
            <FormattedMessage
              id='profilePageTitle'
              defaultMessage='Your Profile'
            />
          </Title>
        </HeadingSection>
        <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
          <Col xs={12} sm={5} md={5} lg={5}>
            <Input
              type='text'
              label='Name'
              value={state.name}
              onUpdate={(value: string) => handleChange(value, 'name')}
              style={{ backgroundColor: '#F7F7F7' }}
              intlInputLabelId='profileNameField'
            />
          </Col>

          <Col xs={12} sm={5} md={5} lg={5}>
            <Input
              type='email'
              label='Email Address'
              value={state.email}
              onUpdate={(value: string) => handleChange(value, 'email')}
              style={{ backgroundColor: '#F7F7F7' }}
              intlInputLabelId='profileEmailField'
            />
          </Col>

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button
              title='Save'
              onClick={handleSave}
              style={{ width: '100%' }}
              intlButtonId='profileSaveBtn'
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='contactNumberTItle'
                    defaultMessage='Contact Numbers'
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroup
                  items={contact}
                  component={(item: any) => (
                    <RadioCard
                      id={item.id}
                      key={item.id}
                      title={item.type}
                      content={item.number}
                      checked={item.type === 'primary'}
                      onChange={() =>
                        dispatch({
                          type: 'SET_PRIMARY_CONTACT',
                          payload: item.id.toString(),
                        })
                      }
                      name='contact'
                      onEdit={() => handleEditDelete(item, 'edit', 'contact')}
                      onDelete={() =>
                        handleEditDelete(item, 'delete', 'contact')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      title='Add Contact'
                      iconPosition='right'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      type='button'
                      intlButtonId='addContactBtn'
                      onClick={() =>
                        handleModal(UpdateContact, {}, 'add-contact-modal')
                      }
                    />
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ position: 'relative' }}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='deliveryAddresTitle'
                    defaultMessage='Delivery Address'
                  />
                </Title>
              </HeadingSection>
              <ButtonGroup>
                <RadioGroup
                  items={address}
                  component={(item: any) => (
                    <RadioCard
                      id={item.id}
                      key={item.id}
                      title={item.name}
                      content={item.info}
                      name='address'
                      checked={item.type === 'primary'}
                      onChange={() =>
                        dispatch({
                          type: 'SET_PRIMARY_ADDRESS',
                          payload: item.id.toString(),
                        })
                      }
                      onEdit={() => handleEditDelete(item, 'edit', 'address')}
                      onDelete={() =>
                        handleEditDelete(item, 'delete', 'address')
                      }
                    />
                  )}
                  secondaryComponent={
                    <Button
                      title='Add Adderss'
                      iconPosition='right'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      type='button'
                      intlButtonId='addAddressBtn'
                      onClick={() =>
                        handleModal(UpdateAddress, {}, 'add-address-modal')
                      }
                    />
                  }
                />
              </ButtonGroup>
            </SettingsFormContent>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <SettingsFormContent>
              <HeadingSection>
                <Title>
                  <FormattedMessage
                    id='paymentCardTitle'
                    defaultMessage='Payments Card'
                  />
                </Title>
              </HeadingSection>
              <PaymentGroup
                name='payment'
                deviceType={deviceType}
                items={card}
                onEditDeleteField={(item: any, type: string) =>
                  handleEditDelete(item, type, 'payment')
                }
                onChange={(item: any) =>
                  dispatch({
                    type: 'SET_PRIMARY_CARD',
                    payload: item.id.toString(),
                  })
                }
                handleAddNewCard={() => {
                  handleModal(
                    StripePaymentForm,
                    { buttonText: 'Add Card' },
                    'add-address-modal stripe-modal'
                  );
                }}
              />
            </SettingsFormContent>
          </Col>
        </Row>
      </SettingsFormContent>
    </SettingsForm>
  );
};

export default SettingsContent;
