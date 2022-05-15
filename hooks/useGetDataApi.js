import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useGetDataApi(api) {
	const { data, error } = useSWR('api/' + api, fetcher);

	return {
		data: data,
		isLoading: !error && !data,
		isError: error
	};
}
