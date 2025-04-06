// 1. Create an empty array to hold the chunks
// 2. Set a starting index to keep track of where we are in the original array
// 3. Loop thought the original array as long as the index hasn't reached the end
// 4. Extract a chunk of the desired size from the original array
// 5. Add the extracted chunk to the 'chunked' array
// 6. Move the index forward by the chunk size to get to the next chunk
// 7. Return the final array of chunks

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
