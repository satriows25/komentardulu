import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { createSite } from '@/lib/db';

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const { register, handleSubmit } = useForm();
  const onCreateSite = (values) => {
    createSite(values);
    onClose();
  };

  return (
    <>
      <Button variant="solid" size="md" onClick={onOpen}>
        Tambah Situs Pertamamu
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Tambah Situs</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nama</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Situs saya"
                {...register('site', { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                {...register('url', { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Batal
            </Button>
            <Button backgroundColor="#99FFFE" color="#194D4C" type="submit">
              Tambah
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
