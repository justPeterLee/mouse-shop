import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ReviewRate({rate}){
    return(
        <>
        {rate === 1 && (
            <span>
              <AiFillStar />
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </span>
          )}
          {rate === 2 && (
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </span>
          )}
          {rate === 3 && (
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar/>
              <AiOutlineStar/>
            </span>
          )}
          {rate === 4 && (
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar/>
            </span>
          )}
          {rate === 5 && (
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          )}
          {rate === 1 && (
            <span>
              <AiFillStar />
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </span>
          )}
        </>
    )
}