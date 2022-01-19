import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface Image {
  title: string,
  description: string,
  url: string,
  ts: number,
  id: string
}

interface GetImageResponse {
  after: string;
  data: Image[];
}

export default function Home(): JSX.Element {

  async function fetchImages({ pageParam=null }): Promise<GetImageResponse> {
    const { data } = await api('/api/images', {
      params: {
        after: pageParam
      }
    })

    return data
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', fetchImages, {
      getNextPageParam: (lastPage) => lastPage?.after || null
    });

  const formattedData: any = useMemo(() => {
    const form = data?.pages.map((obj) => {
      return obj.data.map((inf) => {
        return {
          ...inf
        }
      }) 
    }).flat()

    return form
  }, [data]);

  if(isLoading && !isError){
    return <Loading />
  }

  if(!isLoading && isError){
    return <Error />
  }

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
