const groupByProducts = (items, key) => items.reduce(
    (result, item) => ({
        ...result,
        [item[key]]: [
        ...(result[item[key]] || []),
        item,
        ],
    }), 
{},
);

const convert_price = (price) => {
    if (!price) return null;
    let _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return _price;
};

export {
    groupByProducts ,
    convert_price
};