import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';


const dataT = {
  pages: [
    {
      data: [
        {
            title: "Doge",
            description: "The best doge",
            url: "https://i.ibb.co/K6DZdXc/minh-pham-LTQMgx8t-Yq-M-unsplash.jpg",
            ts: 1620222828340000,
            "id": "294961059684418048"
        },
        {
            title: "Cachorrinho gif",
            description: "A Gracie é top",
            url: "https://i.ibb.co/r3NbmgH/ezgif-3-54a30c130cef.gif",
            ts: 1620222856980000,
            id: "295991055792210435"
        },
        {
            title: "React",
            description: "Dan Abramov",
            url: "https://i.ibb.co/864qfG3/react.png",
            ts: 1620223108460000,
            id: "295991069654385154"
        },
      ],
    }
  ]
}

const pageParams = [ null ]

export default function Home(): JSX.Element {

  const axiosFetch = ({ pageParams=null }) => {
    return pageParams
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', axiosFetch, {
      getNextPageParam: (after) => after !== null ? after : null
    });

  const formattedData: any = useMemo(() => {
    const form = dataT.pages.map((obj) => {
      return obj.data.map((inf) => {
        return {
          ...inf
        }
      }) 
    }).flat()

    return form
  }, [data]);

  return (
    <>
      <Header />
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        { isLoading && <Loading />}
        { isError && <Error /> }
      </Box>
    </>
  );
}
