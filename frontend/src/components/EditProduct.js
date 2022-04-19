import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const history = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      title: title,
      price: price
    });
    history('/');
  }

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  }

  return (
    <div>
      <form onSubmit={updateProduct}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Edit</button>
      </form>
    </div >
  )
}

export default EditProduct