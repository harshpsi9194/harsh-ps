import { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starfieldRef.current) return;

      const starfield = starfieldRef.current;
      const numberOfStars = 80;

      // Clear existing stars
      starfield.innerHTML = '';

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size for depth effect
        const sizeClass = Math.random() < 0.6 ? 'star-small' : 
                         Math.random() < 0.8 ? 'star-medium' : 'star-large';
        star.classList.add(sizeClass);
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay for more natural twinkling
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starfield.appendChild(star);
      }
    };

    createStars();

    // Recreate stars on window resize
    const handleResize = () => createStars();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
};

export default StarfieldBackground;