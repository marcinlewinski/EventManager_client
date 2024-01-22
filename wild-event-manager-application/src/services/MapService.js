const getMap = async () => {
  const response = await fetch(`${process.env.REACT_APP_GET_MAP}`);
  if (!response.ok) {
    throw Error('Failed to fetch map!')
  }
  return await response.json();
}

export { getMap };