const User = require('../model/user.schema');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
    return;
  } catch (error) {
    res.status(404).json(error);
  }
};
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const signleUser = await User.findById(id);
      res.status(200).json(signleUser);
      return;
    } else {
      res.status(404).json({ msg: 'user not found' });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const createUser = async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).json(deletedUser);
      return;
    } else {
      res.status(404).json({ msg: 'user not found' });
      return;
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const updatedUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(updatedUser);
      return;
    } else {
      res.status(404).json({ msg: 'user not found' });
      return;
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const insertMany = async (req, res) => {
  const usersArray = [
    {
      email: 'john.doe@gmail.com',
      password: 'password123',
      role: 'user',
    },
    {
      email: 'jane.smith@gmail.com',
      password: 'password456',
      role: 'user',
    },
    {
      email: 'mike.johnson@gmail.com',
      password: 'password789',
      role: 'user',
    },
    {
      email: 'emily.davis@gmail.com',
      password: 'password000',
      role: 'user',
    },
    {
      email: 'david.brown@gmail.com',
      password: 'password111',
      role: 'user',
    },
    {
      email: 'sarah.wilson@gmail.com',
      password: 'password222',
      role: 'user',
    },
    {
      email: 'chris.moore@gmail.com',
      password: 'password333',
      role: 'user',
    },
    {
      email: 'laura.taylor@gmail.com',
      password: 'password444',
      role: 'user',
    },
    {
      email: 'daniel.martin@gmail.com',
      password: 'password555',
      role: 'user',
    },
    {
      email: 'anna.jackson@gmail.com',
      password: 'password666',
      role: 'user',
    },
  ];

  try {
    const inesrtAllUsers = await User.insertMany(usersArray);
    // const inesrtAllUsers = await User.create({
    //   email: 'jasem@gmail.com',
    //   password: 'jasem1234',
    //   role: 'admin',
    // });
    res.status(201).json(inesrtAllUsers);
    return;
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updatedUser,
  insertMany,
};
