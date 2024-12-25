import React, { useEffect, useState } from 'react';
import Card from '../../../general/card/Card';
import ReviewHeader from './ReviewHeader';
import ReviewBody from './ReviewBody';
import ReviewActionBar from './ReviewActionBar';
import useGetVisitorById from '../../../visitor/hooks/useVisitorDataById';
import { canEditOrDelete, canLike, isTier1 } from "../../../general/helpers/permission";
export default function ReviewCard({
    review,
    handleEdit,
    handleDelete,
    handleLike,
    currentUserId,
}) {
    const { fetchVisitorById, visitor } = useGetVisitorById();
    const [isLiked, setIsLiked] = useState(false);
    const [username, setUsername] = useState("Anonymous"); // Default to "Anonymous"

    // Check if the current user has liked this review
    const isLikedByUser = review.likes.includes(currentUserId);

    useEffect(() => {
        const fetchVisitor = async () => {
            try {
                await fetchVisitorById(review.visitorId); // Fetch visitor data
            } catch (error) {
                console.error('Failed to fetch visitor data', error);
                setUsername("Anonymous");
            }
        };

        if (review.visitorId && !visitor) { // Only fetch if visitor data is not available
            fetchVisitor();
        }

        setIsLiked(isLikedByUser); // Set the initial like state based on the review data

    }, [fetchVisitorById, review.visitorId, isLikedByUser, visitor]);

    // Update username only when visitor data changes
    useEffect(() => {
        if (visitor?.username) {
            setUsername(visitor.username);
        }
    }, [visitor]); // This will run when visitor data changes

    const handleLikeClick = () => {
        handleLike(review._id); // Trigger the parent's handleLike function
        setIsLiked(!isLiked); // Toggle like state
    };

    const editOrDeletePermission = canEditOrDelete(visitor, review.visitorId);
    const likePermission = canLike(visitor);

    return (
        <Card>
            <ReviewHeader visitorId={username} />
            <ReviewBody comment={review.comment} rating={review.rating} date={review.date} />
            {!isTier1(visitor) && (
                <ReviewActionBar
                    reviewId={review._id}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleLike={handleLikeClick}
                    isLiked={isLiked}
                    canEditOrDelete={editOrDeletePermission}
                    canLike={likePermission}
                />
            )}
        </Card>
    );
}
