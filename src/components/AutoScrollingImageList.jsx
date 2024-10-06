import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const AutoScrollingImageList = () => {
  const scrollRef = React.useRef(null);

  const itemData = [
    {
      img: 'https://via.placeholder.com/400x300?text=Image+1',
      title: 'Image 1',
    },
    {
      img: 'https://via.placeholder.com/400x300?text=Image+2',
      title: 'Image 2',
    },
    {
      img: 'https://via.placeholder.com/400x300?text=Image+3',
      title: 'Image 3',
    },
    {
      img: 'https://via.placeholder.com/400x300?text=Image+4',
      title: 'Image 4',
    },
    {
      img: 'https://via.placeholder.com/400x300?text=Image+5',
      title: 'Image 5',
    },
    {
      img: 'https://via.placeholder.com/400x300?text=Image+6',
      title: 'Image 6',
    },
  ];

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <Box
      ref={scrollRef}
      sx={{
        width: '100%', // Take full width of the parent container
        maxWidth: '100%', // Prevent extending beyond the container
        overflow: 'hidden', // Hide any overflow
        display: 'flex',
        justifyContent: 'center', // Center the content
      }}
    >
      <ImageList
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          overflow: 'hidden', // Ensure the image list doesn't overflow
          maxWidth: '100%', // Limit to container size
        }}
        cols={2}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                width: '400px',
                height: '300px',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default AutoScrollingImageList;
