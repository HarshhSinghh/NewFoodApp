import User from "../models/User";
import varifyAdmin from "../middleware/varifyAdmin";

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new User

const createUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  try {
    const existingUser = await User.findOne(query);
    if (existingUser) {
      res.status(302).json({ message: "User already exists" });
    }
    const result = await User.create(user);
    res.status(200).json({ message: "User has Been Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const user = req.params.id;
  try {
    const existingUser = await User.findOneAndDelete(user);

    if (!existingUser) {
      res.status(404).json({ message: "User does not exists" });
    }
    res.status(200).json({ message: "User Deleted" });

    const result = await User.deleteOne(query);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update USer

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, photoURL, role } = req.body;
  try {
    const updateUsers = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        photoURL,
        role,
      },
      {
        new: true,
        runvalidator: true,
      }
    );
    if (!updateUsers) {
      res.status(404).json({ message: "User was Not updated" });
    }
    res.status(200).json({ message: "User has been Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAdmin = async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  try {
    const user = await User.findOne(query);
    if (email !== req.decoded.email) {
      return res.status(403).send({ message: "User not found" });
    }
    let admin = false;
    if (user) {
      const admin = user?.role === "admin";
    }
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const makeAdmin = async (req, res) => {
  const userId = req.params.id;
  const { name, email, photoURL, role } = req.body;
  try {
    const userAdmin = await User.findByIdAndUpdate(
      userId,
      { role: "admin" },
      { new: true, runvalidator: true }
    );
    if (!userAdmin) {
      res.status(404).json({ message: "User was not found or updated" });
    }
    res.status(200).json({ message: "User was Updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  makeAdmin,
  getAdmin,
};
