// Function to get all unique categories of pets
export function uniqueCategories(data) {
    const categoriesSet = new Set();

    data.forEach(clinic => {
      const categories = clinic.categories;
      categories.forEach(category => categoriesSet.add(category));
    });

    return [...categoriesSet]
}
// Result: ["Food Animal", "Swine", "Equine", "Exotic", "Reptile and Amphibian", "Beef Cattle", "Avian", "Canine and Feline", "Dairy"]
// Definition of the categories according to https://www.avma.org/education/veterinary-specialties/what-board-certified-veterinary-specialists-do
//
// Avian -> Bird
// Equine -> Horse
// Beef Cattle -> Cattle
// Feline -> Cat
// Canine and Feline -> Dog, Cat
// Exotic -> Ferret, Rabbit, Mouse, Rat
// Food Animal -> Cattle, Sheep, Goat, Pig
// Dairy -> Cow
// Reptile and Amphibian -> Snake, Lizard, Salamander, Turtle
// Swine -> Pig

// Function to take a casual, common name for animals and convert it to professional vetenary category term
// Takes in a string (ex. "Cat") and returns a list of strings representing the categories (ex. ["Feline", "Canine and Feline"])
export function fromCasualToProf(pet) {
    switch (pet) {
    case "Cat":
        return ["Feline", "Canine and Feline"];
    case "Dog": 
        return ["Canine and Feline"];
    case "Bird":
        return ["Avian"];
    case "Horse":
        return ["Equine"];
    case "Farm Animal":
    case "Sheep":
    case "Goat":
        return ["Food Animal", "Swine", "Beef Cattle", "Dairy"]
    case "Small Animal":
    case "Ferret":      // Start Exotic list
    case "Rabbit":
    case "Mouse":
    case "Fish":            // wasnt part of the list but added it whatever
    case "Rat":         // End Exotic list
        return ["Exotic"];
    case "Reptile":
    case "Snake":       // Start Reptile list
    case "Lizard":
    case "Salamander":
    case "Turtle":      // End Reptile list
        return ["Reptile and Amphibian"];
    default:
        return ["Other"];
    }
}


export * from './utils.js';