import styles from "./ProductReviewComments.module.css";
import ProductReviewItem from "../ProductReviewItem/ProductReviewItem";

const reviewData = [
  {
    reviewId: 1,
    reviewTitle: "Is a great product, Would reccomend to anyone",
    reviewRate: 3,
    reviewName: "Peter Lee",
    createdDate: "06-29-2003",
    reviewDesc:
      "Love the look of these Air Max Pulse as they have Air Max 97 Silver Bullet vibes! Great shoes for everyday wear as they are very well cushioned with the air bubble in the heel. I’ve been wearing and walking around in them for long periods of time and my feet still feel fresh and comfortable at the end of the day. Love the sleek look as well as it makes them easy to dress up or down. I’ll for sure be rocking these all spring and summer. Fits true to size as well.",
  },
  {
    reviewId: 2,
    reviewTitle: "Is a great product, Would reccomend to anyone",
    reviewRate: 4,
    reviewName: "Peter Lee",
    createdDate: "06-29-2003",
    reviewDesc:
      "Love the look of these Air Max Pulse as they have Air Max 97 Silver Bullet vibes! Great shoes for everyday wear as they are very well cushioned with the air bubble in the heel. I’ve been wearing and walking around in them for long periods of time and my feet still feel fresh and comfortable at the end of the day. Love the sleek look as well as it makes them easy to dress up or down. I’ll for sure be rocking these all spring and summer. Fits true to size as well.",
  },
  {
    reviewId: 3,
    reviewTitle: "Is a great product, Would reccomend to anyone",
    reviewRate: 5,
    reviewName: "Peter Lee",
    createdDate: "06-29-2003",
    reviewDesc:
      "Love the look of these Air Max Pulse as they have Air Max 97 Silver Bullet vibes! Great shoes for everyday wear as they are very well cushioned with the air bubble in the heel. I’ve been wearing and walking around in them for long periods of time and my feet still feel fresh and comfortable at the end of the day. Love the sleek look as well as it makes them easy to dress up or down. I’ll for sure be rocking these all spring and summer. Fits true to size as well.",
  },
];

export default function ProductReviewComments({ toggle }) {
  return (
    <div className={styles.body} style={toggle ? {} : { display: "none" }}>
      {reviewData.map((review) => (
        <ProductReviewItem
          key={review.reviewId}
          title={review.reviewTitle}
          rate={review.reviewRate}
          name={review.reviewName}
          date={review.createdDate}
          desc={review.reviewDesc}
        />
      ))}
    </div>
  );
}
