import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen onClose={onClose} >
      <ModalOverlay />
      <ModalContent maxWidth={900} maxHeight={700} bgColor="pGray.800">
        <ModalBody w="100%">
          <Image src={imgUrl} alt="image" />
        </ModalBody>
        <ModalFooter w="100%" display="flex" justifyContent="flex-start">
          <Link href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
