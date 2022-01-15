import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [image, setImage] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleGetUrl = () => {
    const img = cards[0].url
    setImage(img)
    onOpen()
  }

  return (
    <>
      <SimpleGrid >
        <Card data={cards[0]} viewImage={handleGetUrl} />
      </SimpleGrid>

      {isOpen && <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={image} />}
    </>
  );
}
