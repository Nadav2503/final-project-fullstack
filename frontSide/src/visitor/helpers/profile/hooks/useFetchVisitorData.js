import { useEffect } from 'react';
import { getUser } from '../../../../services/LocalStorageService';
import useGetVisitorById from '../../../hooks/useVisitorDataById';
import useFetchReviewsByVisitor from '../../../../review/hooks/useGetReviewsByVisitor';

export const useFetchVisitorData = () => {
    const user = getUser();
    const { visitor, loading, error, fetchVisitorById } = useGetVisitorById();
    const { fetchReviews, reviews } = useFetchReviewsByVisitor();

    useEffect(() => {
        if (user && !visitor) {
            fetchVisitorById(user._id);
        }
    }, [user, visitor, fetchVisitorById]);

    useEffect(() => {
        if (visitor) {
            fetchReviews(visitor._id);
        }
    }, [visitor, fetchReviews]);

    return { visitor, loading, error, reviews, fetchReviews };
};
