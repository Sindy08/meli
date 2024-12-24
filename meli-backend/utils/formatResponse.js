exports.formatItems = (data) => {
    const categories = data.filters
      .find(filter => filter.id === 'category')?.values[0]?.path_from_root.map(category => category.name) || [];
  
    const items = data.results.map(item => ({
      id: item.id,
      title: item.title,
      seller: item.seller?.nickname,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: Math.round((item.price % 1) * 100),
        regular_amount: item.original_price || null,
      },
      picture: item.thumbnail_id,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      installments: item.installments ? `${item.installments.quantity} x ${item.installments.amount}` : null,
    }));
  
    return { categories, items };
  };
  
  exports.formatItemDetails = (data) => {
    const { item, description, category } = data;
  
    return {
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: Math.round((item.price % 1) * 100),
          regular_amount: item.original_price || null,
        },
        pictures: item.pictures.map((pic) => pic.secure_url),
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        installments: item.installments
          ? `${item.installments.quantity} x ${item.installments.amount}`
          : null,
        description: description.plain_text,
        attributes: item.attributes.map((attr) => ({
          id: attr.id,
          name: attr.name,
          value_name: attr.value_name,
        })),
        category_path_from_root: category.path_from_root.map((cat) => ({
          id: cat.id,
          name: cat.name,
        })),
      },
    };
  };
  
  