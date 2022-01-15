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
  console.log(cards)
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  const handleGetUrl = () => {
    cards.map(get => get.url)
  }

  return (
    <>
      <SimpleGrid >
        <Card data={cards[0]} viewImage={handleGetUrl} />
      </SimpleGrid>

      {/* <ModalViewImage /> */}
    </>
  );
}
