import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { useSetRecoilState } from 'recoil';
import { modalState } from '../state/state';

function ModalSection({open, onClose}) {
  const setModal = useSetRecoilState(modalState);

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setModal(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setModal(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
};

export default ModalSection