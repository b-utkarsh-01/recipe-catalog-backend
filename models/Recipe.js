import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  chef: String,
  ingredients: [String],
  instructions: [String],
  mealType: String,
  image: String,
  isFavorite: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Recipe", recipeSchema);