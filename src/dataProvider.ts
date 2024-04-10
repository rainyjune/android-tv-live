import useSWR from 'swr';

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export function useMenu() {
  const {data, error, isLoading} = useSWR(
    `https://yuan-projects.github.io/YuanPlayer/demo/tvmenu.json`,
    fetcher,
    {
      fallbackData: [],
    },
  );

  return {
    menu: data,
    isMenuLoading: isLoading,
    isMenuError: error,
  };
}

export function useChannels(apiURL) {
  const {data, error, isLoading} = useSWR(apiURL, fetcher, {
    fallbackData: [],
  });

  return {
    channels: data,
    isChannelListLoading: isLoading,
    isChannelListError: error,
  };
}
