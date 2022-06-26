import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { useSWRConfig } from 'swr';
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
  useToast,
} from '@chakra-ui/react';

import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const AddSiteModal = ({ children }) => {
  const { user } = useAuth();
  const { mutate } = useSWRConfig();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const toast = useToast();

  const { register, handleSubmit, reset } = useForm();
  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    };

    createSite(newSite);
    toast({
      title: 'Sukses!',
      description: 'Kami telah menyimpan situsmu.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    mutate(
      '/api/sites',
      async (data) => {
        return { sites: [...data.sites, newSite] };
      },
      false,
    );
    reset({
      name: '',
      url: '',
    });
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)',
        }}
      >
        {children}
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
                {...register('name', { required: true })}
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
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
