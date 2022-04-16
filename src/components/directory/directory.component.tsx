import * as React from 'react';
import { categories } from '../../assets/categories';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = () => {


    return (
        <div className="directory-container">
            {categories.map((category) =>
                <CategoryItem {...category} />
            )}

        </div>
    )
}


export default Directory;