import UserModal from '../models/userModel.js';

export const signIn = async (req,res) =>{
    const { email, password } = req.body;
    try {
        const user = await UserModal.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn't exist" });
        if (user.password !== password){
            return res.status(400).json({ message: "Invalid credentials" });
        }
      res.status(200).json({ name:user.name });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  