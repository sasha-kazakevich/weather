const getServices = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Error ${res.status}`)
  }

  return await res.json();
}

export default getServices;