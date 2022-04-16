import * as React from 'react';
import './category-item.styles.scss';

interface Category {
    id: number,
    title: string,
    height: string,
    imageUrl: string,
}

const CategoryItem = (props: Category) => {

    return (<>
        <div key={props.id} className={`category-container ${props.height}`}>
            <div className="background-image" style={{
                backgroundImage: `url(${props.imageUrl})`,
            }} />
            <div className="category-body-container">
                <h2>{props.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    </>)
}

export default CategoryItem;