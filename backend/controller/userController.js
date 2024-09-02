import User from "../models/userModel.js";


//add newuser
export const addUser =  async (req, res) => {
  const user = new User({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    await user.save();
    res.status(201).json("successful added");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find  user' });
    }

    if (req.body.name != null) {
      user.name = req.body.name;
    }
    if (req.body.description != null) {
      user.description = req.body.description;
    }

     await user.save();
    res.json("successful updated");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }

    await user.deleteOne(); // No need to store the result if not using it
    res.json('deleted successful'); // Send no content for successful deletion
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all items
export const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
