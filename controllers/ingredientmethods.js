const mongoose = require("mongoose");
const User = require("./models/user");
const Ingredient = require("./models/ingredient"); 
const config = require("./config");

const mongoURI = config.mongoURI;
console.log("mongoURI", mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


async function addIngredient(Username, Name, Unit, Category, Allergens) {
  try {
    const user = await User.findOne({Username: Username});
    if (!user) {
      throw new Error('User not found');
    }
    else if (user) {
      console.log("User found:", user);
    }

    const newIngredient = {
      Name,
      Unit,
      Category,
      Allergens,
    };

    user.personalIngredients.push(newIngredient);
    await user.save();

    console.log("Ingredient added:", newIngredient, "to user:", user);
    return newIngredient;
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
}

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

// Function to add a new category
async function addCategory(category) {
  try {
    const newCategory = new Category({
      name: category,
    });
    await newCategory.save();
    console.log("Category added:", newCategory);
    return newCategory;
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
  addCategory,
};

