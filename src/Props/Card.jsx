import React, { useState } from 'react'

const Card = (props) => {
  const [hovered, setHovered] = useState(false)

  const styles = {
    card: {
      width: '220px',
      backgroundColor: '#181818',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: hovered
        ? '0 8px 24px rgba(0, 0, 0, 0.6)'
        : '0 4px 12px rgba(0, 0, 0, 0.4)',
      backgroundColor: hovered ? '#282828' : '#181818',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      fontFamily: '"Circular", "Helvetica Neue", Helvetica, Arial, sans-serif',
      color: '#fff',
      cursor: 'pointer',
      position: 'relative',
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      marginBottom: '16px',
    },
    image: {
      width: '100%',
      height: '188px',
      objectFit: 'cover',
      borderRadius: '6px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
      display: 'block',
    },
    playButton: {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: '#1db954',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
      opacity: hovered ? 1 : 0,
      transform: hovered ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    title: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 700,
      color: '#fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    content: {
      margin: 0,
      fontSize: '14px',
      color: '#b3b3b3',
      lineHeight: 1.4,
    },
  }

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.imageWrapper}>
        <img src={props.image} alt={props.title} style={styles.image} />
        <div style={styles.playButton}>▶</div>
      </div>
      <div style={styles.info}>
        <h3 style={styles.title}>{props.title}</h3>
        <p style={styles.content}>{props.content}</p>
      </div>
    </div>
  )
}

export default Card