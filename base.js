function categories (amount) {
    let category = '';
    if (amount < 1000)
        category = 'small';
    else if (amount < 10000)
        category = 'Mid';
    else if (amount < 100000)
        category = 'Large';
    return category;
}