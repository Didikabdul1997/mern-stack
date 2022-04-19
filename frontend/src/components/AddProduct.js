import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const history = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products', {
      title: title,
      price: price
    });
    history('/');
  }

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">price</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" name="price" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div >
  )
}

export default AddProduct