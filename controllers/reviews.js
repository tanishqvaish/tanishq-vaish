const Listing = require("../models/listing");
const Review = require("../models/review");


// ================= CREATE REVIEW =================
module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
};


// ================= DELETE REVIEW =================
module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;

    let review = await Review.findById(reviewId);

    // Safety check
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You are not allowed to delete this review!");
        return res.redirect(`/listings/${id}`);
    }

    // Delete review
    await Review.findByIdAndDelete(reviewId);

    // Remove review reference from listing
    await Listing.findByIdAndUpdate(id, {
        $pull: { reviews: reviewId }
    });

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};