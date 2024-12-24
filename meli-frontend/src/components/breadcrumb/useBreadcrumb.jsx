import { useNavigate } from 'react-router-dom';

const useBreadcrumb = (categories) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const getBreadcrumbLinks = () => {
    if (!categories || categories.length === 0) return [];
    
    return categories.map((category, index) => ({
      name: category.name,
      path: `/items?search=${category.name}`,
      isLast: index === categories.length - 1,
    }));
  };

  return {
    handleGoBack,
    getBreadcrumbLinks,
  };
};

export default useBreadcrumb;
