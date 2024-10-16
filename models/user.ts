

  import { type Document, Schema, model } from "mongoose";
  import { z } from "zod";
  
  // Zod schema for User
  export const userSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3)
      .max(50),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Please enter a valid email address.")
      .max(255),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6)
      .max(255),
  
  });
  
  export const authUserSchema = userSchema.pick({ email: true, password: true });
  
  
  
 
  
  // MongoDB document interface for User
  interface User extends Document {
    name: string;
    email: string;
    password: string;
  }
  
  // Mongoose schema for User
  const userMongooseSchema = new Schema<User>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxlength: 50,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxlength: 255,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        minLength: 6,
        maxlength: 1024,
      },
    },
    {
      timestamps: true,
    },
  );
 
  
  // User model
  const User = model<User>("User", userMongooseSchema);
  
  export default User;