const Product = require('../model/product.schema');

const getAllProducts = async (req, res) => {
  const Alltypes = ['shirt', 'shoes', 'accessory'];
  const { type } = req.query;
  try {
    if (type) {
      if (Alltypes.includes(type)) {
        const partOfProducts = await Product.find({ type });
        console.log(partOfProducts);
        return res.status(200).json(partOfProducts);
      } else {
        return res.status(404).json({ msg: 'product not found' });
      }
    } else {
      const AllProducts = await Product.find({});
      res.status(200).json(AllProducts);
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
  }
};

const getSinglePorduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const signleProduct = await Product.findById(id);
      res.status(200).json(signleProduct);
      return;
    } else {
      res.status(404).json({ msg: 'product not found' });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const insertMany = async (req, res) => {
  const all = [
    {
      type: 'accessory',
      name: 'Asics Gel-Kayano 27',
      description:
        'Stable and supportive running accessory for long-distance runs.',
      price: 160,
      image:
        ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5Zj7SLC9GOTYifxtznFAD44EwSqoPFKr5g&s',
    },
    {
      type: 'accessory',
      name: 'Converse Chuck Taylor All Star',
      description: 'Classic canvas sneakers with a high-top design.',
      price: 55,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxCQHbS_RX2mpeQQ6te_xvGbTgdTn2qArNQ&s',
    },
    {
      type: 'accessory',
      name: 'Vans Old Skool',
      description:
        'Skate accessory with the iconic side stripe and durable construction.',
      price: 60,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTntjmawxhXMpq8pulJmWF5bqchXQOEdNuSw&s',
    },
    {
      type: 'accessory',
      name: 'Under Armour HOVR Phantom 2',
      description:
        'High-performance training accessory with advanced cushioning.',
      price: 140,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3YdNGZUQcv_2IrdIHxgWQLJ1JRo8zH1elrg&s',
    },
    {
      type: 'accessory',
      name: 'Brooks Ghost 13',
      description:
        'Versatile running accessory with smooth transitions and cushioning.',
      price: 130,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sxc9TqXM35tJwb-6UsSvZPdIupbLkwz7rw&s',
    },
    {
      type: 'shirt',
      name: 'Asics Gel-Kayano 27',
      description:
        'Stable and supportive running shirt for long-distance runs.',
      price: 160,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvSiP20fh4wddTiRNz4hkHuAmsJZw_FYAfQ&s',
    },
    {
      type: 'shirt',
      name: 'Converse Chuck Taylor All Star',
      description: 'Classic canvas sneakers with a high-top design.',
      price: 55,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LSR5v0Fat5n6IqSFossFVAmblDcsEuIPFA&s',
    },
    {
      type: 'shirt',
      name: 'Vans Old Skool',
      description:
        'Skate shirt with the iconic side stripe and durable construction.',
      price: 60,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX3yQjLAMx_eumhguaU-ODpb2kyt87lxseA&s',
    },
    {
      type: 'shirt',
      name: 'Under Armour HOVR Phantom 2',
      description: 'High-performance training shirt with advanced cushioning.',
      price: 140,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEskkEsgaaMnUV6zBHUvPreeAMP2vxv1E2A&s',
    },
    {
      type: 'shirt',
      name: 'Brooks Ghost 13',
      description:
        'Versatile running shirt with smooth transitions and cushioning.',
      price: 130,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchJBVDfclAO5BCf97p-rMEHF_7l-gRHouDg&s',
    },
    {
      type: 'shoes',
      name: 'Nike Air Max 270',
      description:
        'Comfortable and stylish sneakers perfect for everyday wear.',
      price: 150,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPXtKaI_X9X6jCUjcalBROebkMqvF3l2Qtw&s',
    },
    {
      type: 'shoes',
      name: 'Adidas Ultraboost 21',
      description: 'High-performance running shoes with excellent cushioning.',
      price: 180,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIby92ooeEK8eyVewbENqMRl1US3HZpF2N0w&s',
    },
    {
      type: 'shoes',
      name: 'Puma RS-X3',
      description:
        'Retro-inspired sneakers with bold design and comfortable fit.',
      price: 110,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZFnInrzZpqFqn2R3I4Dt5VQo2VZrV7Lg8A&s',
    },
    {
      type: 'shoes',
      name: 'Reebok Classic Leather',
      description: 'Timeless leather sneakers with a minimalist design.',
      price: 75,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEZCB7y6LXWni1ACWf4h57-Ct9LjbX5ewJg&s',
    },
    {
      type: 'shoes',
      name: 'New Balance 990v5',
      description: 'Iconic running shoes with superior comfort and durability.',
      price: 175,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPP5letp-8ItRXn7RCN12nN3bjh3RsTiN8TA&s',
    },
  ];

  try {
    const insertedData = await Product.insertMany(all);
    res.status(200).json(insertedData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  insertMany,
  getSinglePorduct,
};
