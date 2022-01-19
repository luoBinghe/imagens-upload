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

  const handleGetUrl = (url) => {
    setImage(url)
    onOpen()
  }
  console.log('cards', cards)
  return (
    <>
      <SimpleGrid columns={3} spacing={4}>
        {cards.slice(0, 6).map((item) => (
          <Card key={item.id} data={item} viewImage={() => handleGetUrl(item.url)} />
        ))
        }
      </SimpleGrid>

      {isOpen && <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={image} />}
    </>
  );
}
