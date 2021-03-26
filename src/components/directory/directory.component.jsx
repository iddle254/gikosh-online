import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directroy.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NjMwNDY4fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women's",
          imageUrl:
            "https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFmcmljYW4lMjB3b21lbiUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "men's",
          imageUrl:
            "https://images.unsplash.com/photo-1544774210-075d2f16e35d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZhc2hpb25hYmxlbCUyMGFmcmljYW5zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, size, id, linkUrl }) => (
          <MenuItem
            title={title}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
            size={size}
            key={id}
          />
        ))}
      </div>
    );
  }
}
