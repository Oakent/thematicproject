const mongoose = require("mongoose");
const Ingredient = require("./ingredient"); // Adjust the path as necessary

const mongoURI = config.mongoURI;
console.log("mongoURI", mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Function to add a new ingredient
async function addIngredient(name, unit, category, allergens) {
  try {
    const newIngredient = new Ingredient({
      name,
      unit,
      category,
      allergens,
    });

    const savedIngredient = await newIngredient.save();
    console.log("Ingredient added:", savedIngredient);
    return savedIngredient;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Function to find an ingredient by name
async function findIngredientByName(name) {
  try {
    const ingredient = await Ingredient.findOne({ name });
    if (!ingredient) {
      console.log("Ingredient not found");
      return null;
    }
    console.log("Ingredient found:", ingredient);
    return ingredient;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Function to update an ingredient
async function updateIngredient(name, updates) {
  try {
    const updatedIngredient = await Ingredient.findOneAndUpdate({ name }, updates, { new: true });
    if (!updatedIngredient) {
      throw new Error('Ingredient not found or update failed');
    }
    console.log("Ingredient updated:", updatedIngredient);
    return updatedIngredient;
  } catch (err) {
    console.error(err);
    throw err;
  }
}s

// Function to remove an ingredient
async function removeIngredient(name) {
  try {
    const result = await Ingredient.findOneAndDelete({ name });
    if (result) {
      console.log("Ingredient removed:", result);
      return result;
    } else {
      throw new Error('Ingredient not found or delete failed');
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = {
  addIngredient,
  findIngredientByName,
  updateIngredient,
  removeIngredient,
};
