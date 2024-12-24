import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useSearchBox = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') || '');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleLogoClick = (e) => {
      if (e.target.matches('.header__logo-img')) {
        setQuery('');
        inputRef.current?.blur();
      }
    };

    document.addEventListener('click', handleLogoClick);
    return () => document.removeEventListener('click', handleLogoClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      localStorage.setItem("hasVisited", "true");
      navigate(`/items?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return {
    query,
    setQuery,
    handleSubmit,
    inputRef,
  };
};

export default useSearchBox;