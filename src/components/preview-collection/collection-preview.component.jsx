import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

function CollectionPreview({ items, title }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
