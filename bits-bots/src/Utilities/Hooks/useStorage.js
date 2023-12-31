/**
 * Local storage hook
 * @returns a user
 */
function useStorage() {
  const userBody = JSON.parse(localStorage.getItem('userBody'));

  return { userBody };
}

export default useStorage;
