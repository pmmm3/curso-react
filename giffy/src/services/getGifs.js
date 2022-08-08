export default function getGifs({keyword}) {
  const url =
    'https://api.giphy.com/v1/gifs/search?api_key=sJOLgLE7uxHn9eRTpctrDj3T8HqpeJFz' +
    '&q=' +
    keyword +
    '&limit=10&offset=0&rating=g&lang=es';
  return fetch(url)
    .then(response => response.json())
    .then(res => {
      const { data } = res;
        const gifs = data.map(
            (gif) => {
                const {images, title, id} = gif
                const { url } = images.fixed_width_still
                return {title, id, url}
            }
        );
      return gifs;
    });
}