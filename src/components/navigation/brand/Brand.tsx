import React from 'react';
import classNames from "classnames";
import './brand.scss';

export interface BrandProps {
    brand?: any;
    children?: React.ReactNode;
    className?: string;
    full?: any;
    minimized?: any;
}

const Brand = (props: BrandProps) => {
    const imgSrc = (brand: BrandProps["brand"]) => {
        return brand.src ? brand.src : "";
    }

  const imgWidth = (brand: BrandProps["brand"]) => {
    return brand.width ? brand.width : "auto";
  };

  const imgHeight = (brand: BrandProps["brand"]) => {
    return brand.height ? brand.height : "auto";
  }

  const imgAlt = (brand: BrandProps["brand"]) => {
    return brand.alt ? brand.alt : "";
  }

  const navbarBrandImg = (brand: BrandProps["brand"], classBrand: string, key: number) => {
    return (
      <img
        src={imgSrc(brand)}
        width={imgWidth(brand)}
        height={imgHeight(brand)}
        alt={imgAlt(brand)}
        className={classBrand}
        key={key.toString()}
      />
    );
  }
    const { className, children, ...attributes } = props;
    const classes = classNames(className, "navbar-brand");

    const img = [];
    if (props.brand) {
      const classBrand = "navbar-brand";
      img.push(navbarBrandImg(props.brand, classBrand, img.length + 1));
    }
    if (props.full) {
      const classBrand = "navbar-brand-full";
      img.push(navbarBrandImg(props.full, classBrand, img.length + 1));
    }
    if (props.minimized) {
      const classBrand = "navbar-brand-minimized";
      img.push(navbarBrandImg(props.minimized, classBrand, img.length + 1));
    }

    return (
      <a {...attributes} className={classes}>
        {children || img}
      </a>
    );
};

export default Brand;
