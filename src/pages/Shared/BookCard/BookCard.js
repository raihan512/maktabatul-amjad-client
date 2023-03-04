import React from "react";
import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";
import {} from "./Bookcard.css";

const BookCard = ({ src }) => {
  return (
    <div className="book-card w-40 p-2 mx-auto ease-in duration-300">
        <Link to="">
          <img src={src} className="h-40 md:h-56 mb-1.5 ease-out duration-300" alt="" />
          <h4 className="text-base text-black truncate">A memory of light working day</h4>
          <p className="text-sm text-gray truncate">Md Abul Khayer Raihan</p>
          <div className="flex">
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          </div>
          <div className="flex">
            <del className="text-base text-gray mr-2">$<span>25.00</span></del>
            <p className="text-base text-red">$<span>22.00</span></p>
          </div>
        </Link>
    </div>
  );
};

export default BookCard;
