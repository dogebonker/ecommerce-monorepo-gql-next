import Category from "./category.type";
import { plainToClass } from "class-transformer";

const loadCategories = (): Category[] => {
  return plainToClass(Category, [
    {
      id: 1,
      title: "Fruits & Vegetables",
      slug: "fruits-and-vegetables",
      products: [],
      type: "grocery",
      icon: "FruitsVegetable",
      children: [
        {
          id: 2,
          title: "Fruits",
          slug: "fruits",
          products: [],
          type: "grocery"
        },
        {
          id: 3,
          title: "vegetables",
          slug: "vegetables",
          products: [],
          type: "grocery"
        }
      ]
    },

    {
      id: 9,
      title: "Meat & Fish",
      slug: "meat-and-fish",
      products: [],
      type: "grocery",
      icon: "MeatFish",
      children: [
        {
          id: 10,
          title: "Frozen Fish",
          slug: "frozen-fish",
          products: [],
          type: "grocery"
        },
        {
          id: 11,
          title: "Dried Fish",
          slug: "dried-fish",
          products: [],
          type: "grocery"
        },
        {
          id: 12,
          title: "Fresh Fish",
          slug: "fresh-fish",
          products: [],
          type: "grocery"
        },
        {
          id: 13,
          title: "Meat",
          slug: "meat",
          products: [],
          type: "grocery"
        }
      ]
    },

    {
      id: 14,
      title: "Purse",
      slug: "purse",
      products: [],
      type: "bags",
      icon: "Purse",
      children: []
    },

    {
      id: 15,
      title: "Hand bags",
      slug: "hand-bags",
      products: [],
      type: "bags",
      icon: "HandBags",
      children: []
    },

    {
      id: 16,
      title: "Shoulder bags",
      slug: "shoulder-bags",
      products: [],
      type: "bags",
      icon: "ShoulderBags",
      children: []
    },
    {
      id: 17,
      title: "Wallet",
      slug: "wallet",
      products: [],
      type: "bags",
      icon: "Wallet",
      children: []
    },
    {
      id: 18,
      title: "Laptop bags",
      slug: "laptop-bags",
      products: [],
      type: "bags",
      icon: "LaptopBags",
      children: []
    },

    {
      id: 19,
      title: "Women Dress",
      slug: "women-dress",
      products: [],
      type: "clothing",
      icon: "WomenDress",
      children: [
        {
          id: 20,
          title: "Printed",
          slug: "printed",
          products: [],
          type: "clothing"
        },
        {
          id: 21,
          title: "Floral",
          slug: "floral",
          products: [],
          type: "clothing"
        },
        {
          id: 22,
          title: "Single Color",
          slug: "single-color",
          products: [],
          type: "clothing"
        }
      ]
    },
    {
      id: 23,
      title: "Outer Wear",
      slug: "outer-wear",
      products: [],
      type: "clothing",
      icon: "OuterWear",
      children: [
        {
          id: 24,
          title: "Hoodie",
          slug: "hoodie",
          products: [],
          type: "clothing"
        },
        {
          id: 25,
          title: "Jacket",
          slug: "jacket",
          products: [],
          type: "clothing"
        },
        {
          id: 26,
          title: "Blazer",
          slug: "blazer",
          products: [],
          type: "clothing"
        },
        {
          id: 27,
          title: "Waist Coat",
          slug: "waist-coat",
          products: [],
          type: "clothing"
        }
      ]
    },
    {
      id: 28,
      title: "Pants",
      slug: "pants",
      products: [],
      type: "clothing",
      icon: "Pants",
      children: [
        {
          id: 29,
          title: "Jeans",
          slug: "jeans",
          products: [],
          type: "clothing"
        },
        {
          id: 30,
          title: "Chinos",
          slug: "chinos",
          products: [],
          type: "clothing"
        },
        {
          id: 31,
          title: "Sports",
          slug: "sports",
          products: [],
          type: "clothing"
        }
      ]
    },

    {
      id: 32,
      title: "Tops",
      slug: "tops",
      products: [],
      type: "clothing",
      icon: "Tops",
      children: []
    },
    {
      id: 33,
      title: "Skirts",
      slug: "skirts",
      products: [],
      type: "clothing",
      icon: "Skirts",
      children: []
    },
    {
      id: 34,
      title: "Shirts",
      slug: "shirts",
      products: [],
      type: "clothing",
      icon: "Shirts",
      children: []
    },

    {
      id: 35,
      title: "Face",
      slug: "face",
      products: [],
      type: "makeup",
      icon: "Face",
      children: [
        {
          id: 36,
          title: "Blusher",
          slug: "blusher",
          products: [],
          type: "makeup"
        },
        {
          id: 37,
          title: "Foundation",
          slug: "foundation",
          products: [],
          type: "makeup"
        },
        {
          id: 38,
          title: "Face Powder",
          slug: "face-powder",
          products: [],
          type: "makeup"
        }
      ]
    },

    {
      id: 39,
      title: "Eyes",
      slug: "eyes",
      products: [],
      type: "makeup",
      icon: "Eyes",
      children: [
        {
          id: 40,
          title: "Eye Shadow",
          slug: "eye-shadow",
          products: [],
          type: "makeup"
        },
        {
          id: 41,
          title: "Glitter",
          slug: "glitter",
          products: [],
          type: "makeup"
        },
        {
          id: 42,
          title: "Mascara",
          slug: "mascara",
          products: [],
          type: "makeup"
        }
      ]
    },

    {
      id: 43,
      title: "Lips",
      slug: "lips",
      products: [],
      type: "makeup",
      icon: "Lips",
      children: [
        {
          id: 44,
          title: "Lip Gloss",
          slug: "lip-gloss",
          products: [],
          type: "makeup"
        },
        {
          id: 45,
          title: "Lipstick",
          slug: "lipstick",
          products: [],
          type: "makeup"
        },
        {
          id: 46,
          title: "Lip Kit",
          slug: "lip-kit",
          products: [],
          type: "makeup"
        }
      ]
    },

    {
      id: 47,
      title: "Accessories",
      slug: "accessories",
      products: [],
      type: "makeup",
      icon: "Accessories",
      children: []
    },
    {
      id: 48,
      title: "Snacks",
      slug: "snacks",
      products: [],
      type: "grocery",
      icon: "Snacks",
      children: [
        {
          id: 49,
          title: "Biscuits",
          slug: "biscuits",
          products: [],
          type: "grocery"
        },
        {
          id: 50,
          title: "Chocolates",
          slug: "chocolates",
          products: [],
          type: "grocery"
        },
        {
          id: 51,
          title: "Crisps",
          slug: "crisps",
          products: [],
          type: "grocery"
        },
        {
          id: 52,
          title: "Noodles",
          slug: "noodles",
          products: [],
          type: "grocery"
        },
        {
          id: 53,
          title: "Nuts",
          slug: "nuts",
          products: [],
          type: "grocery"
        },
        {
          id: 54,
          title: "Pasta",
          slug: "pasta",
          products: [],
          type: "grocery"
        },
        {
          id: 55,
          title: "Sauce",
          slug: "sauce",
          products: [],
          type: "grocery"
        },
        {
          id: 56,
          title: "Soup",
          slug: "soup",
          products: [],
          type: "grocery"
        }
      ]
    },

    {
      id: 57,
      title: "Pet Care",
      slug: "petcare",
      products: [],
      type: "grocery",
      icon: "PetCare",
      children: [
        {
          id: 58,
          title: "Cat Food",
          slug: "catfood",
          products: [],
          type: "grocery"
        },
        {
          id: 59,
          title: "Dog Food",
          slug: "dogfood",
          products: [],
          type: "grocery"
        },
        {
          id: 60,
          title: "KItten Food",
          slug: "kittenfood",
          products: [],
          type: "grocery"
        },
        {
          id: 61,
          title: "Pet Accessories",
          slug: "petaccessories",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 62,
      title: "Home & Cleaning",
      slug: "home-cleaning",
      products: [],
      type: "grocery",
      icon: "HomeCleaning",
      children: [
        {
          id: 63,
          title: "Air Freshner",
          slug: "air_freshner",
          products: [],
          type: "grocery"
        },
        {
          id: 64,
          title: "Cleaning Products",
          slug: "cleanin_products",
          products: [],
          type: "grocery"
        },
        {
          id: 65,
          title: "Dishwasher",
          slug: "dishwasher",
          products: [],
          type: "grocery"
        },
        {
          id: 66,
          title: "Kitchen Accessories",
          slug: "kitchenaccessories",
          products: [],
          type: "grocery"
        },
        {
          id: 67,
          title: "Laundry ",
          slug: "laundry",
          products: [],
          type: "grocery"
        },
        {
          id: 68,
          title: "Pest Control",
          slug: "Pest_control",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 69,
      title: "Dairy",
      slug: "dairy",
      products: [],
      type: "grocery",
      icon: "Dairy",
      children: [
        {
          id: 70,
          title: "Butter",
          slug: "butter",
          products: [],
          type: "grocery"
        },
        {
          id: 71,
          title: "Egg",
          slug: "egg",
          products: [],
          type: "grocery"
        },
        {
          id: 72,
          title: "Milk",
          slug: "milk",
          products: [],
          type: "grocery"
        },
        {
          id: 73,
          title: "Milk Cream",
          slug: "milk _cream",
          products: [],
          type: "grocery"
        },
        {
          id: 74,
          title: "Powder Milk ",
          slug: "Powder_Milk",
          products: [],
          type: "grocery"
        },
        {
          id: 75,
          title: "Yogourt",
          slug: "yogourt",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 76,
      title: "Cooking",
      slug: "cooking",
      products: [],
      type: "grocery",
      icon: "Cooking",
      children: [
        {
          id: 77,
          title: "Oil",
          slug: "oil",
          products: [],
          type: "grocery"
        },
        {
          id: 78,
          title: "Rice ",
          slug: "rice",
          products: [],
          type: "grocery"
        },
        {
          id: 79,
          title: "Salt & Sugar",
          slug: "Salt_sugar",
          products: [],
          type: "grocery"
        },
        {
          id: 80,
          title: "Spices",
          slug: "milr_cream",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 82,
      title: "Breakfast",
      slug: "breakfast",
      products: [],
      type: "grocery",
      icon: "Breakfast",
      children: [
        {
          id: 83,
          title: "Bread",
          slug: "bread",
          products: [],
          type: "grocery"
        },
        {
          id: 84,
          title: "Cereal ",
          slug: "cereal",
          products: [],
          type: "grocery"
        },
        {
          id: 85,
          title: "Honey",
          slug: "honey",
          products: [],
          type: "grocery"
        },
        {
          id: 86,
          title: "Jam",
          slug: "jam",
          products: [],
          type: "grocery"
        },
        {
          id: 87,
          title: "Mayonnaise",
          slug: "mayonnaise",
          products: [],
          type: "grocery"
        },
        {
          id: 88,
          title: "Oats",
          slug: "oats",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 90,
      title: "Beverage",
      slug: "beverage",
      products: [],
      type: "grocery",
      icon: "Beverage",
      children: [
        {
          id: 91,
          title: "Coffee",
          slug: "coffee",
          products: [],
          type: "grocery"
        },
        {
          id: 92,
          title: "Energy Drinks ",
          slug: "energy_drinks",
          products: [],
          type: "grocery"
        },
        {
          id: 93,
          title: "Juice",
          slug: "juice",
          products: [],
          type: "grocery"
        },
        {
          id: 94,
          title: "Fizzy Drinks",
          slug: "fizzy_drinks",
          products: [],
          type: "grocery"
        },
        {
          id: 95,
          title: "Syrup & powder",
          slug: "syrup_powder",
          products: [],
          type: "grocery"
        },
        {
          id: 96,
          title: "Tea",
          slug: "tea",
          products: [],
          type: "grocery"
        },
        {
          id: 97,
          title: "Water",
          slug: "water",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 98,
      title: "Beauty & Health",
      slug: "healt_beauty",
      products: [],
      type: "grocery",
      icon: "BeautyHealth",
      children: [
        {
          id: 99,
          title: "Bath",
          slug: "bath",
          products: [],
          type: "grocery"
        },
        {
          id: 100,
          title: "Cream ",
          slug: "cream",
          products: [],
          type: "grocery"
        },
        {
          id: 101,
          title: "Deodorant",
          slug: "deodarent",
          products: [],
          type: "grocery"
        },
        {
          id: 102,
          title: "Face Care",
          slug: "face_care",
          products: [],
          type: "grocery"
        },
        {
          id: 105,
          title: "Oral Care",
          slug: "Oral_care",
          products: [],
          type: "grocery"
        },
        {
          id: 106,
          title: "Shaving Needs",
          slug: "shaving_needs",
          products: [],
          type: "grocery"
        }
      ]
    },
    {
      id: 107,
      title: "Shaving Needs",
      slug: "shaving_needs",
      products: [],
      type: "makeup",
      icon: "ShavingNeeds",
      children: []
    },
    {
      id: 108,
      title: "Oral Care",
      slug: "Oral_care",
      products: [],
      type: "makeup",
      icon: "OralCare",
      children: []
    },
    {
      id: 109,
      title: "Facial Care",
      slug: "face_care",
      products: [],
      type: "makeup",
      icon: "FacialCare",
      children: []
    },
    {
      id: 110,
      title: "Deodarent",
      slug: "deodarent",
      products: [],
      type: "makeup",
      icon: "Deodorent",
      children: []
    },
    {
      id: 111,
      title: "Bath & Oil",
      slug: "bath",
      products: [],
      type: "makeup",
      icon: "BathOil",
      children: []
    },
    {
      id: 112,
      title: "Children Literature",
      slug: "children_literature",
      products: [],
      type: "books",
      icon: "",
      children: []
    },

    {
      id: 113,
      title: "Comic Book",
      slug: "comic_book",
      products: [],
      type: "books",
      icon: "",
      children: []
    },

    {
      id: 114,
      title: "Fantasy",
      slug: "fantasy",
      products: [],
      type: "books",
      icon: "",
      children: []
    },
    {
      id: 115,
      title: "Horror",
      slug: "horror",
      products: [],
      type: "books",
      icon: "",
      children: []
    },

    {
      id: 116,
      title: "Novel",
      slug: "novel",
      products: [],
      type: "books",
      icon: "",
      children: []
    },

    {
      id: 117,
      title: "Romantic",
      slug: "romantic",
      products: [],
      type: "books",
      icon: "",
      children: []
    },
    {
      id: 118,
      title: "Science Fiction",
      slug: "science_fiction",
      products: [],
      type: "books",
      icon: "",
      children: []
    },
    {
      id: 119,
      title: "Thriller",
      slug: "thriller",
      products: [],
      type: "books",
      icon: "",
      children: []
    },
    {
      id: 120,
      title: "Bed",
      slug: "bed",
      products: [],
      type: "furniture",
      icon: "",
      children: [
        {
          id: 121,
          title: "Master Bed",
          slug: "master_bed",
          products: [],
          type: "furniture"
        },
        {
          id: 122,
          title: "Single Bed",
          slug: "single_bed",
          products: [],
          type: "furniture"
        },
        {
          id: 123,
          title: "Semi Double Bed",
          slug: "semi_double_bed",
          products: [],
          type: "furniture"
        }
      ]
    },
    {
      id: 124,
      title: "Chair",
      slug: "chair",
      products: [],
      type: "furniture",
      icon: "",
      children: [
        {
          id: 125,
          title: "Cozy Chair",
          slug: "cozy_chair",
          products: [],
          type: "furniture"
        },
        {
          id: 126,
          title: "Rocking Chair",
          slug: "rocking_chair",
          products: [],
          type: "furniture"
        },
        {
          id: 127,
          title: "Single Chair",
          slug: "single_chair",
          products: [],
          type: "furniture"
        }
      ]
    },
    {
      id: 128,
      title: "Sofa",
      slug: "sofa",
      products: [],
      type: "furniture",
      icon: "",
      children: [
        {
          id: 129,
          title: "Double Sofa",
          slug: "double_sofa",
          products: [],
          type: "furniture"
        },
        {
          id: 130,
          title: "Single Sofa",
          slug: "single_sofa",
          products: [],
          type: "furniture"
        },
        {
          id: 131,
          title: "Sofa set",
          slug: "sofa_set",
          products: [],
          type: "furniture"
        }
      ]
    },
    {
      id: 132,
      title: "Table",
      slug: "table",
      products: [],
      type: "furniture",
      icon: "",
      children: [
        {
          id: 133,
          title: "Bedside Table",
          slug: "bedside_table",
          products: [],
          type: "furniture"
        },
        {
          id: 134,
          title: "Coffee Table",
          slug: "coffee_table",
          products: [],
          type: "furniture"
        },
        {
          id: 135,
          title: "Dining Table",
          slug: "dining_table",
          products: [],
          type: "furniture"
        }
      ]
    }
  ]);
};

export default loadCategories;
