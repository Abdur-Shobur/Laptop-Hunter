function DeleteLaptops() {
  // delete laptop by laptop id
  const delete_func = async (e) => {
    return fetch(`http://localhost:5000/laptops?id=${e}`, {
      method: 'DELETE',
    })
  }
  return { delete_func }
}

export default DeleteLaptops
