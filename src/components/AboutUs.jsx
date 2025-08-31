import { useContext } from "react";
import AuthContext from "./context/AuthContext";

const AboutUs = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div
      className={` px-4 py-10 text-gray-800 ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600 `}
    >
      <div className="max-w-7xl mx-auto  bg-white p-8 rounded-xl shadow-lg dark:bg-zinc-400">
        <h1 className="text-4xl font-bold text-center text-amber-950 mb-6 dark:text-gray-200">
          About Us - Dish Diary 🍽️
        </h1>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold dark:text-gray-200">
            Welcome to Dish Diary: Your Culinary Companion
          </h2>
          <p className="dark:text-gray-200">
            In a world where food transcends borders, tells stories, and brings
            people together, Dish Diary is your trusted platform to capture,
            create, and celebrate the joy of cooking. Built for food lovers,
            passionate home chefs, and anyone who loves experimenting in the
            kitchen, Dish Diary is more than a recipe app — it’s a digital
            culinary journal tailored just for you.
          </p>
          <p className="dark:text-gray-200">
            At Dish Diary, we believe every meal has a memory, and every recipe
            is worth preserving. Our mission is simple: to empower users to
            curate their personal culinary collections, discover dishes from
            around the world, and connect with the food community through
            inspiration, creativity, and shared passion.
          </p>
        </section>

        <section className="space-y-4 mb-8 dark:text-gray-200">
          <h2 className="text-2xl font-semibold">
            The Inspiration Behind Dish Diary
          </h2>
          <p>
            The idea for Dish Diary was born from a simple frustration:
            organizing personal recipes in a way that’s meaningful, accessible,
            and inspiring. Traditional notebooks get lost. Random screenshots
            clutter phones. Bookmark folders go forgotten. There had to be a
            better way.
          </p>
          <p>
            Dish Diary was designed to solve that. We wanted to offer a seamless
            digital experience where you could:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Save your tried-and-true recipes</li>
            <li>Record special cooking instructions</li>
            <li>Track your favorite dishes</li>
            <li>Discover global cuisines</li>
            <li>Share meals with fellow foodies</li>
          </ul>
          <p>
            And so, Dish Diary became the solution — a place where your kitchen
            creativity has no limits.
          </p>
        </section>

        <section className="space-y-4 mb-8 dark:text-gray-200">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            Our mission is to provide a delightful and accessible digital
            platform where users can:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Document their favorite home-cooked meals</li>
            <li>Explore a variety of cuisines and dishes</li>
            <li>
              Personalize recipes with ingredients, images, and preparation tips
            </li>
            <li>Interact with a like-minded community</li>
          </ul>
          <p>
            We aim to build a space where food isn’t just sustenance — it’s an
            experience, a memory, a passion.
          </p>
        </section>

        <section className="space-y-4 mb-8 dark:text-gray-200">
          <h2 className="text-2xl font-semibold">
            What Makes Dish Diary Special?
          </h2>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              <strong>User-Centric Design:</strong> Intuitive, clean, and
              mobile-friendly — use it on any device.
            </li>
            <li>
              <strong>Personalized Recipe Management:</strong> Add, edit, and
              delete your own recipes, with rich details.
            </li>
            <li>
              <strong>Discover & Explore:</strong> Browse by cuisine, meal time,
              likes, and more.
            </li>
            <li>
              <strong>Interactive Features:</strong> Like recipes, add to
              wishlist, track your popular meals.
            </li>
            <li>
              <strong>Secure Login:</strong> Login via Google with Firebase Auth
              and keep your data safe.
            </li>
          </ul>
        </section>

        <section className="space-y-4 mb-8 dark:text-gray-200">
          <h2 className="text-2xl font-semibold">Who Can Use Dish Diary?</h2>
          <p>Anyone who loves food! Whether you're a:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Student learning to cook</li>
            <li>Busy parent planning meals</li>
            <li>Food blogger archiving dishes</li>
            <li>Professional chef tracking experiments</li>
            <li>Someone who loves trying recipes from YouTube</li>
          </ul>
          <p>Dish Diary is made for you.</p>
        </section>

        <section className="space-y-4 mb-8 dark:text-gray-200">
          <h2 className="text-2xl font-semibold">A Note on Community</h2>
          <p>
            Dish Diary isn’t just an app — it’s a community of food lovers who
            share, celebrate, and learn from each other.
          </p>
        </section>

        <section className="text-center mt-10 space-y-2 ">
          <p className="text-lg font-semibold text-indigo-600 dark:text-gray-200">
            We’re so glad you’re here. Whether you upload, explore, or get
            inspired — you’re part of Dish Diary. 🍳
          </p>
          <p className="text-gray-600 dark:text-gray-200">
            Let’s cook something amazing together.
          </p>
        </section>

        <section className="mt-10 ">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-200">
            Contact & Connect
          </h2>
          <ul className="text-gray-700 space-y-1 dark:text-gray-200">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:dishdiary.support@gmail.com"
                className="text-blue-600 hover:underline dark:text-gray-200"
              >
                dishdiary.support@gmail.com
              </a>
            </li>
            <li>
              💻 GitHub:{" "}
              <a
                href="https://github.com/ashahab007"
                className="text-blue-600 hover:underline dark:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md. Ammar Shahab
              </a>
            </li>
            <li>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/md-ammar-shahab-88ab4a235/"
                className="text-blue-600 hover:underline dark:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md. Ammar Shahab
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
