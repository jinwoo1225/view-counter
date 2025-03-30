'use client';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3.5rem',
        marginBottom: '1.5rem',
        background: 'linear-gradient(45deg, #4c1, #2a2a2a)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }}>
        View Counter API
      </h1>
      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2.5rem',
        maxWidth: '600px',
        lineHeight: '1.8',
        color: '#e0e0e0',
        fontWeight: 400
      }}>
        이 API는 GitHub README에서 조회수를 표시하는 데 사용됩니다.
      </p>
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <a href="/api/badge" style={{
          padding: '1rem 2rem',
          background: '#4c1',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1.1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}>
          배지 보기
        </a>
        <a href="https://github.com/jinwoo1225/view-counter" target="_blank" rel="noopener noreferrer" style={{
          padding: '1rem 2rem',
          background: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          fontWeight: 500,
          fontSize: '1.1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}>
          GitHub 저장소
        </a>
      </div>
    </main>
  )
} 