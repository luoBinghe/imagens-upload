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
      <ModalContent maxWidth="900px" maxHeight="600px" bgColor="pGray.800">
        <ModalBody>
          <Image src={imgUrl} alt="image" />
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
