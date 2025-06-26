import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../public/firebase/firebase.config";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("");

  // const [recipes, setRecipes] = useState([]);

  /*  useEffect(() => {
    fetch("https://b11a10-server-side-ashahab007.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []); */

  // const handleDelete = (id) => {
  //   // console.log(id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     console.log(result.isConfirmed);
  //     if (result.isConfirmed) {
  //       fetch(
  //         `https://b11a10-server-side-ashahab007.vercel.app/recipes/${recipes._id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log("After delete", data);

  //           if (data.deletedCount) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your item has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //           const remainingCoffees = recipes.filter(
  //             (recipe) => recipe._id !== _id
  //           );
  //           setRecipes(remainingCoffees);
  //         });
  //     }
  //   });
  // };

  const provider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updateData) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  const userLogin = (email, password) => {
    setIsLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);

    return signOut(auth);
  };

  const googleSignIn = (provider) => {
    // setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    user,
    setUser,
    updateUser,
    userLogin,
    provider,
    logOut,
    googleSignIn,
    isLoading,
    setIsLoading,
    theme,
    setTheme,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
