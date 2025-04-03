const PlaceholderImage = ({ text, className = "" }) => {
    // Generate a consistent color based on the text
    const stringToColor = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      
      let color = '#';
      for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
      }
      
      return color;
    };
    
    const bgColor = stringToColor(text);
    
    return (
      <div 
        className={`w-full h-full flex items-center justify-center rounded-md ${className}`}
        style={{ 
          backgroundColor: `${bgColor}20`, // 20% opacity version of the color
          color: bgColor,
        }}
      >
        <span className="font-bold text-lg">
          {text.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  };
  
  export default PlaceholderImage;