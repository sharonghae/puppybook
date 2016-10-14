export const FETCH_PUPPIES = 'FETCH_PUPPIES';
export const FETCH_SINGLE_PUPPY = 'FETCH_SINGLE_PUPPY';

export const fetchPuppies = (puppies) => {
	return {
		type: FETCH_PUPPIES,
		fetchedPuppies: puppies
	}
}

export const asyncFetchPuppies = () => 
	dispatch => 
		fetch('/api/puppies')
		.then((res) => res.json())
		.then(puppies => {
			console.log(puppies);
			dispatch(fetchPuppies(puppies));
		})
		.catch((error) => console.log(error));
	

export const fetchSinglePuppy = (puppy) => ({
	type: FETCH_SINGLE_PUPPY,
	fetchedSinglePuppy: puppy
})

export const asyncFetchSinglePuppy = (puppyId) =>
	dispatch => 
		fetch(`/api/puppies/${puppyId}`)
		.then((res) => res.json())
		.then(puppy => {
			console.log(puppy);
			dispatch(fetchSinglePuppy(puppy));
		})
		.catch((error) => console.log(error));


