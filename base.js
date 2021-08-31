function categories (amount) {
    let category = '';
    if (amount < 1000)
        category = 'small';
    else if (amount < 7000)
        category = 'mid'
    else if (amount < 50000)
        category = 'Mid large';
    else if (amount < 100000)
        category = 'Large';
    return category;
}

// Ticket B: 
// 1. Sủa mid từ 10000 -> 7000
// 2. Bổ xung thêm loại < 50000 là Mid large.