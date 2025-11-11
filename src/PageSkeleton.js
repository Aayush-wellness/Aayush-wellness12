import React from "react";
import "./PageSkeleton.css"

const PageSkeleton = () => {
  return (
    <div className="skeleton-product-page">
      <div className="skeleton-container">
        {/* Breadcrumb */}
        <div className="skeleton-breadcrumb">
          <div className="skeleton-breadcrumb-item"></div>
          <div className="skeleton-breadcrumb-item"></div>
          <div className="skeleton-breadcrumb-item"></div>
        </div>

        <div className="skeleton-main">
          {/* Left - Image Gallery */}
          <div className="skeleton-gallery">
            <div className="skeleton-main-img shimmer"></div>
            <div className="skeleton-thumbnail-group">
              <div className="skeleton-thumb shimmer"></div>
              <div className="skeleton-thumb shimmer"></div>
              <div className="skeleton-thumb shimmer"></div>
              <div className="skeleton-thumb shimmer"></div>
            </div>
          </div>

          {/* Right - Info */}
          <div className="skeleton-info">
            <div className="skeleton-badge shimmer"></div>
            <div className="skeleton-title-lg shimmer"></div>
            <div className="skeleton-rating shimmer">
              <div className="skeleton-stars"></div>
              <div className="skeleton-review-count"></div>
            </div>
            <div className="skeleton-price shimmer"></div>

            <div className="skeleton-text-group">
              <div className="skeleton-text shimmer"></div>
              <div className="skeleton-text shimmer"></div>
              <div className="skeleton-text shimmer short"></div>
            </div>

            <div className="skeleton-variant-selector">
              <div className="skeleton-label shimmer"></div>
              <div className="skeleton-options-group">
                <div className="skeleton-option shimmer"></div>
                <div className="skeleton-option shimmer"></div>
                <div className="skeleton-option shimmer"></div>
              </div>
            </div>

            <div className="skeleton-quantity">
              <div className="skeleton-label shimmer"></div>
              <div className="skeleton-quantity-selector shimmer"></div>
            </div>

            <div className="skeleton-actions">
              <div className="skeleton-button primary shimmer"></div>
              <div className="skeleton-button secondary shimmer"></div>
            </div>

            <div className="skeleton-extras">
              <div className="skeleton-shipping shimmer"></div>
              <div className="skeleton-guarantee shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageSkeleton
