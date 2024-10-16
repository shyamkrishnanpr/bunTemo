import User, { authUserSchema } from "../models/user";

export const register = async (req: any, res: any) => {
  try {
    const { email, password, name } = await req.json();

    const user = await User.findOne({ email: email });

    if (user) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const hash = await Bun.password.hash(password);
    const newUser = new User({ email, password: hash, name });
    await newUser.save();

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        email: newUser.email,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email: email });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    const match = await Bun.password.verify(password, user.password);

    if (!match) {
      return new Response(JSON.stringify({ message: "Incorrect password" }), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Login successful",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
};
