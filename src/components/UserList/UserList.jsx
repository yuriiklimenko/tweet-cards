import { useEffect, useState } from "react";
import { getUsers } from "../../apiOperations/Operations";

import { ButtonLoadMore } from "../ButtonLoadMore/ButtonLoadMore";
import { UserItem } from "../UserItem/UserItem";
import { Loader } from "../Loader/Loader";

import { Select } from "../Select/Select";
import { GoBackButton } from "../../GoBackButton/GoBackButton";

import css from "./UserList.module.css";
import toast from "react-hot-toast";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        setShowLoadMoreBtn(false);
        const response = await getUsers(page);

        setShowLoadMoreBtn(true);

        if (page === 1) {
          setUsers(response);
          setIsLoading(false);
        } else {
          setUsers((prev) => [...prev, ...response]);
          setIsLoading(false);
        }

        if (response.length < 3) {
          setShowLoadMoreBtn(false);
          toast.success(`No more Tweets Cards available`);
        }
      } catch (error) {
        toast.error("Oops! Try again later.");
        setIsLoading(false);
      }
    }
    getAllUsers();
  }, [page]);

  const handleChange = (value) => {
    const savedArray = localStorage.getItem("idArr");

    const idArr = savedArray ? JSON.parse(savedArray) : [];

    if (value === "showAll") {
      setFilteredUsers([]);

      return;
    } else if (value === "followings") {
      setFilteredUsers([]);
      const filteredUsers = users.filter((user) => idArr.includes(user.id));

      if (filteredUsers.length === 0) {
        setFilteredUsers(1);
        setShowLoadMoreBtn(false);
        return;
      }
      setFilteredUsers(filteredUsers);

      if (filteredUsers.length < 3) {
        setShowLoadMoreBtn(false);
      }
    } else if (value === "follow") {
      setFilteredUsers([]);
      const filteredUsers = users.filter((user) => !idArr.includes(user.id));

      if (filteredUsers.length === 0) {
        setFilteredUsers(1);
        setShowLoadMoreBtn(false);
        return;
      }

      setFilteredUsers(filteredUsers);

      if (filteredUsers.length < 3) {
        setShowLoadMoreBtn(false);
      }
    }
  };

  const loadMoreCards = () => {
    setPage((prev) => prev + 1);
    setIsLoading(true);
  };

  return (
    <>
      <div>
        <GoBackButton />

        <Select handleChange={handleChange} />
      </div>

      <ul className={css.usersList}>
        {filteredUsers !== 1 ? (
          (filteredUsers.length > 0 ? filteredUsers : users).map((user) => (
            <li key={user.id}>
              <UserItem user={user} />
            </li>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>

      {showLoadMoreBtn && <ButtonLoadMore onClickButton={loadMoreCards} />}
      {isLoading && <Loader />}
    </>
  );
};

export default UsersList;
