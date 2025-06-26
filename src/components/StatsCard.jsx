import { FaBook, FaUser, FaThumbsUp } from "react-icons/fa";

const StatsCard = ({ allRecipes = [], myRecipes = [], topLikedRecipe }) => {
  console.log("top", topLikedRecipe);

  // Calculate stats
  const totalRecipes = allRecipes.length;
  const myRecipeCount = myRecipes.length;

  const cards = [
    {
      title: "All Recipes",
      value: totalRecipes,
      icon: <FaBook className="text-3xl text-indigo-600" />,
      bg: "bg-indigo-50",
    },
    {
      title: "My Recipes",
      value: myRecipeCount,
      icon: <FaUser className="text-3xl text-emerald-600" />,
      bg: "bg-emerald-50",
    },
  ];

  const topLiked = {
    title: "Top Liked Recipe",
    value: topLikedRecipe?.likes,
    icon: <FaThumbsUp className="text-3xl text-rose-600" />,
    bg: "bg-rose-50",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-around py-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between p-6 rounded-2xl shadow-md ${card.bg}`}
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {card.value}
            </h2>
            <p className="text-gray-600">{card.title}</p>
          </div>
          {card.icon}
        </div>
      ))}
      <div
        className={`flex items-center justify-between p-6 rounded-2xl shadow-md ${topLiked.bg}`}
      >
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {topLiked.value}
          </h2>
          <p className="text-gray-600">{topLiked.title}</p>
        </div>
        {topLiked.icon}
      </div>
    </div>
  );
};

export default StatsCard;
